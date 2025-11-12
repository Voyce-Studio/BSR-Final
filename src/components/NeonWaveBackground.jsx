import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';

const vertexShader = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform vec2 iResolution;
uniform float iTime;

#define RESOLUTION    iResolution
#define TIME          iTime
#define PI            3.141592654
#define TAU           (2.0*PI)

const vec4 hsv2rgb_K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 hsv2rgb(vec3 c) {
  vec3 p = abs(fract(c.xxx + hsv2rgb_K.xyz) * 6.0 - hsv2rgb_K.www);
  return c.z * mix(hsv2rgb_K.xxx, clamp(p - hsv2rgb_K.xxx, 0.0, 1.0), c.y);
}

vec4 alphaBlend(vec4 back, vec4 front) {
  float w = front.w + back.w*(1.0-front.w);
  vec3 xyz = (front.xyz*front.w + back.xyz*back.w*(1.0-front.w))/w;
  return w > 0.0 ? vec4(xyz, w) : vec4(0.0);
}

vec3 alphaBlend(vec3 back, vec4 front) {
  return mix(back, front.xyz, front.w);
}

float tanh_approx(float x) {
  float x2 = x*x;
  return clamp(x*(27.0 + x2)/(27.0+9.0*x2), -1.0, 1.0);
}

vec3 tanh_vec3(vec3 v) {
  return vec3(tanh_approx(v.x), tanh_approx(v.y), tanh_approx(v.z));
}

float hash(float co) {
  return fract(sin(co*12.9898) * 13758.5453);
}

float hash(vec2 p) {
  float a = dot (p, vec2 (127.1, 311.7));
  return fract(sin(a)*43758.5453123);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  float a = hash(i + vec2(0.0,0.0));
  float b = hash(i + vec2(1.0,0.0));
  float c = hash(i + vec2(0.0,1.0));
  float d = hash(i + vec2(1.0,1.0));
  float m0 = mix(a, b, u.x);
  float m1 = mix(c, d, u.x);
  float m2 = mix(m0, m1, u.y);
  return m2;
}

vec2 raySphere(vec3 ro, vec3 rd, vec4 sph) {
  vec3 oc = ro - sph.xyz;
  float b = dot( oc, rd );
  float c = dot( oc, oc ) - sph.w*sph.w;
  float h = b*b - c;
  if( h<0.0 ) return vec2(-1.0);
  h = sqrt( h );
  return vec2(-b - h, -b + h);
}

float mod1(inout float p, float size) {
  float halfsize = size*0.5;
  float c = floor((p + halfsize)/size);
  p = mod(p + halfsize, size) - halfsize;
  return c;
}

vec2 mod2(inout vec2 p, vec2 size) {
  vec2 c = floor((p + size*0.5)/size);
  p = mod(p + size*0.5,size) - size*0.5;
  return c;
}

vec2 hash2(vec2 p) {
  p = vec2(dot (p, vec2 (127.1, 311.7)), dot (p, vec2 (269.5, 183.3)));
  return fract(sin(p)*43758.5453123);
}

float hifbm(vec2 p) {
  const float aa = 0.5;
  const float pp = 2.0-0.;
  float sum = 0.0;
  float a   = 1.0;
  for (int i = 0; i < 5; ++i) {
    sum += a*vnoise(p);
    a *= aa;
    p *= pp;
  }
  return sum;
}

float lofbm(vec2 p) {
  const float aa = 0.5;
  const float pp = 2.0-0.;
  float sum = 0.0;
  float a   = 1.0;
  for (int i = 0; i < 2; ++i) {
    sum += a*vnoise(p);
    a *= aa;
    p *= pp;
  }
  return sum;
}

float hiheight(vec2 p) {
  return hifbm(p)-1.8;
}

float loheight(vec2 p) {
  return lofbm(p)-2.15;
}

vec4 plane(vec3 ro, vec3 rd, vec3 pp, vec3 npp, vec3 off, float n) {
  float h = hash(n);
  float s = mix(0.05, 0.25, h);
  vec3 hn;
  vec2 p = (pp-off*2.0*vec3(1.0, 1.0, 0.0)).xy;
  const vec2 stp = vec2(0.5, 0.33); 
  float he    = hiheight(vec2(p.x, pp.z)*stp);
  float lohe  = loheight(vec2(p.x, pp.z)*stp);
  float d = p.y-he;
  float lod = p.y - lohe;
  float aa = distance(pp, npp)*sqrt(1.0/3.0);
  float t = smoothstep(aa, -aa, d);
  float df = exp(-0.1*(distance(ro, pp)-2.));  
  vec3 acol = hsv2rgb(vec3(mix(0.9, 0.6, df), 0.9, mix(1.0, 0.0, df)));
  vec3 gcol = hsv2rgb(vec3(0.6, 0.5, tanh_approx(exp(-mix(2.0, 8.0, df)*lod))));
  vec3 col = vec3(0.0);
  col += acol;
  col += 0.5*gcol;
  return vec4(col, t);
}

vec3 stars(vec2 sp, float hh) {
  const vec3 scol0 = hsv2rgb(vec3(0.85, 0.8, 1.0));
  const vec3 scol1 = hsv2rgb(vec3(0.65, 0.5, 1.0));
  vec3 col = vec3(0.0);
  const float m = 6.0;
  for (float i = 0.0; i < m; ++i) {
    vec2 pp = sp+0.5*i;
    float s = i/(m-1.0);
    vec2 dim  = vec2(mix(0.05, 0.003, s)*PI);
    vec2 np = mod2(pp, dim);
    vec2 h = hash2(np+127.0+i);
    vec2 o = -1.0+2.0*h;
    float y = sin(sp.x);
    pp += o*dim*0.5;
    pp.y *= y;
    float l = length(pp);
    float h1 = fract(h.x*1667.0);
    float h2 = fract(h.x*1887.0);
    float h3 = fract(h.x*2997.0);
    vec3 scol = mix(8.0*h2, 0.25*h2*h2, s)*mix(scol0, scol1, h1*h1);
    vec3 ccol = col + exp(-(mix(6000.0, 2000.0, hh)/mix(2.0, 0.25, s))*max(l-0.001, 0.0))*scol;
    ccol *= mix(0.125, 1.0, smoothstep(1.0, 0.99, sin(0.25*TIME+TAU*h.y)));
    col = h3 < y ? ccol : col;
  }
  return col;
}

vec3 toSpherical(vec3 p) {
  float r   = length(p);
  float t   = acos(p.z/r);
  float ph  = atan(p.y, p.x);
  return vec3(r, t, ph);
}

const vec3 lpos   = 1E6*vec3(0., -0.15, 1.0);
const vec3 ldir   = normalize(lpos);

vec4 moon(vec3 ro, vec3 rd) {
  const vec4 mdim   = vec4(1E5*vec3(0., 0.4, 1.0), 20000.0);
  const vec3 mcol0  = hsv2rgb(vec3(0.75, 0.7, 1.0));
  const vec3 mcol3  = hsv2rgb(vec3(0.75, 0.55, 1.0));
  vec2 md     = raySphere(ro, rd, mdim);
  vec3 mpos   = ro + rd*md.x;
  vec3 mnor   = normalize(mpos-mdim.xyz);
  float mdif  = max(dot(ldir, mnor), 0.0);
  float mf    = smoothstep(0.0, 10000.0, md.y - md.x);
  float mfre  = 1.0+dot(rd, mnor); 
  float imfre = 1.0-mfre;
  vec3 col = vec3(0.0);
  col += mdif*mcol0*4.0;
  float d0   = abs(mnor.x);
  col += mcol3*0.5*tanh_approx(0.0025/max(d0, 0.0))*imfre;
  return vec4(col, mf);
}

vec3 skyColor(vec3 ro, vec3 rd) {
  const vec3 acol   = hsv2rgb(vec3(0.6, 0.9, 0.075));
  const vec3 lcol   = hsv2rgb(vec3(0.75, 0.8, 1.0));
  vec2 sp     = toSpherical(rd.xzy).yz;
  float lf    = pow(max(dot(ldir, rd), 0.0), 80.0);
  float li    = 0.02*mix(1.0, 10.0, lf)/(abs((rd.y+0.055))+0.025);
  float lz    = step(-0.055, rd.y);
  vec4 mcol   = moon(ro, rd);
  vec3 col = vec3(0.0);
  col += stars(sp, 0.25)*smoothstep(0.5, 0.0, li)*lz;  
  col  = mix(col, mcol.xyz, mcol.w);
  col += smoothstep(-0.4, 0.0, (sp.x-PI*0.5))*acol;
  col += tanh_vec3(lcol*li);
  return col;
}

vec3 color(vec3 ww, vec3 uu, vec3 vv, vec3 ro, vec2 p) {
  vec2 np = p + 2.0/RESOLUTION.y;
  float rdd = 2.0;
  vec3 rd = normalize(p.x*uu + p.y*vv + rdd*ww);
  vec3 nrd = normalize(np.x*uu + np.y*vv + rdd*ww);
  const float planeDist = 1.0;
  const int furthest = 12;
  const int fadeFrom = max(furthest-2, 0);
  const float fadeDist = planeDist*float(fadeFrom);
  const float maxDist  = planeDist*float(furthest);
  float nz = floor(ro.z / planeDist);
  vec3 skyCol = skyColor(ro, rd);
  vec4 acol = vec4(0.0);
  const float cutOff = 0.95;
  bool cutOut = false;
  for (int i = 1; i <= furthest; ++i) {
    float pz = planeDist*nz + planeDist*float(i);
    float pd = (pz - ro.z)/rd.z;
    vec3 pp = ro + rd*pd;
    if (pp.y < 0. && pd > 0.0 && acol.w < cutOff) {
      vec3 npp = ro + nrd*pd;
      vec3 off = vec3(0.0);
      vec4 pcol = plane(ro, rd, pp, npp, off, nz+float(i));
      float fadeIn = smoothstep(maxDist, fadeDist, pd);
      pcol.xyz = mix(skyCol, pcol.xyz, fadeIn);
      pcol = clamp(pcol, 0.0, 1.0);
      acol = alphaBlend(pcol, acol);
    } else {
      cutOut = true;
      acol.w = acol.w > cutOff ? 1.0 : acol.w;
      break;
    }
  }
  vec3 col = alphaBlend(skyCol, acol);
  return col;
}

vec3 effect(vec2 p, vec2 q) {
  float tm= TIME*0.25;
  vec3 ro = vec3(0.0, 0.0, tm);
  vec3 dro= normalize(vec3(0.0, 0.09, 1.0));  
  vec3 ww = normalize(dro);
  vec3 uu = normalize(cross(normalize(vec3(0.0,1.0,0.0)), ww));
  vec3 vv = normalize(cross(ww, uu));
  vec3 col = color(ww, uu, vv, ro, p);
  return col;
}

float sRGB(float t) { return mix(1.055*pow(t, 1./2.4) - 0.055, 12.92*t, step(t, 0.0031308)); }
vec3 sRGB(in vec3 c) { return vec3 (sRGB(c.x), sRGB(c.y), sRGB(c.z)); }

vec3 aces_approx(vec3 v) {
  v = max(v, 0.0);
  v *= 0.6;
  float a = 2.51;
  float b = 0.03;
  float c = 2.43;
  float d = 0.59;
  float e = 0.14;
  return clamp((v*(a*v+b))/(v*(c*v+d)+e), 0.0, 1.0);
}

void main() {
  vec2 fragCoord = gl_FragCoord.xy;
  vec2 q = fragCoord/RESOLUTION.xy;
  vec2 p = -1. + 2. * q;
  p.x *= RESOLUTION.x/RESOLUTION.y;
  vec3 col = effect(p, q);
  col *= smoothstep(0.0, 8.0, TIME-abs(q.y));
  col = aces_approx(col);
  col = sRGB(col);
  gl_FragColor = vec4(col, 1.0);
}
`;

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl) {
  const vShader = createShader(gl, gl.VERTEX_SHADER, vertexShader);
  const fShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
  if (!vShader || !fShader) {
    return null;
  }
  const program = gl.createProgram();
  gl.attachShader(program, vShader);
  gl.attachShader(program, fShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }
  gl.deleteShader(vShader);
  gl.deleteShader(fShader);
  return program;
}

export default function NeonWaveBackground({ className }) {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', { preserveDrawingBuffer: false });
    if (!gl) {
      canvas.style.background = 'radial-gradient(circle at 20% 20%, #ffb6ff 0%, #2b1d3a 55%, #04010a 100%)';
      return;
    }

    const program = createProgram(gl);
    if (!program) return undefined;

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, 'iResolution');
    const timeLocation = gl.getUniformLocation(program, 'iTime');

    const resize = () => {
      const { clientWidth, clientHeight } = canvas;
      const dpr = window.devicePixelRatio || 1;
      const width = Math.max(1, Math.round(clientWidth * dpr));
      const height = Math.max(1, Math.round(clientHeight * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, width, height);
    };

    const render = (time) => {
      resize();
      gl.useProgram(program);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, time * 0.001);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frameRef.current = requestAnimationFrame(render);
    };

    frameRef.current = requestAnimationFrame(render);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      gl.deleteProgram(program);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return <canvas ref={canvasRef} className={clsx('absolute inset-0 h-full w-full', className)} aria-hidden="true" />;
}

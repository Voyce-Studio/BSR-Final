import React from 'react';

export default function ScrollbarStyles() {
  return (
    <style>
      {`
        body {
          scrollbar-width: thin;
        }
        body::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        body::-webkit-scrollbar-thumb {
          background-color: #dcdcdc;
          border-radius: 0;
        }
      `}
    </style>
  );
}

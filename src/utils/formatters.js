export const formatDate = (dateString) => new Date(dateString).toLocaleDateString(undefined, {
  month: 'short',
  year: 'numeric'
});

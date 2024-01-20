export const formatSearchQuery = (query: string): string => {
  const formattedQuery = query.trim().replace(/\s+/g, "+");
  return formattedQuery;
};

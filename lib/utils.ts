export const formatSearchQuery = (query: string): string => {
  // Trim the string and replace spaces with '+'
  const formattedQuery = query.trim().replace(/\s+/g, "+");
  return formattedQuery;
};

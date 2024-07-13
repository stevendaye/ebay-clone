export const sanitizeString = (title: string) => {
  return title.replace(/[\s&,()]+/g, "-").toLowerCase();
};

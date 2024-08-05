export const sanitizeCategory = (title: string) => {
  return title.replace(/[\s&,()]+/g, "-").toLowerCase();
};

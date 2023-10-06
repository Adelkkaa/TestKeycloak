export const objectEmptyFilter = <T>(
  obj: Record<string, T>,
  filterFunction: (objItem: T) => boolean
): Record<string, T> => {
  const newObj = { ...obj };
  for (const key in newObj) {
    if (!filterFunction(newObj[key])) {
      delete newObj[key];
    }
  }
  return newObj;
};

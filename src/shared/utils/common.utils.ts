export const setStringValue = value => {
  if (typeof value === 'string') {
    return value;
  }
  return '';
};

export const setNumberValue = value => {
  if (typeof value === 'number') {
    return value;
  }
  return null;
};

export const setArrValue = arr => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr;
};

export const sortArrByDirection = (
  arr: any[],
  direction: TV.SortDirection,
  value: TV.SortKey
) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return direction === 'asc'
    ? [
        ...arr.sort((a, b) => {
          if (a[value as string] > b[value as string]) {
            return 1;
          }
          if (a[value as string] < b[value as string]) {
            return -1;
          }
          return 0;
        })
      ]
    : [
        ...arr.sort((a, b) => {
          if (a[value as string] < b[value as string]) {
            return 1;
          }
          if (a[value as string] > b[value as string]) {
            return -1;
          }
          return 0;
        })
      ];
};

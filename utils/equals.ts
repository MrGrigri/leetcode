export const equals = (condition1: any, condition2: any): boolean => {
  if (condition1 === condition2) return true;

  console.error(`Expected ${condition1 || 'undefined'} to equal ${condition2 || 'undefined'}`);

  return false;
};

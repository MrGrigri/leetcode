/** @deprecated - Use Vitest instead */
export const equals = (condition1: any, condition2: any): boolean => {
  let passed = false;
  if (Array.isArray(condition1)) {
    // Handle Array
    const arr1 = condition1.concat().sort();
    const arr2 = condition2.concat().sort();

    if (arr1.length !== arr2.length) passed = false;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        passed = false;
      }
    }

    passed = true;
  }

  if (typeof condition1 === 'object') {
    // Handle Object
    passed = JSON.stringify(condition1) === JSON.stringify(condition2);
  }

  if (condition1 === condition2) passed = true;

  if (!passed) {
    console.error(`Expected ${condition1 || 'undefined'} to equal ${condition2 || 'undefined'}`);
  }

  return passed;
};

// 转换小驼峰
export const smallHump = (str: string): string => {
  const strArr: string[] = str.split(' ');
  let result: string = '';
  strArr.forEach((item, index) => {
    if (index === 0) {
      result += item.toLocaleLowerCase();
    } else {
      result += item.charAt(0).toLocaleUpperCase() + item.substring(1);
    }
  });
  return result;
};

// 转换大驼峰
export const bigHump = (str: string): string => {
  const strArr: string[] = str.split(' ');
  let result: string = '';
  strArr.forEach((item, index) => {
    result += item.charAt(0).toLocaleUpperCase() + item.substring(1);
  });
  return result;
};

// 转换连词线
export const wordLine = (str: string): string => {
  const strArr: string[] = str.split(' ');
  let result: string = '';
  strArr.forEach((item, index) => {
    if (index === 0) {
      result += item.toLocaleLowerCase();
    } else {
      result += `-${item.toLocaleLowerCase()}`;
    }
  });
  return result;
};

// 转换下划线
export const underline = (str: string): string => {
  const strArr: string[] = str.split(' ');
  let result: string = '';
  strArr.forEach((item, index) => {
    if (index === 0) {
      result += item.toLocaleLowerCase();
    } else {
      result += `_${item.toLocaleLowerCase()}`;
    }
  });
  return result;
};

// 转换常量
export const constant = (str: string): string => {
  const strArr: string[] = str.split(' ');
  let result: string = '';
  strArr.forEach((item, index) => {
    if (index === 0) {
      result += item.toLocaleUpperCase();
    } else {
      result += `_${item.toLocaleUpperCase()}`;
    }
  });
  return result;
};


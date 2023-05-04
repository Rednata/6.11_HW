export const isNumberDigit = (str) => {
  if (Number.isInteger(+str)) {
    return true
  } else {
    return false
  };
}

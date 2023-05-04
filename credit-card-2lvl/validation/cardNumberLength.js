export const isValidCardNumberLength = (str) => {
  if (str.length === 16) {
    return true
  } else {
    return false;
  }
}

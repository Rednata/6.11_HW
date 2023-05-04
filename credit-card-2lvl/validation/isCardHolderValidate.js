const hasCardHolderTwoWords = (str) => {
  const temp = str.replace(/\s+/g, ' ')
  return temp.split(' ')
}

const hasCardHolderLatinLetters = (str) => {
  const temp = str.replace(/\s+/g, '');
  if (/^[a-zA-Z]+$/.test(temp)) {
    return true
  } else return false  
}

export {hasCardHolderLatinLetters, hasCardHolderTwoWords};

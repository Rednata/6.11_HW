import { hasCardHolderLatinLetters, hasCardHolderTwoWords } from './isCardHolderValidate.js';

describe('Проверка имени держателя карты', () => {
  const arr = ['sdsdfsdfsdfsdfsdf', 'asdfasdfa', 'Asdsdf Rzxfxzx', 'Afdf asfasd Rasdasd', 'Asdfs898 Saada12', 'Олываы Ифывфывы'];

  it('Строка с именем карты состоит из двух слов', () => {
    expect(hasCardHolderTwoWords(arr[2]).length).toBe(2)    
  });

  it('Строка с именем карты состоит из одного слова', () => {
    expect(hasCardHolderTwoWords(arr[0]).length).toBe(1);
    expect(hasCardHolderTwoWords(arr[1]).length).toBe(1);
  });

  it('Строка с именем карты состоит больше чем из двух слов', () => {
    expect(hasCardHolderTwoWords(arr[3]).length).toBeGreaterThan(2);    
  });

  it('Строка с именем карты содержит только латинские символы', () => {
    expect(hasCardHolderLatinLetters(arr[0])).toBeTruthy();
    expect(hasCardHolderLatinLetters(arr[1])).toBeTruthy();
    expect(hasCardHolderLatinLetters(arr[2])).toBeTruthy();
    expect(hasCardHolderLatinLetters(arr[3])).toBeTruthy();
  });
  it('Строка с именем карты содержит НЕ только латинские символы', () => {
    expect(hasCardHolderLatinLetters(arr[4])).toBeFalsy();
    expect(hasCardHolderLatinLetters(arr[5])).toBeFalsy();
  });

})

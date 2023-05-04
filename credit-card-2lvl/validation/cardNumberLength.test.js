import { isValidCardNumberLength } from './cardNumberLength.js';

const numbersArray = ['1234696431364', '135652123658952350125487522', '23456465', '2136548521098654', '5324587452012547'];

describe('Проверка длины номера карты', () => {  
  
  it('Корректная длина', () => {
    expect(isValidCardNumberLength(numbersArray[3])).toBeTruthy();
    expect(isValidCardNumberLength(numbersArray[4])).toBeTruthy();    
  });

  it('Некорректная длина', () => {
    expect(isValidCardNumberLength(numbersArray[0])).toBeFalsy();
    expect(isValidCardNumberLength(numbersArray[1])).toBeFalsy();    
    expect(isValidCardNumberLength(numbersArray[2])).toBeFalsy();    
  })
})

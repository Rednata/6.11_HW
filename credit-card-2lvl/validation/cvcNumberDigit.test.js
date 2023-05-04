import { isNumberDigit } from './cardNumberDigit.js';

const arr = ['213', '532', '5I4', '5.3', '0З1', 'L31'];

describe('Проверка на содержание нецифровых символов', () => {

  it('Содержит только цифровые символы', () => {
    expect(isNumberDigit(arr[0])).toBeTruthy();
    expect(isNumberDigit(arr[1])).toBeTruthy();
  });

  it('Содержит знаки препинания', () => {
    expect(isNumberDigit(arr[3])).toBeFalsy();    
  });
  
  it('Содержит латиницу', () => {
    expect(isNumberDigit(arr[2])).toBeFalsy();    
    expect(isNumberDigit(arr[5])).toBeFalsy();    
  });

  it('Содержит кириллицу', () => {
    expect(isNumberDigit(arr[4])).toBeFalsy();        
  })
})
import { isNumberDigit } from './cardNumberDigit.js';

const arr = ['2136548521098654', '5324587452012547', '532458x45r201547', '53245,745.012547', '5324587452ХХ2547', '532458II52012547'];

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
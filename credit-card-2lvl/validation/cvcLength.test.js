import { cvcLength } from './cvcLength.js';

const arr = ['132', '021', '784', '12', '1234', '3456'];

describe('Проверка количества символов CVC карты', () => {  
  
  it('Содержит 3 символа', () => {
    expect(cvcLength(arr[0])).toBe(3);
    expect(cvcLength(arr[1])).toBe(3);
    expect(cvcLength(arr[2])).toBe(3);
  });

  it('Содержит меньше 3-х символов', () => {
    expect(cvcLength(arr[3])).toBeLessThan(3);    
  })
  it('Содержит больше 3-х символов', () => {
    expect(cvcLength(arr[4])).toBeGreaterThan(3);    
    expect(cvcLength(arr[5])).toBeGreaterThan(3);    
  })
})

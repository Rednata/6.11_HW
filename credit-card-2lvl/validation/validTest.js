import { hasCardHolderLatinLetters, hasCardHolderTwoWords } from "./isCardHolderValidate.js";

import { isNumberDigit } from "./cardNumberDigit.js";
import{isValidCardNumberLength} from './cardNumberLength.js'
import { cvcLength } from "./cvcLength.js";



const getFormatCardNumber = () => {
  const inputNumber = document.querySelector('#cardnumber').value;
  let inputNumberFormat = '';
  for (const letter of inputNumber) {
    if (!(letter === ' ' || letter === '.')) {       
      inputNumberFormat += letter;
    } 
  }
  return inputNumberFormat;
}

const createMessage = (text) => {
  const h2 = document.createElement('h2');
    h2.textContent = text;
    document.body.append(h2);

    setTimeout(() => {
      h2.remove();      
    }, 2000);
}

const isValidate = (title, cardNumber, cvcNumber) => {
  
  console.log('title: ', title);
  console.log('cardNumber: ', cardNumber);
  console.log('cvcNumber: ', cvcNumber);
  
  console.log(hasCardHolderTwoWords(title).length === 2);
  console.log(hasCardHolderLatinLetters(title) );
  console.log(isNumberDigit(cardNumber) );
  console.log(isValidCardNumberLength(cardNumber) );
  console.log(cvcLength(cvcNumber) === 3);
  console.log(isNumberDigit(cvcNumber));
  console.log('=================================');

  if (
    (hasCardHolderTwoWords(title).length === 2) &&
    hasCardHolderLatinLetters(title) &&
    isNumberDigit(cardNumber) &&
    isValidCardNumberLength(cardNumber) &&
    (cvcLength(cvcNumber) === 3) &&
    isNumberDigit(cvcNumber)
    ) { 
      createMessage('Данные верны');
      document.querySelector('.creditcard').classList.add('flipped');
    } else {
      createMessage('Данные неверны, проверьте введенную информацию');
    }
    const btn = document.querySelector('.btn-valid');
    btn.removeEventListener('click', taskClickBtn);
}

const taskClickBtn = () => {
  const cardHolder = document.querySelector('#name').value;
    const cardNumber = document.querySelector('#cardnumber').value;
    const formatCardNumber = getFormatCardNumber(cardNumber);
    const cvvNumber = document.querySelector('#securitycode').value;
    
    isValidate(cardHolder, formatCardNumber, cvvNumber);

}
export const getTesting = () => {
  const btn = document.querySelector('.btn-valid');
  btn.addEventListener('click', taskClickBtn);
}


import {el, setChildren} from 'redom';
import CreditCardInputMask from 'credit-card-input-mask';

//  =========== RENDER =============
const arrForm = [
  holder = {
    name: 'holder',
    text: 'Card Holder',   
    type: 'text'
  },
  number = {
    name: 'number',    
    text: 'Card Number', 
    type: '',    
  },
  date = {
    name: 'date',    
    text: 'Card Expiry',    
    type: 'text',
  },
  cvv = {
    name: 'cvv',    
    text: 'CVV',    
    type: 'text'
  }
]

const creditCard = el('div.credit-card', 
  el('span.card__number', 'xxx xxxx xxxx xxxx'),
    el('div.card__personal',
      el('span.card__name', 'John Doe'), 
      el('span.card__date', '04/24')
      )
  )

const renderformElem = (elem) => {
  const formElem = el(`div.form__input-wrap.form__input-wrap_${elem.name}`,
    el(`label.form__label.form__${elem.name}-label`, elem.text),
    el(`input.input.input__${elem.name}`, {type: elem.type}))
  return formElem;
}

const formElems = arrForm.map(renderformElem);
const form = el('form.form#form', {action: '#'});
const buttonForm = el('button.form__button', 'CHECK OUT');

setChildren(form, formElems, buttonForm);

const card = el('div.wrapper', 
el('div.card', 
  el('p.secure', 'Secure Checkout'), creditCard, form)
)

setChildren(document.body, card);

//  ============ FUNCTION ===============

const inputHolder = form.querySelector('.input__holder');
const inputNumber = form.querySelector('.input__number');
const inputDate = form.querySelector('.input__date');
const inputCVV = form.querySelector('.input__cvv');
const outputHolder = creditCard.querySelector('.card__name');
const outputNumber = creditCard.querySelector('.card__number');
const outputDate = creditCard.querySelector('.card__date');

const getValue = (input, output) => {  
  input.addEventListener('input', ({target}) => {   
    output.textContent = target.value;
  })
}

form.addEventListener('click', ({target}) => {
  switch(target) {
    case (inputHolder): 
      getValue(target, outputHolder)
      break;
    case (inputNumber): 
      getValue(target, outputNumber)
      break
    case (inputDate): 
      getValue(target, outputDate)
      break      
  }
})

new CreditCardInputMask({
  element: inputNumber,  
  pattern: "{{9999}} {{9999}} {{9999}} {{9999}}",
});
new CreditCardInputMask({
  element: inputDate,
  pattern: "{{99}}/{{99}}"  
});
new CreditCardInputMask({
  element: inputCVV,
  pattern: "{{999}}"  
});

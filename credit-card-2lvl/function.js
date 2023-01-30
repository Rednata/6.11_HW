// import CardInfo from "card-info/dist/card-info";
import {el, setChildren, svg} from 'redom';

import {CardInfo} from 'card-info'


const valueFull = () => {
  const cardName = document.querySelector('#name');
  const cardDate = document.querySelector('#expirationdate');
  const cardNumber = document.querySelector('#cardnumber');
  const cardSecurity = document.querySelector('#securitycode');
  const form = document.querySelector('.form-container');
  const svgNumber = document.querySelector('#svgnumber');
  const svgName = document.querySelector('#svgname');
  const svgExpire = document.querySelector('#svgexpire');
  const svgSecurity = document.querySelector('#svgsecurity');
  
  const getValueName = (target, svgElem) => {
    target.addEventListener('input', () => {
      svgElem.textContent = target.value;
      document.querySelector('#svgnameback').textContent = target.value;
    }) 
  }

  const getValueNumber = (target, svgElem) => {
    target.addEventListener('input', () => {
      svgElem.textContent = target.value;        
      });
  }


  const getValue = (target, svgElem) => {    
    target.addEventListener('input', () => {
        svgElem.textContent = target.value;    
    })
  }

  form.addEventListener('click', ({target}) => {

    if (target === cardName) {
      getValueName(target, svgName);

    } else if (target === cardNumber) {
      getValueNumber(target, svgNumber);  
      

    } else if (target === cardDate) {
      getValue(target, svgExpire)
    } else if (target === cardSecurity) {
      getValue(target, svgSecurity)
    }

    if (cardNumber.value) {
      const bank = new CardInfo(cardNumber.value, {
      brandsLogosPath: './node_modules/card-info/dist/brands-logos/'
      });
      console.log(bank);
      const bankImg = el('img', {src: `${bank.brandLogoSvg}`});
      setChildren(document.body, bankImg)
      const img = document.createElement('img');
      img.src = bank.brandLogoSvg;
      document.body.append(img);

    }
    if (cardName.value && cardNumber.value && cardDate.value && cardSecurity.value) {
      document.querySelector('.creditcard').classList.add('flipped');
    }
  })

  


// 6011331057646781
// 5018547789746673 = Maestro
}

export {valueFull};
import inputmask from "inputmask";

const getValueName = (target, svgElem, svgElemBack) => {    
  target.addEventListener('input', () => {     
      svgElem.textContent = target.value;                      
        svgElemBack.textContent = target.value        
  })
}

const getValueNumber = (target, svgElem) => {
  target.addEventListener('input', () => {            
      const card = mask.find(elem => {
        const reg = new RegExp(elem.regex);
        if (reg.test(target.value)) {            
          return elem
        }   
    })  
    const im = new Inputmask({mask: card.mask, placeholder: '.'})                      
    im.mask(target);      
    svgElem.textContent = target.value;   

    ccicon.innerHTML = card.icon;
    ccsingle.innerHTML =  card.logo;

    swapColor(card.color);  
    });
}

const getValue = (target, svgElem, maskCode) => {    
  target.addEventListener('input', () => {     
      svgElem.textContent = target.value;      
  })    
    const im = new inputmask({regex: maskCode});
    console.log(im);
    im.mask(target);
}

const valueFull = () => {
  const form = document.querySelector('.form-container');
  
  form.addEventListener('click', ({target}) => {    
    if (target === name) {      
      getValueName(target, svgname, svgnameback);
    } else if (target === expirationdate) {
      const maskCode = '[0-3][0-9]/[0-1][0-2]';
      getValue(target, document.querySelector('#svgexpire'), maskCode);
    } else if (target === cardnumber) {
      getValueNumber(target, document.querySelector('#svgnumber'));
    } else if (target === securitycode) {
      const maskCode = '[0-9]{3}';
      getValue(target, document.querySelector('#svgsecurity'), maskCode);  
    }
  })

  form.addEventListener('change', () => {
    if (name.value && cardnumber.value && expirationdate.value && securitycode.value) {
      document.querySelector('.creditcard').classList.add('flipped');
    }
  })


// 6011331057646781
// 5018547789746673 = Maestro
// 4556844844421710 = Visa
}

export {valueFull};
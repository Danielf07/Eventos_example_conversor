const PESOS = "1";
const DOLLAR = "2";
const PESO_DOLLAR = 0.0028;
const DOLLAR_PESO = 3623; 

function loadDocument() {
    const $form = document.getElementById('form');
    const $input = document.querySelector('#valueInput');  
    $form.addEventListener('submit', handlerSubmit);
    $input.addEventListener('keypress', convert);
    window.addEventListener('offline', () => {
        const $containerResult = document.querySelectorAll(".container-result")[0];
        $containerResult.style.color = "red";
        setText($containerResult, "Sin conexión")
    });

}

const convert = () => {
    // ELEMENTS
    const $input = document.querySelector('#valueInput');
    const $fromChange = document.querySelector('#fromChange');    
    const $toChange = document.querySelector('#toChange');    
    const $containerResult = document.querySelectorAll(".container-result")[0];       
    
    const valueInt = parseInt($input.value);
    const result = convertMoney($fromChange.value, $toChange.value, valueInt);
    
    setText($containerResult, result)
}

function handlerSubmit(event){   

    event.preventDefault();
    convert();
}

 /**
  * 
  * @param {*} $element htmlElement
  * @param {*} text value to set
  */
  function setText($element, text){
     $element.innerText = text
 }    

// 1dolar -> 3623 pesos
// 1 dolar -> 1 dolar

// 1 peso -> 0.00028 dolar
// 1 peso -> 1 peso

/**
 * Convierte un valor de pesos a dolares y bis
 * @param {*} from Base money
 * @param {*} to to money
 * @param {*} value value to convert
 * @returns 
 */
function convertMoney (from, to, value) {
    console.log('value: ', value);
let baseValue
    switch (from) {
        case PESOS:
            if(to === PESOS) return value;
            return value * 0.00028;
        case DOLLAR:
            if(to === DOLLAR) return value                         
            return value * 3623        
        default:
            return 0;
    }
}
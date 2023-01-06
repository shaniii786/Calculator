
let screen = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let equalCounter = 0;
let screenValue = '';
let flag = false;

for (item of buttons) {
    item.addEventListener('click', (e) => {
    
    
        
        if(equalCounter === 0 ){
            buttonText = e.target.innerText;
        }
        
        else if(equalCounter !== 0){
            equalCounter = 0;
            screenValue = '';
            buttonText = e.target.innerText;
        }
        
        console.log('Button text is ', buttonText);
        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
           
        }
        else if (buttonText == '=') {
            equalCounter +=1;
            screen.value =  screenValue;
            screen.value = eval(screenValue);
        }
        

        else if(buttonText === '+' || buttonText === '*'  || buttonText === '-' || buttonText === '%' || buttonText === "/" || buttonText === '('  || buttonText === ')' || buttonText === '.' ){
            if (flag){
                screenValue = screenValue.slice(0, -1); // Masteringjs.io   
                 
            }
            // if((buttonText === '+' || buttonText === '*'  || buttonText === '-' || buttonText === '%' || buttonText === "/" || buttonText === '('  || buttonText === ')' || buttonText === '.'  ) && screenValue === '' ){
            //     buttonText = ''
    
            // }

            

          else
          {
            flag= true;
          }
          screenValue += buttonText; 
          screen.value =  screenValue;
           
        }


        else {
            screenValue += buttonText;
            screen.value = eval(screenValue);
            flag=false;
        }
          
        
    })


}












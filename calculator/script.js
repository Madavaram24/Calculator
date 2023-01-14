let screen = document.getElementById("screen");
buttons = document.querySelectorAll('button');
let screenValue = '';

// the function called in the onclick of the icon in html is called here
function Remove() {
  screenValue = screen.value.slice(0, -1);
  screen.value = screenValue;
}

// each button is given its function by using for loop
for(item of buttons){
  item.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
    if(buttonText == 'x'){
      buttonText = '*'; // buttonText is changed so that eval can understand the function
      screenValue += buttonText;
      screen.value = screenValue;
    }
    else if(buttonText == 'AC'){
      screenValue = "";
      screen.value = screenValue;
    }
    else if(buttonText == '='){
      screen.value = eval(screenValue); // eval used to perform mathematical operations
    }
    else if(buttonText == 'x^y'){
      buttonText = '**';
      screenValue += buttonText;
      screen.value = screenValue;
    }
    else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  })
}

# Projects related to Dom

## project link
[ click here ]( https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code
## project 1
```javascript
console.log("Purvesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
        if (event.target.id==='grey') {
      body.style.backgroundColor =event.target.id;
    }
        if (event.target.id==='white') {
      body.style.backgroundColor =event.target.id;
    }
        if (event.target.id==='blue') {
      body.style.backgroundColor =event.target.id;
    }
        if (event.target.id==='yellow') {
      body.style.backgroundColor =event.target.id;
    }
        if (event.target.id==='purple') {
      body.style.backgroundColor =event.target.id;
    }
  });
});

```
## project 2

``` javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  const heightInput = parseInt(document.querySelector('#height').value) ;// Use querySelector for specificity
  const weightInput = parseInt(document.querySelector('#weight').value);
  const resultsElement = (document.querySelector('#results')); // Use querySelector for element

  // Validate height input
  if (isNaN(heightInput) || heightInput <= 0 ||heightInput=='') {
    resultsElement.textContent = `Please enter a valid height (positive number)` // Clearer error message
    
  }
 else  if (isNaN(weightInput) || weightInput <= 0 ||weightInput=='') {
    resultsElement.textContent = `Please enter a valid weight (positive number)` // Clearer error message
    
  }
  else{
    const bmi =(weightInput/((heightInput*heightInput)/10000)).toFixed(2)
    //show results 
    resultsElement.innerHTML=`<span>${bmi}</span>`;
  }
});
```

## project 3
``` javascript
 const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 100);

```
## project 4
``` javascript
let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.querySelector('p');

let prevGuess = [];

let numGuess = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a valid number');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess == 11) {
      displayGuess(guess);
      displaymessage(`Game Over. Random no was ${random}`);
      endgame();
    } else {
      displayGuess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess == random) {
    displaymessage('You guess it right');
    endgame();
  } else if (guess < random) {
    displaymessage('Number is too low');
  } else if (guess > random) {
    displaymessage('Number is too high');
  }
}

function displaymessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
  userInput.value = ''; //cleaning the previous value
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function newGame() {
  const newGamebutton = document.querySelector('#newGame');
  newGamebutton.addEventListener('click', function (e) {
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

function endgame() {
  userInput.value = '';
  playGame = false;
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id ="newGame">Start New Game </h2>`;
  startOver.appendChild(p);
  newGame();
}

```
## project 6
```javascript
//generate a random color
const randomcolor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startchangingcolor = function () {
  if (!intervalId) {
    intervalId = setInterval(changecolor, 1000);
  }
  function changecolor() {
    document.body.style.backgroundColor = randomcolor();
  }
};

const stopchangingcolor = function () {
  clearInterval(intervalId);
  intervalId = null;
};
document.getElementById('start').addEventListener('click', startchangingcolor);
document.getElementById('stop').addEventListener('click', stopchangingcolor);

```
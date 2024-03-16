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
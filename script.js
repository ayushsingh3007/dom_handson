
let highscoring = 0;
let chancesvalue = 100;
let Intialvalue = 100;
let randomnumber;
let guessnumber = null; // Declare guessnumber and initialize it to null

function random(n) {
  return Math.floor((Math.random() * n) + 1);
}

function generateRandomNumber() {
  randomnumber = random(100);
}

function guessing() {
  guessnumber = document.getElementById('input').value;

  if (guessnumber > randomnumber) {
    document.querySelector('.message').textContent = "Your guess is high";
    document.querySelector(".chancenumber").textContent = --chancesvalue;
  } else if (guessnumber < randomnumber) {
    document.querySelector('.message').textContent = "Your guess is low";
    document.querySelector(".chancenumber").textContent = --chancesvalue;
  } else {
    document.querySelector('.message').textContent = "Hurrah YOU WON";
    document.querySelector(".chancenumber").textContent = --chancesvalue;
    document.querySelector('.main_container').style.background = "violet";
    document.querySelector('.assignscore').textContent = chancesvalue;
    document.querySelector('.number_box').style.visibility = 'hidden';
    document.querySelector('.line').style.visibility = 'hidden';
    document.querySelector('.button2').style.visibility = 'hidden';
    document.querySelector('.hidden_number').style.visibility = 'visible';
    document.querySelector('.hidden_number').textContent = `${guessnumber}`;
    document.querySelector('.messagechange').textContent = "your guess is right";
  }
}

function playagain() {
  document.querySelector('.messagechange').textContent = "Guess My Number!";
  document.querySelector('.main_container').style.background = "brown";
  document.querySelector('.line').style.visibility = 'visible';
  document.querySelector('.button2').style.visibility = 'visible';
  document.querySelector('.message').textContent = "Start Guessing";
  document.querySelector('.number_box').style.visibility = 'visible';
  document.querySelector(".chancenumber").textContent = chancesvalue = 100;
  document.querySelector('.assignscore').textContent = `${chancesvalue}`; // Clear the previous guess number
  document.getElementById('input').value = "";

  generateRandomNumber(); // Generate a new random number

  // You need to update the displayed random number in the DOM if you wish to show it to the user
  // For example, if you have an element with id 'randomNumberDisplay' to show the random number, you can do this:
  // document.getElementById('randomNumberDisplay').textContent = randomnumber;
}

generateRandomNumber(); // Generate the initial random number
console.log(randomnumber);
	

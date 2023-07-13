let randomnumber=random(100);
 let highscoring=0;  
let chancesvalue=100;
let Intialvalue=100;
   function random(n){
   	 return Math.floor(Math.random()*n)+1
   }
   function guessing(){
   	let guessnumber=document.getElementById('input').value

if(guessnumber>randomnumber){
	document.querySelector('.message').textContent="Your guess is high"
		document.querySelector(".chancenumber").textContent=--chancesvalue

}



else if(guessnumber<randomnumber){
	document.querySelector('.message').textContent="Your guess is low"
		document.querySelector(".chancenumber").textContent=--chancesvalue

}


else{
	document.querySelector('.message').textContent="Hurrah YOU WON"
		document.querySelector(".chancenumber").textContent=--chancesvalue
		document.querySelector('.main_container').style.background="violet"
		document.querySelector('.assignscore').textContent=chancesvalue
		document.querySelector('.number_box').style.visibility='hidden'
		document.querySelector('.line').style.visibility='hidden'
		document.querySelector('.button2').style.visibility='hidden'
		document.querySelector('.hidden_number').style.visibility='visible '
		document.querySelector('.hidden_number').textContent=`${guessnumber}`
		document.querySelector('.messagechange').textContent="your guess is right"


}


   }


   // play again fuction changing 


  function playagain(){
document.querySelector('.messagechange').textContent="Guess My Number!"
document.querySelector('.main_container').style.background="brown"
document.querySelector('.line').style.visibility='visible'
document.querySelector('.button2').style.visibility='visible'
document.querySelector('.message').textContent="Start Gueesing"
document.querySelector('.number_box').style.visibility='visible'
document.querySelector(".chancenumber").textContent=`${Intialvalue}`
document.querySelector('.assignscore').textContent=`${highscoring}`
document.getElementById('input').value="";
  }










// this is for index1 file 





document.querySelector('#changing').innerText='Hello World'

function replace(){
 document.getElementById('changintext').innerText='Welcome to  Elevation Academy'
}
function direction(){
	let a=document.querySelector('.flex_container');
   if(a.style.flexDirection==='row'){
   	a.style.flexDirection='column'
   }
   else{
   	a.style.flexDirection='row'
   }
}
  

function clockcontainer(){
	let a= new Date().toLocaleTimeString();
	document.getElementById('childclock').innerHTML=a
}
setInterval(clockcontainer,1000)


let a=document.getElementById('changecolor')
a.style.color="red"
a.setAttribute("id", "headings")



 

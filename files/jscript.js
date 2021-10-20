const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}
let l=0;
function disableCards() {
	l+=1;
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
	
  resetBoard();
  if (l==6)
	{	popup();
		aaaa();
	
	}
}

function unflipCards() {
  lockBoard = true;


  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
//modify
var o=document.getElementById("obj");
let c=0;
function count(){
	c+=1
	o.innerHTML=c
}
let a=prompt("Enter your name:");
function popup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("m").style.display = "none";
  document.getElementById("d").style.display = "none";
}
function refresh(){
    window.location.reload();
}

function aaaa(){

let arr=[]

let nm=localStorage.getItem("id1").split(",");
let clk=localStorage.getItem("id2").split(",");
nm.push(a);
clk.push(c);
localStorage.setItem("id1",nm);
localStorage.setItem("id2",clk);
let nu=localStorage.getItem("id1").split(",");
let clu=localStorage.getItem("id2").split(",");
for(var i=0;i<nu.length;i++){
	var s=nu[i]+"-->"+clu[i]+"clicks";
	arr.push(s);
}

for (var i=0;i<arr.length;i++)
{
	var para = document.createElement("p");
	var node = document.createTextNode(arr[i]);
	para.appendChild(node);
	var element = document.getElementById("ele");
	element.appendChild(para);
} 
}
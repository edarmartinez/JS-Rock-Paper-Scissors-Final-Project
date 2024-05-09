const strRock="Rock";
const strPaper="Paper";
const strScissors="Scissors";
let arrChoices=[strRock,strPaper,strScissors];
let userChoice="";
let compChoice="";


let nodeChoices=document.getElementById("choices").children;
for (nodeChoice of nodeChoices){
  nodeChoice.addEventListener("click",UserMakesChoice);
}

function UserMakesChoice(event){
  
  let uChoice=document.getElementById("UserChoice");
  uChoice.innerHTML="Great! You made a choice of: "
  switch(event.target.innerText){
    case strRock:
      uChoice.innerHTML+=strRock;
      userChoice=strRock;
      break;
    case strPaper:
      uChoice.innerHTML+=strPaper;
      userChoice=strPaper;
      break;
    case strScissors:
      uChoice.innerHTML+=strScissors;
      userChoice=strScissors;
      break;
    default:
      uChoice.innerHTML+="You were unable to make a choice";
  }
  let cChoice=document.getElementById("ComputerChoice");
  cChoice.innerHTML=""
  setTimeout(ComputerMakesChoice,2000);
  
}

function ComputerMakesChoice(){
  
  compChoice=arrChoices[Math.floor(Math.random()*arrChoices.length)]
  console.log(compChoice);
  let cChoice=document.getElementById("ComputerChoice");
  cChoice.innerHTML="The Computer made a choice of: "
  switch(compChoice){
    case strRock:
      cChoice.innerHTML+=strRock;
      break;
    case strPaper:
      cChoice.innerHTML+=strPaper;
      break;
    case strScissors:
      cChoice.innerHTML+=strScissors;
      break;
    default:
      cChoice.innerHTML+="Computer unable to make a choice";
  }

  let msgResult=document.getElementById("msgWinner");
  msgResult.innerHTML=""
  setTimeout(WhoIsTheWinner,2000);

}

function WhoIsTheWinner(){
  
  let msgResult=document.getElementById("msgWinner");
  if (userChoice==compChoice){
    msgResult.innerHTML="It's a tie!!"
  } else if(userChoice==strRock && compChoice==strPaper ){
    msgResult.innerHTML="Computer Wins!"
  } else if(userChoice==strRock && compChoice==strScissors){
    msgResult.innerHTML="You Win!"
  } else if(userChoice==strPaper && compChoice==strRock){
    msgResult.innerHTML="You Win!"
  } else if(userChoice==strPaper && compChoice==strScissors){
    msgResult.innerHTML="Computer Wins!"
  } else if(userChoice==strScissors && compChoice==strRock){
    msgResult.innerHTML="Computer Wins!"
  } else if(userChoice==strScissors && compChoice==strPaper){
    msgResult.innerHTML="You Win!"
  } 
  
  
  
}
const rock=document.querySelector('.rock')
const paper=document.querySelector('.paper')
const scissors=document.querySelector('.scissors')
const result=document.querySelector('.result')
const my_score=document.querySelector('.my_score') 
const computer_score=document.querySelector('.computer_score')
let list=['rock', 'paper', 'scissors']
let myOwn=0
let comuterOwn=0
function randomSimbol() {
  let randomIcon=Math.floor(Math.random()*3)
  return list[randomIcon]
}

rock.addEventListener('click', ()=>{
  randomSimbol()
  if (randomSimbol()=='rock') {
    result.textContent="It's a tie!"
    console.log("'It's a tie!");
  } else if(randomSimbol()=='paper'){
    result.textContent='You lose! paper beats rock'
    comuterOwn+=1
    computer_score.textContent=comuterOwn
    console.log('You lose! paper beats rock');
  }else{
    result.textContent="You win! rock beats scissors"
    myOwn+=1
    my_score.textContent=myOwn
    console.log("You win! rock beats scissors");
  }
})

paper.addEventListener('click', ()=>{
  randomSimbol()
  if (randomSimbol()=='rock') {
    result.textContent="You win! paper beats rock"
    myOwn+=1
    my_score.textContent=myOwn
    console.log("You win! paper beats rock");
  } else if(randomSimbol()=='paper'){
    result.textContent="It's a tie!"
    console.log("It's a tie!")
  }else{
    result.textContent='You lose! scissors beats paper'
    comuterOwn+=1
    computer_score.textContent=comuterOwn
    console.log('You lose! scissors beats paper');
  }

})

scissors.addEventListener('click', ()=>{
  randomSimbol()
  if (randomSimbol()=='rock') {
    result.textContent='You lose! rock beats scissors'
    comuterOwn+=1
    computer_score.textContent=comuterOwn
    console.log('You lose! rock beats scissors');
    
  } else if(randomSimbol()=='paper'){
    result.textContent="You win! scissors beats paper"
    myOwn+=1
    my_score.textContent=myOwn
    
    console.log("You lose! scissors beats paper");
  }else{
    result.textContent="It's a tie!"
    console.log("'It's a tie!")
  }
})
let firstCard =  getRandomCard()
let secondCard =  getRandomCard()
let sum = firstCard+secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let cards = [firstCard, secondCard] //array 


//Allowing the code to generate random numbers
function getRandomCard(){
    
     let randomNumber = Math.floor(Math.random() * 13 ) + 1
     if(randomNumber === 1 )
         return 11
     else if (randomNumber > 10  )
        return 10
    
    else
        return randomNumber
    
}

function startGame(){
    renderGame()
}


function renderGame(){
    cardsEl.textContent = "Cards: "

    for(let i = 0; i < cards.length ; i++){
        cardsEl.textContent +=(cards[i]) + " "
    }

    sumEl.textContent = "Sum: " + sum
    if ( sum < 21 ){
        message = "Do you want to draw a new card?" 
    
        }
    
    else if(sum === 21){
        message = "You've got BlackJack"
        hasBlackJack =  true
    }
    else{
        message = "You've lost"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    console.log("Drawing a new card from the deck")
    let card = getRandomCard()
    sum+=card

    cards.push(card)
    console.log(cards)
    renderGame()  
}


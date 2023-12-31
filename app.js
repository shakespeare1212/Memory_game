document.addEventListener('DOMContentLoaded', () => {
  //varible to store and talk to the modal dialog box.
  //With this with can display the modal box and hide it.
  //We and also change or style the text in the modal box.
  var modal = document.querySelector("#modal");  
  var bottomMessage = document.querySelector("#bottomMessage"); 
  
  //list all card options
  const cardArray = [
    {
      name: 'img1',
      img: 'images/img1.png'
    },
    {
      name: 'img2',
      img: 'images/img2.png'
    },
    {
      name: 'img3',
      img: 'images/img3.png'
    },
    {
      name: 'img4',
      img: 'images/img4.png'
    },
    {
      name: 'img5',
      img: 'images/img5.png'
    },
    {
      name: 'img6',
      img: 'images/img6.png'
    },
    {
      name: 'img1',
      img: 'images/img1.png'
    },
    {
      name: 'img2',
      img: 'images/img2.png'
    },
    {
      name: 'img3',
      img: 'images/img3.png'
    },
    {
      name: 'img4',
      img: 'images/img4.png'
    },
    {
      name: 'img5',
      img: 'images/img5.png'
    },
    {
      name: 'img6',
      img: 'images/img6.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      bottomMessage.innerHTML = 'Chose a DIFFERENT card';
      setTimeout(() => bottomMessage.innerHTML = ' ', 1200);
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      bottomMessage.innerHTML = 'MATCH';
      setTimeout(() => bottomMessage.innerHTML = ' ', 1200);
      cards[optionOneId].setAttribute('src', 'images/behindCard.png')
      cards[optionTwoId].setAttribute('src', 'images/behindCard.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      bottomMessage.innerHTML = 'NO MATCH';
      setTimeout(() => bottomMessage.innerHTML = '', 1000);
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      modal.showModal(); 
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})

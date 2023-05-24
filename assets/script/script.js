const arrow1 = document.getElementById('arrowColapse1');
const card1 = document.getElementById('collapseOne');
const arrow2 = document.getElementById('arrowColapse2');
const card2 = document.getElementById('collapseTwo');
const arrow3 = document.getElementById('arrowColapse3');
const card3 = document.getElementById('collapseThree');


function rotateArrow1() {
    
    console.log(card1.classList[1])
    if (card1.classList[1] === 'show') {
      arrow1.style.transform = 'rotate(0deg)';
    } else {
      arrow1.style.transform = 'rotate(180deg)';
    }
}
function rotateArrow2() {
    
    console.log(card2.classList[1])
    if (card2.classList[1] === 'show') {
      arrow2.style.transform = 'rotate(0deg)';
    } else {
      arrow2.style.transform = 'rotate(180deg)';
    }
}
function rotateArrow3() {
    
  console.log(card3.classList[1])
  if (card3.classList[1] === 'show') {
    arrow3.style.transform = 'rotate(0deg)';
  } else {
    arrow3.style.transform = 'rotate(180deg)';
  }
}
rotateArrow1();
rotateArrow2();
rotateArrow3();

// Função de callback para o MutationObserver
const observerCallback = function (mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.target === card1 && mutation.attributeName === 'class') {
      rotateArrow1();
    } else if (mutation.target === card2 && mutation.attributeName === 'class') {
      rotateArrow2();
    } else if (mutation.target === card3 && mutation.attributeName === 'class') {
      rotateArrow3();
    }
  }
};

// Criando um MutationObserver para observar as mudanças na classe do card1, card2 e card3
const observer = new MutationObserver(observerCallback);

// Configurando as opções do MutationObserver
const observerOptions = {
  attributes: true, // Observar mudanças nos atributos do elemento
};

// Iniciando a observação do card1, card2 e card3
observer.observe(card1, observerOptions);
observer.observe(card2, observerOptions);
observer.observe(card3, observerOptions);


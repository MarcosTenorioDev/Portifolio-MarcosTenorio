const arrow = document.getElementById('arrowColapse1');
const card1 = document.getElementById('collapseOne');

function rotateArrow() {
    
    console.log(card1.classList[1])
    if (card1.classList[1] === 'show') {
      arrow.style.transform = 'rotate(0deg)';
    } else {
      arrow.style.transform = 'rotate(180deg)';
    }
}

let size = 16;
const divArray = [];
const grid = document.querySelector('#grid');

for (let i = 0; i < size * size; i++){
    var square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${512/size - 2}px`;
    square.style.height = `${512/size - 2}px`;
    grid.appendChild(square);
    divArray.push(square);
}

let size = 16;
const divArray = [];
const grid = document.querySelector('#grid');
let color = 'black';


for (let i = 0; i < size * size; i++){
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${512/size - 2}px`;
    square.style.height = `${512/size - 2}px`;
    square.style.border = '1px solid gray';
    square.style.backgroundColor = 'white';
    square.addEventListener('mouseover', () =>{
        if (drawing){
            square.style.backgroundColor = color;
        }
    });
    square.addEventListener('click', () =>{
        square.style.backgroundColor = color;
    });
    grid.appendChild(square);
    divArray.push(square);
}

let drawing = false;

window.addEventListener('mousedown', () =>{
    drawing = true;
});
window.addEventListener('mouseup', () =>{
    drawing = false;
});

const resize = document.querySelector("#resize");
resize.addEventListener('click', () =>{
    let tempSize = size;
    size = prompt("Please enter number of squares per side:");
    if (size > 100){
        size = 100;
    }
    else if (size <= 0){
        size = 16;
    }
    for (div in divArray){
        grid.removeChild(divArray[div]);
        delete divArray[div];
    }
    for (let i = 0; i < size * size; i++){
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${512/size - 2}px`;
        square.style.height = `${512/size - 2}px`;
        square.style.border = '1px solid gray';
        square.style.backgroundColor = 'white';
        square.addEventListener('mouseover', () =>{
            if (drawing){
                square.style.backgroundColor = color;
            }
        });
        square.addEventListener('click', () =>{
            square.style.backgroundColor = color;
        });
        grid.appendChild(square);
        divArray.push(square);
    }
});

const eraser = document.querySelector("#eraser");
eraser.addEventListener('click', () => {
    color = 'white';
});

const draw = document.querySelector("#draw");
draw.addEventListener('click', () => {
    color = 'black';
});

const clear = document.querySelector("#clear");
clear.addEventListener('click', () => {
    let squareList = document.querySelectorAll(".square");
    squareList.forEach((item) => {
        item.style.backgroundColor ='white';
    });
});
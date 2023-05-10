let size = 16;
const divArray = [];
const grid = document.querySelector('#grid');

for (let i = 0; i < size * size; i++){
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${512/size - 2}px`;
    square.style.height = `${512/size - 2}px`;
    square.style.border = '1px solid gray';
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    })
    grid.appendChild(square);
    divArray.push(square);
}

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
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        })
        grid.appendChild(square);
        divArray.push(square);
    }
});
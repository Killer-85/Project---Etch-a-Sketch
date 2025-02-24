const gridContainer = document.querySelector('.container');
const createGridBtn = document.getElementById('create-grid-btn');

function createGrid(rows,cols){
  gridContainer.innerHTML = "";

  const containerSize = 500;
  const cellSize = containerSize / Math.max(rows,cols);

  for(let i = 0; i < rows * cols; i++){
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');

    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;

    cell.addEventListener('mouseover',() => {
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      cell.style.backgroundColor = randomColor;
    })

    gridContainer.appendChild(cell);
  }
}

function promptGridSize(){
  gridContainer.innerHTML = "";
  let rows = parseInt(prompt("Enter the number of rows(1-100): "));
  let cols = parseInt(prompt("Enter number of columns(1-100): "))

  if(isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0){
    alert('Please enter valid numbers for rows and columns.')
    return;
  }
  else if(rows > 100 || cols > 100){
    alert("Invalid! Enter a number between 1 and 100!")
  }
  
  createGrid(rows,cols);
}

createGridBtn.addEventListener('click',promptGridSize);



//Still have to implement a logic for a tie but I just simply can not look at this thing anymore at the moment:) 
//I also keep getting: TypeError: Cannot read property '0' of undefined
// at checkingWinner (script.js:70)
// at HTMLDivElement.squareWasClicked (script.js:58)
//Can not for life of me figure out why! On the surface it does not seem to stop anything but I am sure deep down it is causing some issues! 



/*----- constants -----*/ 
let currentPlayer = "X"
clicks = 0

let arr = [ 
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [3, 4, 5]
    ];
/*----- app's state (variables) -----*/ 

let board = [null,null,null,null,null,null,null,null,null];

/*----- cached element references -----*/ 

let grid = document.getElementById("grid")
let cell1 = document.getElementById("0");
let cell2 = document.getElementById("1");
let cell3 = document.getElementById("2");
let cell4 = document.getElementById("3");
let cell5 = document.getElementById("4");
let cell6 = document.getElementById("5");
let cell7 = document.getElementById("6");
let cell8 = document.getElementById("7");
let cell9 = document.getElementById("8");
currentPlayerEl = document.getElementById("span1");
let showResult = document.getElementById("span2");
let btn1 = document.getElementById("btn1");
let display = document.querySelector("p");

/*----- event listeners -----*/ 

grid.addEventListener("click", squareWasClicked)
btn1.addEventListener("click", reStart)

/*----- functions -----*/

//everytime user clicks, id of the cell gets matched with indexes of "board" array and if it is empty it puts the current value of currentPlayer
function squareWasClicked(e){
    let checkedEl = e.target.id
    if (!board[checkedEl]){ //if the cell clicked is empty 
        board[checkedEl] = currentPlayer
        console.log(board)
        e.target.innerText = currentPlayer
        if (currentPlayer === "X") {
            currentPlayer = "O"
        }else {
            currentPlayer = "X"
        } checkingWinner();
        
    }
}


//when the subarray indexes with the "arr" array align perfectly with indexes of "board" array which gets filled as targetted cells get clicked
function checkingWinner () {
    for (let i=0; i<board.length; i++){
        if(board[arr[i][0]] != null){
            console.log(board[arr[i][0]])
            if(board[arr[i][0]]== board[arr[i][1]] && board[arr[i][1]] == board[arr[i][2]]){
            result = board[arr[i][0]]
            console.log(result)
            display.innerText = result + " Wins!"
            grid.style.display = "none";
            display.style.fontSize = "500%"
            btn1.innerHTML = "Play again?"
                } 
            }
        }
    }
    

function reStart () {
    location.reload();
}
  

function render(){
    currentPlayerEl.innerHTML = currentPlayer 
}

setInterval(render, 500)


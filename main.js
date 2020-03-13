
let board;

let player;

let win;

let gameState = false;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];


const squares = Array.from(document.querySelectorAll('#board div'));

document.getElementById("board").addEventListener("click", clickAction);
document.getElementById("play-again").addEventListener("click", init);
const turns = document.querySelector("#player");



function getWinner(){
    for(let i = 0; i < 8; i++){
        let winCon = winningConditions[i];

        let first = board[winCon[0]];
        let second = board[winCon[1]];
        let third = board[winCon[2]];

        if(first == '' || second == '' || third == '') continue;

        if(first == second && second == third){
            gameState = false;
            return board[winCon[0]];
        }
    }
    //Draw
    if(!board.includes("")){
        gameState = false;
        return 'D';
    }else{
        return null;
    }
}

function clickAction(event){
    if(gameState){
        const clickedSquare = event.target;
        let i = squares.findIndex(function(square){
            return square === clickedSquare;
        });
        if(board[i] !== ""){
            return;
        }   
        board[i] = player;
        clickedSquare.innerHTML = player;

        if(player === 'X'){
            player = 'O'
        }else{
            player = "X"
        };

        win = getWinner();
        render();
    }
    
};

function init(){
    board = ["", "", "",
             "", "", "", 
             "", "", ""];
    gameState = true;
    player = 'X';
    win = null;
    render();
};


function render(){
    board.forEach(function(mark, index){
        squares[index].textContent = mark;
    });
    if(win === 'D'){
        turns.textContent = `It's Draw!`;
    }else if(win){
        turns.textContent =  `${win} wins the game!`;
    }else{
        turns.textContent =  `It's ${player}'s turn!`;
    }

};

init();
















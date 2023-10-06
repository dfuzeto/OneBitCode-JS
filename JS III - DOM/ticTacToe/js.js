// Useful global variables
const boardRegions = document.querySelectorAll('#gameBoard span');
let vBoard = [];
let turnPlayer = '';

function updateTitle() {
    const playerInput = document.getElementById(turnPlayer);
    document.getElementById('turnPlayer').innerText = playerInput.value;
}

function initializeGame() {
    // Initialize global variables
    vBoard = [['', '', ''], ['', '', ''], ['', '', '']];
    turnPlayer = 'player1';
    
    // Adjust the page title if necessary
    document.querySelector('h2').innerHTML = 'Turn of: <span id="turnPlayer"></span>';
    updateTitle();
    
    // Clear the board (if necessary) and add click events
    boardRegions.forEach(function (element) {
        element.classList.remove('win');
        element.innerText = '';
        element.classList.add('cursor-pointer');
        element.addEventListener('click', handleBoardClick);
    });
}

// Check if there are three identical regions in a row and return the regions
function getWinRegions() {
    const winRegions = [];
    if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
        winRegions.push("0.0", "0.1", "0.2");
    if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
        winRegions.push("1.0", "1.1", "1.2");
    if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
        winRegions.push("2.0", "2.1", "2.2");
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
        winRegions.push("0.0", "1.0", "2.0");
    if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
        winRegions.push("0.1", "1.1", "2.1");
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
        winRegions.push("0.2", "1.2", "2.2");
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
        winRegions.push("0.0", "1.1", "2.2");
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
        winRegions.push("0.2", "1.1", "2.0");
    return winRegions;
}

// Disable a region on the board so it cannot be clicked anymore
function disableRegion(element) {
    element.classList.remove('cursor-pointer');
    element.removeEventListener('click', handleBoardClick);
}

// Highlight the regions where the player wins and display their name on the screen
function handleWin(regions) {
    regions.forEach(function (region) {
        document.querySelector('[data-region="' + region + '"]').classList.add('win');
    });
    const playerName = document.getElementById(turnPlayer).value;
    document.querySelector('h2').innerHTML = playerName + ' wins!';
}

function handleBoardClick(ev) {
    // Get the indices of the clicked region
    const span = ev.currentTarget;
    const region = span.dataset.region; // N.N
    const rowColumnPair = region.split('.'); // ["N", "N"]
    const row = rowColumnPair[0];
    const column = rowColumnPair[1];
    
    // Mark the clicked region with the player's symbol
    if (turnPlayer === 'player1') {
        span.innerText = 'X';
        vBoard[row][column] = 'X';
    } else {
        span.innerText = 'O';
        vBoard[row][column] = 'O';
    }
    
    // Clear the console and display our virtual board
    console.clear();
    console.table(vBoard);
    
    // Disable the clicked region
    disableRegion(span);
    
    // Check if someone has won
    const winRegions = getWinRegions();
    if (winRegions.length > 0) {
        handleWin(winRegions);
    } else if (vBoard.flat().includes('')) {
        turnPlayer = turnPlayer === 'player1' ? 'player2' : 'player1';
        updateTitle();
    } else {
        document.querySelector('h2').innerHTML = 'It\'s a tie!';
    }
}

// Add the event to the button that starts the game
document.getElementById('start').addEventListener('click', initializeGame);

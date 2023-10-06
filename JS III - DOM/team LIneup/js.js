let players = [];

function addPlayer() {
    const position = document.getElementById(`position`).value;
    const name = document.getElementById(`name`).value;
    const number = document.getElementById(`number`).value;
    const player = { number, name, position };
    players.push(player);

    // Display player information on the screen
    displayPlayers();
}

function removePlayer() {
    const number = document.getElementById(`number`).value;
    const playerIndex = players.findIndex(obj => obj.number === number);

    if (playerIndex !== -1) {
        // Player found, remove from the array
        players.splice(playerIndex, 1);
        console.log(`Player removed successfully.`);
    } else {
        console.log(`No player found with the number ${number}`);
    }

    // Display player information on the screen
    displayPlayers();
}

function displayPlayers() {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = ''; // Clear the existing list

    players.forEach((player, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Player ${index + 1} - Name: ${player.name}, Number: ${player.number}, Position: ${player.position}`;
        playerList.appendChild(listItem);
    });

    // Clear the input fields
    document.getElementById("player-form").reset();
}

document.getElementById('register').addEventListener('click', addPlayer);
document.getElementById('remove').addEventListener('click', removePlayer);

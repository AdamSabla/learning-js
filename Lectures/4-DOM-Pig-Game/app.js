/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

console.log('kokot');

var scores, roundScore, activePlayer;

activePlayer = 0;

newGame();
function newGame() {
    scores = [0,0];
    roundScore = 0;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('name-' + activePlayer).textContent = 'Player ' + (activePlayer + 1);
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
    activePlayer = 0;
    document.querySelector('.player-0-panel').classList.add('active');

    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';


}

document.querySelector('.btn-roll').addEventListener('click', function () {
    // 1. random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. update the round score if rolled 1
    if (dice !== 1) {
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // reset score and switch to other player
        nextPlayer();

    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    // add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // update UI
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // check if player won the game
    if (scores[activePlayer] >= 20) {
        console.log('Player ' + (activePlayer + 1) + ' wins!');

        document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

        // document.querySelector('.player-current-box').style.display = 'none';
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';

    } else {
        // next player
        nextPlayer();
    }

});

document.querySelector('.btn-new').addEventListener('click', newGame);

function nextPlayer () {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}





/*

document.querySelector('#current-' + activePlayer).textContent = dice;


var x = document.querySelector('#score-0').textContent;
console.log(x);

*/

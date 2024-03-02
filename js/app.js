import {PlayGame} from './game.js';

document.addEventListener('DOMContentLoaded', () => {
    const play = new PlayGame(document.querySelector('.gnom-game'));

    setInterval(play.paintGnom, 1000);
});
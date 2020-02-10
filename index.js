import Phaser from 'phaser'
import gameConfig from './gameConfig.js';


function newGame(){
    if(game) return;
    game = new Phaser.Game(gameConfig);
}

let game;


if(!game){newGame();}
//game.scene.pause('level01');
//game.scene.start('level02');
//game.scene.stop('level02');
//game.scene.switch('level01');


window.changeLevel =  function changeLevel(level){
    console.log('change level to '+level);
    switch(level){
        case 1:
                game.scene.start('level01');
                game.scene.switch('level01');

        break;
        case 2:
                game.scene.start('level02');
                game.scene.switch('level02');
        break;

    }
}
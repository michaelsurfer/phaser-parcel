import level01Scene from './level01Scene';
import level02Scene from './level02Scene';

export default {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'divPhaser',
        width: 800,
        height: 600
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1200 },
        }
    },
    
    scene: [level01Scene,level02Scene]
}



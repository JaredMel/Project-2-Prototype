// Title: Project 2 Prototype
// Authors: Jared Melendez, Max Brockmann, Ava Johnson, Niko Distefano
// Citations: 
//
import SampleScene from './scenes/SampleScene.js'

let config = {
    parent: 'phaser-game',
    type: Phaser.AUTO,
    width: 900,
    height: 600,
    backgroundColor: '#ffffff',
    scene: [ SampleScene ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}
let game = new Phaser.Game(config)
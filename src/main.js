// Title: Project 2 Prototype
// Authors: Jared Melendez, Max Brockmann, Ava Johnson, Niko Distefano
// Citations: 
//
"use strict"

let config = {
    parent: 'phaser-game',
    type: Phaser.AUTO,
    width: 900,
    height: 600,
    backgroundColor: '#ffffff',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ SampleScene ]
}
let game = new Phaser.Game(config)
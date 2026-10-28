class SampleScene extends Phaser.Scene {
    constructor() {
        super('sampleScene')
    }

    preload() {
        // Load assets
        this.load.path = './assets/'
        this.load.image('bemused', 'bemused.png')
        this.load.image('suitcase_card', 'card_suitcase_text.png')
        this.load.image('desk', 'desk.png')
        this.load.image('happy', 'happy.png')
        this.load.image('nuteral', 'nuteral.png')
        this.load.image('stressed', 'stressed.png')
    }

    create() {
        // Add Textboxes
        this.add.text(game.config.width/1.5, game.config.height/4, 'Bla Bla Bla').setFontSize(20).setColor('Black').setOrigin(0.5)
        
        // Add desk image
        let person = this.add.image(100, 0, 'bemused').setOrigin(0).setScale(0.5)
        this.add.image(0, -200, 'desk').setOrigin(0)

        // Use to change person
        // person.setTexture('happy')
        // person.setTexture('nuteral')
        // person.setTexture('stressed')

        // Create suitcase card
        let suitcaseCard = this.add.image(game.config.width/2, game.config.height/2, 'suitcase_card')
        suitcaseCard.setAlpha(0)
    }
}
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

    intit() {
        this.score
    }

    create() {
        // Add Textboxes & Buttons
        this.personDialogue = this.add.text(game.config.width/1.25, game.config.height/4, 'Bla Bla Bla').setFontSize(20).setColor('Black').setOrigin(0.5)
        this.score = 0
        this.scoreText = this.add.text(game.config.width/6, game.config.height/6, 'Score: ' + this.score).setFontSize(40).setColor('Black').setOrigin(0.5)
        
        // Add images
        const people = ['bemused', 'happy', 'nuteral', 'stressed']
        let ran = Phaser.Math.Between(0, 3)
        let person = this.add.image(100, 0, people[ran]).setOrigin(0).setScale(0.5)

        this.add.image(0, -200, 'desk').setOrigin(0)

        // Create when button
        let whenButton = this.add.text(game.config.width/1.25, game.config.height/1.75, '> When is it?', { fill: 'rgb(0, 0, 0)'}).setFontSize(20).setOrigin(0.5)
        whenButton.setInteractive().on('pointerdown', () => this.whenQuestion())

        // Create what button
        let whatButton = this.add.text(game.config.width/4, game.config.height/1.75, '> What do you have in your suitcase?', { fill: 'rgb(0, 0, 0)'}).setFontSize(20).setOrigin(0.5)
        whatButton.setInteractive().on('pointerdown', () => this.whatQuestion())

        // Create suitcase card
        let suitcaseCard = this.add.image(game.config.width/2, game.config.height/2, 'suitcase_card').setOrigin(0.5)
        let nextPersonButton = this.add.text(game.config.width/2, game.config.height/1.5, 'Next Person', { fill: 'rgb(0, 0, 0)'}).setFontSize(20).setOrigin(0.5)
        let suitcaseText = this.add.text(game.config.width/2, game.config.height/4, '- Banana').setFontSize(20).setColor('Black').setOrigin(0.5)
        nextPersonButton.setInteractive().on('pointerdown', () => this.nextPerson(ran, person, people, suitcaseCard, nextPersonButton, suitcaseText))
        suitcaseCard.setAlpha(0)
        nextPersonButton.setAlpha(0)
        suitcaseText.setAlpha(0)

        //Create check suitcase button
        let checkSuitcaseButton = this.add.text(game.config.width/4, game.config.height/1.25, 'Check Suitcase', { fill: 'rgb(0, 0, 0)'}).setFontSize(20).setOrigin(0.5)
        checkSuitcaseButton.setInteractive().on('pointerdown', () => this.checkSuitcase(suitcaseCard, nextPersonButton, suitcaseText))

        //Create let pass button
        let letPassButton = this.add.text(game.config.width/1.25, game.config.height/1.25, 'Let Pass', { fill: 'rgb(0, 0, 0)'}).setFontSize(20).setOrigin(0.5)
        letPassButton.setInteractive().on('pointerdown', () => this.letPass(suitcaseCard, nextPersonButton, suitcaseText))

        // Move suitcase card to the front
        suitcaseCard.setDepth(1)
        nextPersonButton.setDepth(2)
        suitcaseText.setDepth(2)
    }

    whenQuestion() {
        this.personDialogue.setText('Yada Yada Yada')
    }

    whatQuestion(personDial) {
        this.personDialogue.setText('Something Something')
    }

    checkSuitcase(suitCard, nextButton, suitText) {
        suitCard.setAlpha(1)
        nextButton.setAlpha(1)
        suitText.setAlpha(1)
        this.score++
        this.scoreText.setText('Score: ' + this.score)
    }

    letPass(suitCard, nextButton, suitText) {
        suitCard.setAlpha(1)
        nextButton.setAlpha(1)
        suitText.setAlpha(1)
        this.score++
        this.scoreText.setText('Score: ' + this.score)
    }

    nextPerson(ranIndex, person, people, suitCard, nextButton, suitText) {
        ranIndex = Phaser.Math.Between(0, 3)
        person.setTexture(people[ranIndex])
        suitCard.setAlpha(0)
        nextButton.setAlpha(0)
        suitText.setAlpha(0)
        this.personDialogue.setText('Bla Bla Bla')
    }
}
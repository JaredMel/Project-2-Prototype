import { createtraveler } from '../travelerfsm.js'
import { Contraband } from '../dialogue.js'

const PEOPLE = ['bemused', 'happy', 'nuteral', 'stressed']
 
// from dialogue 
const QUESTIONS = [
    { id: 'origin',      label: '> Where are you coming from?' },
    { id: 'purpose',     label: '> Why were you there?' },
    { id: 'bagContents', label: "> What's in your bag?" },
    { id: 'declare',     label: '> Anything to declare?' },
]
 
export default class SampleScene extends Phaser.Scene {
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
 
    init() {
        this.score = 0
        this.traveler = null
        this.decisionMade = false
    }
 
    create() {
        const { width, height } = this.scale
        
        // Add images
        let ran = Phaser.Math.Between(0, 3)
        this.person = this.add.image(100, 0, PEOPLE[ran]).setOrigin(0).setScale(0.5)
        this.add.image(0, -200, 'desk').setOrigin(0)
 
        // Add Text
        this.personDialogue = this.add.text(width / 1.25, height / 4, '', { align: 'center', wordWrap: { width: 280 } })
            .setFontSize(20).setColor('Black').setOrigin(0.5)
        this.scoreText = this.add.text(width / 6, height / 6, '')
            .setFontSize(40).setColor('Black').setOrigin(0.5)
 
        this.createQuestionButtons(width, height)

        // Create suitcase card
        const card = this.add.image(width / 2, height / 2, 'suitcase_card').setOrigin(0.5)
        this.suitcaseText = this.add.text(width / 2, height / 3.5, '', { align: 'left' })
            .setFontSize(20).setColor('Black').setOrigin(0.5, 0)
        this.resultText = this.add.text(width / 2, height / 1.7, '', { align: 'center', wordWrap: { width: 300 } })
            .setFontSize(20).setColor('Black').setOrigin(0.5)
        const nextButton = this.makeButton(width / 2, height / 1.5, 'Next Person', () => this.nextPerson())
        this.suitcaseCard = this.add.container(0, 0, [card, this.suitcaseText, this.resultText, nextButton])
            .setDepth(1)
            .setVisible(false)

        //Create check suitcase button
        this.checkSuitcaseButton = this.makeButton(width / 4, height / 1.25, 'Check Suitcase', () => this.checkSuitcase(true))
        
        //Create let pass button
        this.letPassButton = this.makeButton(width / 1.25, height / 1.25, 'Let Pass', () => this.checkSuitcase(false))
 
        this.updateScore(0)
        this.nextPerson()
    }
    
    // changed to make a standard button
    makeButton(x, y, label, onClick) {
        const button = this.add.text(x, y, label, { fill: 'rgb(0, 0, 0)' })
            .setFontSize(20)
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
        button.on('pointerover', () => button.setColor('#666666')) // when not hovering
        button.on('pointerout', () => button.setColor('#000000')) // when hovering
        button.on('pointerdown', onClick)
        return button
    }
 
    createQuestionButtons(width, height) {
        // this is so I can make a grid in the desk erea
        const X = [width / 4, width / 1.25]
        const Y = [height / 1.75, height / 1.75 + 40]
 
        this.questionButtons = QUESTIONS.map((q, i) =>
            this.makeButton(X[i % 2], Y[Math.floor(i / 2)], q.label, () => this.askQuestion(q.id))
        )
    }
 
    askQuestion(questionId) {
        if (this.decisionMade) return
        this.personDialogue.setText(this.traveler.ask(questionId))
    }
 
    checkSuitcase(playerSaysGuilty) {
        if (this.decisionMade) return 
        this.decisionMade = true
 
        const correct = this.traveler.isCorrectCall(playerSaysGuilty)
        this.updateScore(correct ? 1 : -1)
        this.showSuitcase(correct)
    }
 
    showSuitcase(correct) {
        const items = this.traveler.suitcase
        this.suitcaseText.setText(items.map(item => '- ' + item).join('\n'))
 
        const contraband = items.find(item => Contraband.includes(item))
        let message
        if (correct) {
            message = contraband ? `Nice catch! ${contraband}.` : 'All clear. Good call!'
        } else {
            message = contraband ? `Oops! you let a ${contraband} through!` : 'Nothing but allowed items. Wrongly detained!'
        }
        this.resultText.setText(message)
 
        this.suitcaseCard.setVisible(true)
    }

      nextPerson() {
        this.traveler = createtraveler()
        this.decisionMade = false
 
        this.person.setTexture(Phaser.Utils.Array.GetRandom(PEOPLE))
        this.personDialogue.setText('Next!')
        this.suitcaseCard.setVisible(false)
    }

    updateScore(delta) {
        this.score += delta
        this.scoreText.setText('Score: ' + this.score)
    }
}
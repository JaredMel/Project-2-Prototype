// this is the fsm and i just used the dialogue i created for now
import { Contraband, AllowedItems, Dialogue } from "./Dialogue.js";

//obv create the states
export const States = {
  innocent: "innocent",
  guilty: "guilty",
};

function randomInt(min, max) {
  // ik theres a better way to write this my brain just isnt doing it rn
  // this generates a random number between min and max
  const howManyNumbers = max - min + 1;
  const randomDecimal = Math.random();
  const expounded = randomDecimal * howManyNumbers;
  const wholeNumber = Math.floor(expounded);
  const result = wholeNumber + min;

  return result;
}

// here we pick random suitcase item from array 
function pickRandom(array) {
  return array[randomInt(0, array.length - 1)];
}

// take several of em
// this packs the items into the suitcase, like our card game its like 2-4 items
// ik rn it can grab several of an item and duplicate it but idk that that really matters, i travel with two deodorants etc often
function pickSeveral(array, count) {
  const cop = [...array];
  const picked = [];
  // keep on doing so 
  while (picked.length < count && cop.length > 0) {
    const index = randomInt(0, cop.length - 1);
    picked.push(cop[index]);
    cop.splice(index, 1);
  }

  return picked;
}

// here we mix up our suitcase
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {

    const j = randomInt(0, i);
    [array[i], array[j]] = [array[j], array[i]];

  } return array; }

  // choosing the state of the person going thru tsa, our cute lil assets
function pickRandomState() {
  const roll = Math.random();
  if (roll < 0.5) {
    return States.guilty;
  } return States.innocent; }

// this is the 2,4 items i was talking about above
function packSuitcase(state) {
  const suitcase = pickSeveral(AllowedItems, randomInt(2, 4));


// guily get bad bad item 
// we return the shuffled suitcase
  if (state === States.guilty) {
    suitcase.push(pickRandom(Contraband));
  } return shuffle(suitcase); }


// make the traveler
// export so it can be used in our other files :D
export function createtraveler() {
  const state = pickRandomState();
  const suitcase = packSuitcase(state);

  return { state, suitcase,

    ask(questionId) {
      //diaglogue for state
      const script = Dialogue[this.state];
      const possibleLines = script[questionId];
 // pick random stuff to say

      let line = pickRandom(possibleLines);
 // item from suitcase gets mentioned
      const fine = this.suitcase.filter((item) => AllowedItems.includes(item));
      line = line.replace("{item}", pickRandom(fine));
 
      return line;
    },
 
isCorrectCall(playerSaysGuilty) {
  // is the match true? 
  const reallyGuilty = (this.state === States.guilty);

  if (playerSaysGuilty && reallyGuilty) {
    return true;
  }

  if (!playerSaysGuilty && !reallyGuilty) {
    return true;
  }
// if player made the wrong call so they can lose
  return false;
}
  };
}
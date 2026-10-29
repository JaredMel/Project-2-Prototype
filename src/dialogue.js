export const AllowedItems = [
  "snacks",
  "merchandise",
  "deodorant",
  "socks",
  "toothbrush",
  "paperback book",
  "phone charger",
  "sunglasses"
];

export const Contraband = [
  "illegal fish",
  "illegal substance",
  "bomb",
  "suspicious yo-yo"
];

export const Dialogue = {

  INNOCENT: {

    // "Where are you coming from?"
    origin: [
      "I was visiting family in Connecticut.",
      "Coming back from a fish conference.",
      "Hawaii! I wish I could go back."
    ],

    // "Why were you there?"
    purpose: [
      "I was just hanging out with some family.",
      "Fish. Super lame, I promise.",
      "A wee bit of a vacation :p"
    ],

    // "What's in your bag?"
    bagContents: [
      "Literally just {item}, and some clothes.",
      "Clothes, {item}, some chocolate... wait, no, I ate the chocolate.",
      "Oh, I have {item}... feel free to look."
    ],

    // "Anything to declare?"
    declare: [
      "Nada.",
      "I dunno. Nah. Do I have to declare chocolate?",
      "You can look if you want, Curious George."
    ]
  },

  GUILTY: {

    // "Where are you coming from?"
    origin: [
      "Airport.",
      "Does it matter?",
      "Aquarium. OH... I mean. Hawaii."
    ],

    // "What's the purpose of your trip?"
    purpose: [
      "Seeing my step dad.",
      "Thats rude to ask. Funeral.",
      "I... definitely not like... dude I just can't tell you I'm uncomfortable."
    ],

    // "Whats in your bag?"
    bagContents: [
      "Only {item}.",
      "Just {item}! Uh. Officer :D",
      "{item}. Don't check tho, I left dirty socks in there and they stink so bad man."
    ],

    // "Anything to declare?"
    declare: [
      "NO?",
      "Huh?",
      "Heh... uh. Nothing, officer nosey!"
    ]
  }
};
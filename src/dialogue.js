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
  "illegal salmon",
  "illicit substance",
  "bomb",
  "suspicious yo-yo",
  "invasive ferret",
  "depleted uranium",
  "fake ID",
  "camel"
];

export const Dialogue = {

  INNOCENT: {

    // "Where are you coming from?"
    origin: [
      "I was visiting family in Connecticut.",
      "Coming back from a fish conference.",
      "Hawaii! I wish I could go back.",
      "Utah...",
      "Oh, it was a great trip, let me tell you. I've never had a better trip...",
      "The sky."
    ],

    // "Why were you there?"
    purpose: [
      "I was just hanging out with some family.",
      "Fish. Super lame, I promise.",
      "A wee bit of a vacation~",
      "For work.",
      "Just the usual, you know how it is."
    ],

    // "What's in your bag?"
    bagContents: [
      "Literally just {item}, and some clothes.",
      "Clothes, {item}, some chocolate... wait, no, I ate it all.",
      "Oh, I have {item}. Feel free to look!",
      "Mostly snacks, and {item}.",
      "{item}, and... uh... yeah. That's it."
    ],

    // "Anything to declare?"
    declare: [
      "Nada.",
      "Huh?",
      "I dunno. Nah. Do I have to declare chocolate?",
      "You can look if you want, Curious George.",
      "I'm not sure if my snacks follow your country's food safety guidelines.",
      "Is now a bad time to mention I have a gun?"
    ]
  },

  GUILTY: {

    // "Where are you coming from?"
    origin: [
      "Airport.",
      "Does it matter?",
      "Aquarium. OH... I mean. Hawaii.",
      "You don't want to know... oh, the horror...",
      "628 Crown Road."
    ],

    // "What's the purpose of your trip?"
    purpose: [
      "Seeing my step dad.",
      "Thats rude to ask. Funeral.",
      "I... definitely not like... dude I just can't tell you I'm uncomfortable.",
      "Overwatch tournament.",
      "Let's just call it birdwatching.",
      "Purpose... isn't that what we all seek?"
    ],

    // "Whats in your bag?"
    bagContents: [
      "Only {item}.",
      "Just {item}! Uh. Officer :D",
      "{item}. Don't check tho, I left dirty socks in there and they stink so bad man.",
      "Definitely just {item}, trust me.",
      "If you're looking for a bomb, you'll only find {item}."
    ],

    // "Anything to declare?"
    declare: [
      "NO?",
      "Huh?",
      "Heh... uh. Nothing, officer nosey!",
      "Uh... what do you mean?",
      "A thumb war.",
      "Just my loyalty to the law, haha."
    ]
  }
};
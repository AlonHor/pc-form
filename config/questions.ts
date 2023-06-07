import IQuestion from "@/interfaces/IQuestion"

const questions: IQuestion[] = [
  {
    id: "1",
    question: "What's your in game name?",
    page: 1,
    type: "short text"
  },
  {
    id: "2",
    question: "What's your discord ID?",
    description: "You can also do /myid in discord to find out!",
    page: 1,
    type: "short text"
  },
  {
    id: "3",
    question: "What's your timezone?",
    description: "For example: London, New York, Paris...",
    page: 1,
    type: "short text"
  },
  {
    id: "4",
    question: "What time are you likely to play on our server?",
    page: 1,
    type: "short text"
  },
  {
    id: "5",
    question: "Please describe yourself using the following:",
    page: 1,
    type: "multiple choice",
    options: [
      "I speak a good level of English both written and spoken",
      "My English could do with an improvement, but it should be sufficient for this role",
      "My English skills may not be sufficient for this role",
      "My English skills will not be sufficient for this role"
    ]
  },
  {
    id: "6",
    question: "You are responding to a 999 call, on blue lights. You accidentally have a crash at low speeds with a member of the public. What do you do? (Rule 2.2)",
    description: "View our rules: https://policemp.com/rules",
    page: 2,
    type: "multiple choice",
    options: [
      "Do nothing, keep driving to your call",
      "Stop, call over the radio you have had a crash. check the member of the public is ok"
    ],
    correct: "Stop, call over the radio you have had a crash. check the member of the public is ok"
  },
  {
    id: "7",
    question: "You are dealing with a breach of the peace, you have a member of the public come up to you and shout at you. What do you do? (Rule 2.3)",
    description: "View our rules: https://policemp.com/rules",
    page: 2,
    type: "multiple choice",
    options: [
      "Stay calm, ask them to step back",
      "Take out your baton and whack them",
      "Take out your taser and tase them"
    ],
    correct: "Stay calm, ask them to step back",
  },
  {
    id: "8",
    question: "You are at the police station and see a brand new BMW 450i, you don't have access to it in your garage. Are you allowed to use this vehicle? (Rule 2.1)",
    description: "View our rules: https://policemp.com/rules",
    page: 2,
    type: "multiple choice",
    options: [
      "Yes",
      "No"
    ],
    correct: "No"
  },
  {
    id: "9",
    question: "You hear there is a major incident going on over the radio, your on your break collecting your lunch, your colleague asked you to get them a bagel but there is none left, you need to ask them what they want instead - would it be acceptable to ask this over the radio channel with the ongoing major incident? (Rule 2.7)",
    description: "View our rules: https://policemp.com/rules",
    page: 2,
    type: "multiple choice",
    options: [
      "Yes, the man needs to eat!",
      "No - radio communications should be kept professional at all times"
    ],
    correct: "No - radio communications should be kept professional at all times"
  },
  {
    id: "10",
    question: "You are asked by a police SGT to close a road to secure a scene over the radio, what do you do (Rule 2.5)",
    description: "View our rules: https://policemp.com/rules",
    page: 2,
    type: "multiple choice",
    options: [
      "Tell him to close the road himself",
      "Close the road, until it's safe to lift the scene"
    ],
    correct: "Close the road, until it's safe to lift the scene"
  },
  {
    id: "11",
    question: "What is rule 1.3 of our general guildlines?",
    description: "View our rules: https://policemp.com/rules",
    page: 3,
    type: "multiple choice",
    options: [
      "Doxxing",
      "Impersonation",
      "Personal Attacks"
    ],
    correct: "Personal Attacks"
  },
  {
    id: "12",
    question: "What is rule 1.7 of our general guildlines?",
    description: "View our rules: https://policemp.com/rules",
    page: 3,
    type: "multiple choice",
    options: [
      "Discrimination",
      "Advertising",
      "Scripts, Hacking & Exploits"
    ],
    correct: "Advertising",
  },
  {
    id: "13",
    question: "Another player comes up to you and is rude and starts ramming you with a car. What do you do?",
    page: 3,
    type: "multiple choice",
    options: [
      "Request a moderator to deal with the problematic player",
      "Start ramming them back with your car"
    ],
    correct: "Request a moderator to deal with the problematic player",
  },
  {
    id: "14",
    question: "A member of staff asks to have a chat with you as they noticed you had 2/3 crashes into AI cars and didn't stop. What do you do?",
    page: 3,
    type: "multiple choice",
    options: [
      "Ignore them, and keep doing what you were doing",
      "Understand what they tell you, and learn from it"
    ],
    correct: "Understand what they tell you, and learn from it"
  },
  {
    id: "15",
    question: "How do you contact our moderation team?",
    page: 3,
    type: "multiple choice",
    options: [
      "In game text channel / mod backup request / discord support ticket",
      "Screaming over the radio for help from a mod"
    ],
    correct: "In game text channel / mod backup request / discord support ticket",
  },
  {
    id: "16",
    question: "Do you feel it is acceptable to post NSFW content on our platform?",
    page: 3,
    type: "multiple choice",
    options: [
      "Yes",
      "No, we are a safe community that's not acceptable"
    ],
    correct: "No, we are a safe community that's not acceptable"
  },
  {
    id: "17",
    question: "How would you inform others that you are en-route to a call?",
    page: 4,
    type: "multiple choice",
    options: [
      "UnitXX show me state 5 to X call",
      "I'm on my way to that call, I am currently 1.6 out and I can see some trees near me",
      "I will be there in 6 minutes"
    ],
    correct: "UnitXX show me state 5 to X call",
  },
  {
    id: "18",
    question: "What's B in ABC?",
    description: "Read our comms guide: https://policemp.com/guides/communications",
    page: 4,
    type: "multiple choice",
    options: [
      "Brave",
      "Bold",
      "Brevity"
    ],
    correct: "Brevity"
  },
  {
    id: "19",
    question: "If you need Prisoner Transport, how do you request it?",
    page: 4,
    type: "multiple choice",
    options: [
      "Call over radio when it's busy",
      "Use F2 backup menu",
      "Use general chat"
    ],
    correct: "Use F2 backup menu",
  },
  {
    id: "20",
    question: "Would you use your radio if you discharged your taser?",
    page: 4,
    type: "multiple choice",
    options: [
      "Yes",
      "No"
    ],
    correct: "No"
  },
  {
    id: "21",
    question: "I understand attaining the role of Police Constable at PoliceMP is not a guarantee",
    page: 5,
    type: "multiple choice",
    options: [
      "Yes"
    ],
    correct: "Yes"
  },
  {
    id: "22",
    question: "I have a working and clear microphone to use for my Police Constable training (required to apply)",
    page: 5,
    type: "multiple choice",
    options: [
      "Yes"
    ],
    correct: "Yes"
  },
  {
    id: "23",
    question: "Have you had any bans or warnings on PoliceMP?",
    page: 5,
    type: "multiple choice",
    options: [
      "Yes",
      "No",
      "Other"
    ],
  },
  {
    id: "24",
    question: "Where did you find out about the server?",
    page: 5,
    type: "multiple choice",
    options: [
      "Twitch",
      "YouTube",
      "FiveM Server Browser",
      "TikTok",
      "Facebook",
      "JackTSTS",
      "Word of Mouth",
      "Search Engine",
      "Other"
    ]
  },
]

export default questions
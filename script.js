const truths= [
    "What is your biggest fear?",
  "Have you ever lied to your best friend?",
  "What is your most embarrassing moment?",
  "Who do you secretly like?",
  "What is a bad habit you have?",
  "What is something you regret?",
  "Have you ever cheated on a test?",
  "What is your biggest dream?",
  "What is something you never told anyone?",
  "What is your favorite memory?"


];

const dares = [
    "do 10 jumping jacks ",
    "sing a song loudly",
    "dance for 30 seconds ",
    "act like a cat"<
    "ask a stupid question from a peer ",
    "tell a joke ",
    'go and give a speech to a random person',
    'go and code for 5 minuets on my project',
    'go write random email to a random person',
    'write a letter to future self ',
    'in any group just go and post about your story',

];

function getTruth() {
    const random = Math.floor(Math.random() *
    truths.length);
    document.getElementById("card").innerText= truths [random];
};

function getDare() {
  const random = Math.floor(Math.random() * dares.length);
  document.getElementById("card").innerText = dares[random];
}
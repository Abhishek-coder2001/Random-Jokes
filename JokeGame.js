
let Btn = document.getElementById("button");
let jokeOutput = document.getElementById("output");

let jokes = ["Why don't scientists trust atoms? Because they make up everything.",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
    "Why was the math book sad? Because it had too many problems.",
    "What do you call a fish wearing a crown? Kingfish.",
    "I used to play piano by ear, but now I use my hands.",
    "How does a snowman get around? By riding an icicle.",
    "Why was the computer cold? It left its Windows open.",
    "Why was the math book sad? Because it had too many problems.",
    "arallel lines have so much in common. It's a shame they'll never meet.",
    "How do you organize a space party? You planet0!",
    "What's orange and sounds like a parrot? A carrot.",
    "How do you make holy water? You boil the hell out of it.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call a fake noodle? An impasta.",
    "How do you catch a squirrel? Climb a tree and act like a nut.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "I'm on a seafood diet. I see food, and I eat it.",
    "What did the zero say to the eight? Nice belt!",
    "Did you hear about the claustrophobic astronaut? He just needed a little space.",
    "How does a penguin build its house? Igloos it together.",
    "What do you call a group of musical whales? An orca-stra.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "How do you organize a space party? You planet!",
    "What do you call a bear with no teeth? A gummy bear.",
    "How do you make a tissue dance? You put a little boogie in",
    "Why was the belt arrested? It was holding up a pair of pants!",
    " used to be a baker, but I couldn't make enough dough.",
    "Did you hear about the kidnapping at the park? They woke up.",
    "How do you organize a space party? You planet!",
    "Why did the bicycle fall over? Because it was two-tired.",
    "What do you call a cow with no legs? Ground beef.",
    "Why can't you give Elsa a balloon? Because she will let it go.",
    "Why don't oysters donate to charity? Because they are shellfish.",
    "How does a snowman get around? By riding an icicle.",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Did you hear about the cheese factory explosion? There was nothing left but de-brie.",
    "I used to be a baker, but I couldn't make enough dough.",
    "What do you call a bear with no teeth? A gummy bear.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "I'm on a seafood diet. I see food, and I eat it.",
    "Why was the math book sad? Because it had too many problems.",
    "What do you call a can opener that doesn't work? A can't opener.",
    "How does a penguin build its house? Igloos it together.",
    "What's brown and sticky? A stick.",
    "How do you organize a space party? You planet!",
    "Why don't scientists trust atoms? Because they make up everything.",
    "Parallel lines have so much in common. It's a shame they'll never meet."]

Btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * jokes.length - 1);

    let randomJoke = jokes[random];
    // document.write(randomJoke);
    // output.style.fontSize="20px"

    jokeOutput.textContent = randomJoke;
    // jokeOutput.style.color="red"
    jokeOutput.style.fontSize = "25px"
});



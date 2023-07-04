import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [questionsSet1] = useState([
    "what is the color of your underwear today?",
    "Name someone you've pretended to like but actually couldn't stand",
    "WWhat bridges are you glad that you burned?",
    "What is your dream travel destination?",
    "What's the craziest thing you've done on public transportation? ",
    "If you met a genie, what would your three wishes be?",
    "What's one thing you'd do if you knew there no consequences?",
    "Meatloaf says he'd do anything for love, but he won't do 'that.' What's your 'that?'",
    "When's the last time you apologized? What for?",
    "What is a weird food that you love?",
    "What terrible movie or show is your guilty pleasure?",
    "What was your biggest childhood fear? ",
    "What is the first letter of your crush’s name?",
    "What is the worst grade you received for a class in school/college?",
    "What is the biggest lie you’ve ever told?",
    "Have you ever accidentally hit something (or someone!) with your car?",
    "Have you ever broken an expensive item?",
    "What is one thing you’d change about your appearance if you could?",
    "If you suddenly had a million dollars, how would you spend it?",
    "Who is the best teacher you’ve ever had and why?",
    "What is the worst food you’ve ever tasted?",
    "What is the weirdest way you’ve met someone you now consider a close friend?",
    "What is the most embarrassing thing you’ve posted on social media?",
    "Who was your first celebrity crush?",
    "Have you ever revealed a friend’s secret to someone else?",
    "How many kids do you want to have one day (or how many did you want to have growing up)?",
    "If you could only eat one meal for the rest of your life, what would it be?",
    "What is a secret you had as a child that you never told your parents?",
    "What is your favorite book of all time?",
    "What is the last text message you sent your best friend?",
    "What is something you would do if you knew there were no consequences?",
    "What is the worst physical pain you’ve ever been in?",
    "Personality-wise, are you more like your mom or your dad?",
    "When is the last time you apologized (and what did you do)?",
    "Have you ever reported someone for doing something wrong (either to the police or at work/school)?",
    "If your house caught on fire and you could only save three things (besides people), what would they be?",
    "If you could pick one other player to take with you to a deserted island, who would it be?",
    "What sport or hobby do you wish you would’ve picked up as a child?",
    "Have you ever stolen anything?",
    "Have you ever been kicked out of a store, restaurant, bar, event, etc.?",
    "What is the worst date you’ve ever had?",
    "What is the weirdest thing you’ve ever done in public?",
    "What is the last excuse you used to cancel plans?",
    "What is the biggest mistake you’ve ever made at school or work?",
    "Which player would survive the longest in a horror/apocalypse movie, and who would be the first one to die?",
    "What is the dirtiest room/area of your house?",
    "Which of your family members annoys you the most?",
    "When is the last time you cried?",
    "When is the last time you made someone else cry?",
    "What is the longest you’ve ever gone without showering?",
    "What is the worst date you’ve ever been on?",
    "When is the last time you did something technically illegal?",
    "If you could pick anyone in the world to be president, who would you choose?",
    "How many times do you wear your jeans before you wash them?",
    "If you could pick one other player to survive the zombie outbreak, who would it be",
    "If you could pick one other player to save you in danger, who would it be",
    "Do you pee in pools?",
    "If someone went through your closet, what is the weirdest thing they’d find?",
    "Have you ever lied about your age?",
    "Besides your phone, what’s the one item in your house you couldn’t live without?",
    "What is the biggest fight you’ve ever been in with a friend?",
    "When was the last time you told someone you love them, who was it",
    "When was the last time you lost your mind",
    "Describe your favorite event/memory"
  
    // Add more questions here
  ]);

  const [questionsSet2] = useState([
    "choose one of the opposite sex and kiss their bodypart",
    "Smell every player's armpits, and rate which one is your favorite",
    "Kiss the wall and say 'I've been waiting for this my while life!'",
    "Do an impression of another player until someone can figure out who it is.",
    "Give your phone to another player who can send one text saying anything they want to one of your contacts",
    "Call a friend, pretend it's their birthday, and sing 'Happy Birthday' to them.",
    "End each sentence with the word 'not' until your next turn.",
    "Talk without closing your mouth until your next round",
    "Pun ice cube down your pants",
    "Read the last text message you sent out loud! ",
    "Show the weirdest item you have in your purse/pockets",
    "Call the first person in your contacts list and sing them Happy Birthday. ",
    "Do your best impression of a fish out of water ",
    "Give another player your phone and let them send a social media DM to anyone they want",
    "Do as many push-ups as you can in one minute",
    "Give a one-word “roast” to each other player.",
    "Let another player tickle you but don’t laugh!",
    "Spin in a swivel chair for 30 seconds and then try to walk a straight line",
    "Go outside and sing “The national anthem” at full volume",
    "Let another player draw a tattoo on your arm in permanent marker",
    "Hold the plank position until it’s your turn again",
    "tell each player who you think their celebrity look alike is",
    "Show off your best dance moves for the full duration of a song",
    "Narrate the game in a newscaster voice for three turns.",
    "Walk next door with a measuring cup and ask for a cup of sugar.",
    "Switch clothes with another player for the rest of the game.",
    "Put on a blindfold and touch each players’ face until you can guess who each player",
    "Let another player pour a glass of water on your head",
    "Give a shoulder rub to the player to your right",
    "Attempt to juggle two or three items of the asker’s choosing",
    "Perform a dramatic version of a monologue from a favorite TV show or movie",
    "Show the most embarrassing photo on your phone.",
    "Comment a fire emoji on the first five pictures on your Instagram feed",
    "Do an impression of another player until your next turn.",
    "Try to drink a glass of water without using your hands",
    "Allow the other players to blindfold you and try to guess three food items from the pantry just by smell ",
    "Do your best interpretive dance/gymnastics floor routine.",
    "Go outside and do your best wolf howl at the moon",
    "Talk and act like a celebrity until the group can guess who you are (this could go multiple turns!)",
    "If you have to get up for the rest of the game, no walking allowed. You can crawl on all fours, roll, somersault, hop on one foot etc., but no walking!",
    "Remove your socks with your teeth.",
    "Go outside and pretend to mow grass with an invisible mower — sounds and all.",
    "Act out a commercial for a product chosen by the other players.",
    "Sing instead of speaking any time you talk for three turns.",
    "Make a silly face and keep it that way until someone in the group laughs",
    "Do a freestyle rap about the other players for one minute",
    "Show the group your internet search history",
    "Let another player style your hair and leave it that way for the rest of the game.",
    "Video chat the person of your choice but pick your nose through the entire conversation",
    "Put your shoes on the wrong feet and keep them there for the rest of the game",
    "Call a random acquaintance and tell them you want to break up",
    "Let the other players pose you and remain in that position until your next turn.",
    "Allow someone else in the group to blindfold you and feed you one item out of the fridge.",
    "Lead the group in a mini yoga class for one minute",
    "How old are you? Whatever your age is, do that many squats",
    "Perform a dance routine to a boy band song of the group’s choice",
    "Let another player draw a washable marker mustache on you"

    // Add more questions here
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(null);

  const getRandomQuestion = (questions) => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };

  const handleClickSet1 = () => {
    const randomQuestion = getRandomQuestion(questionsSet1);
    setCurrentQuestion(randomQuestion);
  };

  const handleClickSet2 = () => {
    const randomQuestion = getRandomQuestion(questionsSet2);
    setCurrentQuestion(randomQuestion);
  };

  return (
    <div className="container">
      <h1>True or Dare</h1>
      <div className="button-container">
        <button className="button" onClick={handleClickSet1}>
          True
        </button>
        <button className="button" onClick={handleClickSet2}>
          Dare
        </button>
      </div>
      {currentQuestion && <h3 className="question">{currentQuestion}</h3>}
    </div>
  );
};

export default App;


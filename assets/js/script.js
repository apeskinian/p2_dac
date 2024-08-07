// BUILD THE QUESTIONS POOL
const questionPool = [
  {
    question: "Who is the father of Rhaenyra Targaryen?",
    correctAnswer: "Viserys I Targaryen",
    wrongAnswers: ["Daemon Targaryen", "Corlys Velaryon", "Dragons are cool", "Otto Hightower"]
  },
  {
    question: "Who is married to Alicent Hightower?",
    correctAnswer: "Viserys I Targaryen",
    wrongAnswers: ["Corlys Velaryon", "Daemon Targaryen", "Dragons are cool", "Rhaenys Targaryen"]
  },
  {
    question: "Who is the mother of Laenor Velaryon?",
    correctAnswer: "Rhaenys Targaryen",
    wrongAnswers: ["Alicent Hightower", "Rhaenyra Targaryen", "Dragons are cool", "Helaena Targaryen"]
  },
  {
    question: "Who is Daemon Targaryen's first wife?",
    correctAnswer: "Laena Velaryon",
    wrongAnswers: ["Rhaenyra Targaryen", "Alicent Hightower", "Dragons are cool", "Aemma Arryn"]
  },
  {
    question: "Who is Rhaenyra Targaryen's first husband?",
    correctAnswer: "Laenor Velaryon",
    wrongAnswers: ["Daemon Targaryen", "Ser Harwin Strong", "Jacaerys Velaryon", "Dragons are cool"]
  },
  {
    question: "Who is the grandfather of Aegon II Targaryen?",
    correctAnswer: "Viserys I Targaryen",
    wrongAnswers: ["Corlys Velaryon", "Dragons are cool", "Daemon Targaryen", "Lyonel Strong"]
  },
  {
    question: "Who is the daughter of Rhaenyra Targaryen and Laenor Velaryon?",
    correctAnswer: "They had sons only",
    wrongAnswers: ["Baela Targaryen", "Joffrey Velaryon", "Rhaena Targaryen", "Dragons are cool"]
  },
  {
    question: "Who is the Hand of the King serving Viserys I Targaryen at the beginning of the series?",
    correctAnswer: "Otto Hightower",
    wrongAnswers: ["Corlys Velaryon", "Daemon Targaryen", "Lyonel Strong", "Dragons are cool"]
  },
  {
    question: "Who becomes Hand of the King after Otto Hightower is dismissed?",
    correctAnswer: "Lyonel Strong",
    wrongAnswers: ["Corlys Velaryon", "Daemon Targaryen", "Ser Harwin Strong", "Dragons are cool"]
  },
  {
    question: "Who is the mother of Aegon II Targaryen?",
    correctAnswer: "Alicent Hightower",
    wrongAnswers: ["Rhaenyra Targaryen", "Dragons are cool", "Laena Velaryon", "Rhaenys Targaryen"]
  },
  {
    question: "Who is married to Rhaenyra Targaryen after the death of Laenor Velaryon?",
    correctAnswer: "Daemon Targaryen",
    wrongAnswers: ["Ser Harwin Strong", "Dragons are cool", "Otto Hightower", "Criston Cole"]
  },
  {
    question: "Who is the younger brother of Viserys I Targaryen?",
    correctAnswer: "Daemon Targaryen",
    wrongAnswers: ["Corlys Velaryon", "Dragons are cool", "Otto Hightower", "Laenor Velaryon"]
  },
  {
    question: "Who is the husband of Laena Velaryon?",
    correctAnswer: "Daemon Targaryen",
    wrongAnswers: ["Viserys I Targaryen", "Ser Harwin Strong", "Aegon II Targaryen", "Dragons are cool"]
  },
  {
    question: "Who is the mother of Jacaerys Velaryon?",
    correctAnswer: "Rhaenyra Targaryen",
    wrongAnswers: ["Alicent Hightower", "Laena Velaryon", "Dragons are cool", "Rhaenys Targaryen"]
  },
  {
    question: "Who is the eldest son of Viserys I Targaryen?",
    correctAnswer: "Aegon II Targaryen",
    wrongAnswers: ["Dragons are cool", "Daemon Targaryen", "Laenor Velaryon", "Joffrey Velaryon"]
  },
  {
    question: "Who is the mother of Rhaenys Targaryen?",
    correctAnswer: "Jocelyn Baratheon",
    wrongAnswers: ["Dragons are cool", "Alicent Hightower", "Rhaenyra Targaryen", "Laena Velaryon"]
  },
  {
    question: "Who is the father of Laena Velaryon?",
    correctAnswer: "Corlys Velaryon",
    wrongAnswers: ["Daemon Targaryen", "Otto Hightower", "Dragons are cool", "Viserys I Targaryen"]
  },
  {
    question: "Who is the second son of Rhaenyra Targaryen and Laenor Velaryon?",
    correctAnswer: "Lucerys Velaryon",
    wrongAnswers: ["Jacaerys Velaryon", "Dragons are cool", "Joffrey Velaryon", "Aegon II Targaryen"]
  },
  {
    question: "Who is the father of Aegon II Targaryen?",
    correctAnswer: "Viserys I Targaryen",
    wrongAnswers: ["Dragons are cool", "Daemon Targaryen", "Corlys Velaryon", "Lyonel Strong"]
  },
  {
    question: "Who is the grandfather of Jacaerys Velaryon?",
    correctAnswer: "Corlys Velaryon",
    wrongAnswers: ["Otto Hightower", "Dragons are cool", "Daemon Targaryen", "Lyonel Strong"]
  },
  {
    question: "Who is the daughter of Rhaenys Targaryen?",
    correctAnswer: "Laena Velaryon",
    wrongAnswers: ["Rhaenyra Targaryen", "Alicent Hightower", "Dragons are cool", "Helaena Targaryen"]
  },
  {
    question: "Who is the second wife of Viserys I Targaryen?",
    correctAnswer: "Alicent Hightower",
    wrongAnswers: ["Laena Velaryon", "Dragons are cool", "Rhaenys Targaryen", "Rhaenyra Targaryen"]
  },
  {
    question: "Who is the father of Daemon Targaryen?",
    correctAnswer: "Jaehaerys I Targaryen",
    wrongAnswers: ["Viserys I Targaryen", "Dragons are cool", "Aegon II Targaryen", "Corlys Velaryon"]
  },
  {
    question: "Who is the daughter of Alicent Hightower?",
    correctAnswer: "Helaena Targaryen",
    wrongAnswers: ["Rhaenyra Targaryen", "Dragons are cool", "Laena Velaryon", "Rhaenys Targaryen"]
  },
  {
    question: "Who is the eldest son of Rhaenyra Targaryen and Laenor Velaryon?",
    correctAnswer: "Jacaerys Velaryon",
    wrongAnswers: ["Joffrey Velaryon", "Lucerys Velaryon", "Dragons are cool", "Aegon II Targaryen"]
  },
  {
    question: "Who is the uncle of Aegon II Targaryen?",
    correctAnswer: "Daemon Targaryen",
    wrongAnswers: ["Corlys Velaryon", "Dragons are cool", "Otto Hightower", "Lyonel Strong"]
  },
  {
    question: "Who is the sister of Aegon II Targaryen?",
    correctAnswer: "Helaena Targaryen",
    wrongAnswers: ["Rhaenyra Targaryen", "Laena Velaryon", "Dragons are cool", "Rhaenys Targaryen"]
  },
  {
    question: "Who is the second husband of Rhaenyra Targaryen?",
    correctAnswer: "Daemon Targaryen",
    wrongAnswers: ["Ser Harwin Strong", "Otto Hightower", "Dragons are cool", "Criston Cole"]
  },
  {
    question: "Who is the mother of Joffrey Velaryon?",
    correctAnswer: "Rhaenyra Targaryen",
    wrongAnswers: ["Alicent Hightower", "Laena Velaryon", "Rhaenys Targaryen", "Dragons are cool"]
  },
  {
    question: "Who is the father of Laenor Velaryon?",
    correctAnswer: "Corlys Velaryon",
    wrongAnswers: ["Daemon Targaryen", "Viserys I Targaryen", "Dragons are cool", "Otto Hightower"]
  },
  {
    question: "Who is the first wife of Viserys I Targaryen?",
    correctAnswer: "Aemma Arryn",
    wrongAnswers: ["Alicent Hightower", "Laena Velaryon", "Rhaenys Targaryen", "Dragons are cool"]
  },
  {
    question: "Who is the mother of Helaena Targaryen?",
    correctAnswer: "Alicent Hightower",
    wrongAnswers: ["Rhaenyra Targaryen", "Laena Velaryon", "Dragons are cool", "Rhaenys Targaryen"]
  },
  {
    question: "Who is the younger brother of Aegon II Targaryen?",
    correctAnswer: "Aemond Targaryen",
    wrongAnswers: ["Daemon Targaryen", "Joffrey Velaryon", "Lucerys Velaryon", "Dragons are cool"]
  },
  {
    question: "Who is the daughter of Viserys I Targaryen and Alicent Hightower?",
    correctAnswer: "Helaena Targaryen",
    wrongAnswers: ["Rhaenyra Targaryen", "Laena Velaryon", "Rhaenys Targaryen", "Dragons are cool"]
  },
  {
    question: "Who is the son of Laena Velaryon and Daemon Targaryen?",
    correctAnswer: "They had daughters only",
    wrongAnswers: ["Joffrey Velaryon", "Jacaerys Velaryon", "Dragons are cool", "Baela Targaryen"]
  },
  {
    question: "Who is the younger brother of Rhaenyra Targaryen?",
    correctAnswer: "Aegon II Targaryen",
    wrongAnswers: ["Daemon Targaryen", "Joffrey Velaryon", "Corlys Velaryon", "Dragons are cool"]
  },
  {
    question: "Who is the mother of Baela Targaryen?",
    correctAnswer: "Laena Velaryon",
    wrongAnswers: ["Alicent Hightower", "Rhaenyra Targaryen", "Rhaenys Targaryen", "Dragons are cool"]
  },
  {
    question: "Who is the husband of Rhaenys Targaryen?",
    correctAnswer: "Corlys Velaryon",
    wrongAnswers: ["Viserys I Targaryen", "Daemon Targaryen", "Otto Hightower", "Dragons are cool"]
  },
  {
    question: "Who is the father of Jacaerys Velaryon?",
    correctAnswer: "Ser Harwin Strong",
    wrongAnswers: ["Laenor Velaryon", "Daemon Targaryen", "Criston Cole", "Dragons are cool"]
  },
  {
    question: "Who is the second wife of Daemon Targaryen?",
    correctAnswer: "Rhaenyra Targaryen",
    wrongAnswers: ["Laena Velaryon", "Alicent Hightower", "Helaena Targaryen", "Dragons are cool"]
  },
  {
    question: "Who is the daughter of Daemon Targaryen and Laena Velaryon?",
    correctAnswer: "Baela Targaryen",
    wrongAnswers: ["Helaena Targaryen", "Rhaenys Targaryen", "Jacaerys Velaryon", "Dragons are cool"]
  },
  {
    question: "Who is the father of Aegon II Targaryen?",
    correctAnswer: "Viserys I Targaryen",
    wrongAnswers: ["Daemon Targaryen", "Corlys Velaryon", "Lyonel Strong", "Dragons are cool"]
  },
  {
    question: "Who is the grandfather of Joffrey Velaryon?",
    correctAnswer: "Corlys Velaryon",
    wrongAnswers: ["Otto Hightower", "Daemon Targaryen", "Lyonel Strong", "Dragons are cool"]
  },
  {
    question: "Who is the second son of Viserys I Targaryen and Alicent Hightower?",
    correctAnswer: "Aemond Targaryen",
    wrongAnswers: ["Daemon Targaryen", "Laenor Velaryon", "Aegon II Targaryen", "Dragons are cool"]
  },
  {
    question: "Who is the husband of Helaena Targaryen?",
    correctAnswer: "Aegon II Targaryen",
    wrongAnswers: ["Daemon Targaryen", "Corlys Velaryon", "Otto Hightower", "Dragons are cool"]
  },
  {
    question: "Who is the first wife of Daemon Targaryen?",
    correctAnswer: "Laena Velaryon",
    wrongAnswers: ["Rhaenyra Targaryen", "Alicent Hightower", "Helaena Targaryen", "Dragons are cool"]
  },
  {
    question: "Who is the father of Helaena Targaryen?",
    correctAnswer: "Viserys I Targaryen",
    wrongAnswers: ["Daemon Targaryen", "Corlys Velaryon", "Lyonel Strong", "Dragons are cool"]
  },
  {
    question: "Who is the grandfather of Baela Targaryen?",
    correctAnswer: "Corlys Velaryon",
    wrongAnswers: ["Otto Hightower", "Daemon Targaryen", "Lyonel Strong", "Dragons are cool"]
  },
  {
    question: "Who is the sister of Jacaerys Velaryon?",
    correctAnswer: "He has no sisters",
    wrongAnswers: ["Helaena Targaryen", "Rhaenys Targaryen", "Rhaenyra Targaryen", "Dragons are cool"]
  },
  {
    question: "Who is the uncle of Rhaenyra Targaryen?",
    correctAnswer: "Daemon Targaryen",
    wrongAnswers: ["Corlys Velaryon", "Otto Hightower", "Lyonel Strong", "Dragons are cool"]
  }
];

/*
// HIDE help content to begin
document.getElementById('help-content').style.display = 'none';

// Toggle help content
document.getElementById('help-logo').addEventListener('click', function() {
  if (document.getElementById('help-content').style.display === 'none') {
    document.getElementById('help-content').style.display = 'block';
  } else {
    document.getElementById('help-content').style.display = 'none';
  }
})
*/

/**
 * Generates a random array for the round from the question pool
 * @param {} amount how many questions the round will be
 * @returns an array of numbers used to pull questions from the pool
 */
function generateQuestions(amount) {
    let set = [];  
    while (set.length < amount && set.length < questionPool.length) {
      let num = (Math.floor(Math.random() * questionPool.length));
      if (!set.includes(num)) {
          set.push(num);
      }
  }
  return set;
}

// determine questions for the round
//let questionSet = generateQuestions(50);

//for (question of questionSet) {
//    console.log(questionPool[question].question);
//}
//console.log(questionPool.length, questionSet.length);
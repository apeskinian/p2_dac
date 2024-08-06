// BUILD THE QUESTIONS POOL
let questionPool = [
    {
        question: "Who is the father of Rhaenyra Targaryen?",
        answer: "Viserys I Targaryen",
        incorrect: ["Daemon Targaryen","Corlys Velaryon","Dragons are cool","Otto Hightower"],
    },{
        question: "Who is married to Alicent Hightower?",
        answer: "Viserys I Targaryen",
        incorrect: ["Corlys Velaryon","Dragons are cool","Daemon Targaryen","Rhaenys Targaryen"],
    },{
        question: "Who is the mother of Laenor Velaryon?",
        answer: "Rhaenys Targaryen",
        incorrect: ["Alicent Hightower","Rhaenyra Targaryen","Dragons are cool","Helaena Targaryen"],
    },{
        question: "Who is Daemon Targaryen's first wife?",
        answer: "Laena Velaryon",
        incorrect: ["Rhaenyra Targaryen","Alicent Hightower","Dragons are cool","Aemma Arryn"],
    },{
        question: "Who is Rhaenyra Targaryen's first husband?",
        answer: "Laenor Velaryon",
        incorrect: ["Daemon Targaryen","Ser Harwin Strong","Jacaerys Velaryon","Dragons are cool"],
    },{
        question: "Who is the grandfather of Aegon II Targaryen?",
        answer: "Viserys I Targaryen",
        incorrect: ["Corlys Velaryon","Dragons are cool","Daemon Targaryen","Lyonel Strong"],
    },{
        question: "Who is the daughter of Rhaenyra Targaryen and Laenor Velaryon?",
        answer: "They had sons only",
        incorrect: ["Baela Targaryen","Joffrey Velaryon","Rhaena Targaryen","Dragons are cool"],
    },{
        question: "Who is the Hand of the King serving Viserys I Targaryen at the beginning of the series?",
        answer: "Otto Hightower",
        incorrect: ["Corlys Velaryon","Daemon Targaryen","Lyonel Strong","Dragons are cool"],
    },{
        question: "Who becomes Hand of the King after Otto Hightower is dismissed?",
        answer: "Lyonel Strong",
        incorrect: ["Corlys Velaryon","Daemon Targaryen","Ser Harwin Strong","Dragons are cool"],
    },{
        question: "Who is the mother of Aegon II Targaryen?",
        answer: "Alicent Hightower",
        incorrect: ["Rhaenyra Targaryen","Dragons are cool","Laena Velaryon","Rhaenys Targaryen"],
    }
]

/**
 * Generates a random array for the round from the question pool
 * @param {} amount how many questions the round will be
 * @returns an array of numbers used to pull questions from the pool
 */
function generateQuestions(amount) {
    let set = [];  
    while (set.length < amount && set.length < questionPool.length) {
      let num = (Math.floor(Math.random()*10));
      if (!set.includes(num)) {
          set.push(num);
      }
  }
  return set;
}

// determine questions for the round
let questionSet = generateQuestions(5);

for (question of questionSet) {
    console.log(questionPool[question].question);
}
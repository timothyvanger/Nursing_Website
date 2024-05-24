type questionBlock = {
  question: string;
  answer: string;
  choices: string[];
  id: string;
};

type questionsArray = [];

const questionOne: questionBlock = {
  question: "What is PQRST used for?",
  answer: "It is used to assess pain in patients",
  choices: [
    "It is used as a scale to rate pain from 0-10",
    "It uses faces to rate pain",
    "It is used as an assessment tool during general admission",
  ],
  id: crypto.randomUUID(),
};
const questionTwo: questionBlock = {
  question: "What is PQRST used for?",
  answer: "It is used to assess pain in patients",
  choices: [
    "It is used as a scale to rate pain from 0-10",
    "It uses faces to rate pain",
    "It is used as an assessment tool during general admission",
  ],
  id: crypto.randomUUID(),
};

export const pqrstQuestionArray: questionsArray = [questionOne, questionTwo];

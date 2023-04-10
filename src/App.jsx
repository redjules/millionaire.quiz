import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of Harry Potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Radcliffe",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What is the capital of France?",
      answers: [
        {
          text: "Paris",
          correct: true,
        },
        {
          text: "Madrid",
          correct: true,
        },
        {
          text: "Dublin",
          correct: false,
        },
        {
          text: "London",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who wrote `El Quijote`?",
      answers: [
        {
          text: "Leonardo Da Vinci",
          correct: false,
        },
        {
          text: "Luis de Góngora",
          correct: false,
        },
        {
          text: "Arturo Pérez-Reverte",
          correct: false,
        },
        {
          text: "Miguel de Cervantes",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "According to the legend, what is at the end of a rainbow?",
      answers: [
        {
          text: "Jesus",
          correct: false,
        },
        {
          text: "Elf",
          correct: false,
        },
        {
          text: "Pot of gold",
          correct: true,
        },
        {
          text: "Light",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which of these is NOT a letter of the Greek alphabet?",
      answers: [
        {
          text: "Alpha",
          correct: false,
        },
        {
          text: "Omega",
          correct: false,
        },
        {
          text: "Sigma",
          correct: false,
        },
        {
          text: "Umlaut",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Of the twelve signs of the Zodiac which one is known as 'The Archer'?",
      answers: [
        {
          text: "Sagittarius",
          correct: true,
        },
        {
          text: "Aquarius",
          correct: false,
        },
        {
          text: "Capricorn",
          correct: false,
        },
        {
          text: "Virgo",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which author created Sherlock Holmes?",
      answers: [
        {
          text: "Agatha Christie",
          correct: false,
        },
        {
          text: "G.K. Chesterton",
          correct: false,
        },
        {
          text: "Sir Arthur Conan Doyle",
          correct: true,
        },
        {
          text: "Edgar Allan Poe",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Goulash is the national dish of which country?",
      answers: [
        {
          text: "India",
          correct: false,
        },
        {
          text: "Greece",
          correct: false,
        },
        {
          text: "Spain",
          correct: false,
        },
        {
          text: "Hungary",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "What is the capital of Pakistan?",
      answers: [
        {
          text: "Islamabad",
          correct: true,
        },
        {
          text: "Lahore",
          correct: false,
        },
        {
          text: "Karachi",
          correct: false,
        },
        {
          text: "Pasni",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What does a tegestologist collect?",
      answers: [
        {
          text: "Beer mats",
          correct: true,
        },
        {
          text: "Certificates",
          correct: false,
        },
        {
          text: "Bird's eggs",
          correct: false,
        },
        {
          text: "Walking sticks",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which explorer discovered the island of Jamaica?",
      answers: [
        {
          text: "Francis Drake",
          correct: false,
        },
        {
          text: "Christopher Columbus",
          correct: true,
        },
        {
          text: "Ferdinand Magellan",
          correct: false,
        },
        {
          text: "Vasco da Gama",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Stockholm, the capital of Sweden, is built on how many small islands which are connected by about 50 bridges?",
      answers: [
        {
          text: "14",
          correct: true,
        },
        {
          text: "24",
          correct: false,
        },
        {
          text: "4",
          correct: false,
        },
        {
          text: "44",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Dodge City is located in which American State?",
      answers: [
        {
          text: "Montana",
          correct: false,
        },
        {
          text: "Utah",
          correct: false,
        },
        {
          text: "Kansas",
          correct: true,
        },
        {
          text: "Arizona",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

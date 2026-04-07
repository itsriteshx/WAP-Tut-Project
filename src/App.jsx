import { useState } from "react";
import React from "react";

export default function App() {

  const [userMove,setUserMove] = useState("Paper");
  const [computerMove,setComputerMove] = useState("Paper");

  const [result,setResult] = useState("Let's Play!");

  const [userScore,setUserScore] = useState(0);
  const [computerScore,setComputerScore] = useState(0);
  const [rounds,setRounds] = useState(0);
  let emoji = {Rock:"🪨",Paper:"📄",Scissor:"✂️"};

  function handleClick(move) {
    let compMove = generateComputerMove();

    setUserMove(move);
    setComputerMove(compMove);

    let winner = getWinner(move, compMove);
    setResult(winner);
    setRounds(prev => prev + 1);

  
    if (winner=== "You Win!") {
      setUserScore(prev => prev + 1);
    }
    else if (winner === "Computer Wins!") {
      setComputerScore(prev => prev + 1);
    }
  }

  function generateComputerMove() {

    let value = Math.random();

    if (value < 0.33) {
      return "Rock";
    }
    else if (value < 0.67) {
      return "Paper";
    }
    else {
      return "Scissor";
    }
  }

  function getWinner(user, computer) {
    if (user === computer) {
      return "Draw!";
    }
    if (
      (user === "Rock" && computer === "Scissor") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Scissor" && computer === "Paper")
    ) {
      return "You Win!";
    }
    return "Computer Wins!";
  }

  function resetGame() {
    setUserScore(0);
    setComputerScore(0);
    setRounds(0);
    setUserMove("Paper");
    setComputerMove("Paper");
    setResult("Game Reset!");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Rock Paper Scissors</h1>
      <h2>Computer : You</h2>
      <h2>{emoji[computerMove]} : {emoji[userMove]}</h2>
      <h2>{result}</h2>
      <h3>Score → You: {userScore} | Computer: {computerScore}</h3>
      <h3>Rounds Played: {rounds}</h3>

      <br />
      <button onClick={() => handleClick("Rock")}>🪨 Rock</button>
      <button onClick={() => handleClick("Paper")}>📄 Paper</button>
      <button onClick={() => handleClick("Scissor")}>✂️ Scissor</button>
      <br /><br />
      <button onClick={resetGame}>🔄 Reset Game</button>

    </div>
  );
}



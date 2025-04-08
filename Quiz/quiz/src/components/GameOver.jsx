import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import WellDone from "../img/WellDone.svg"

import "./GameOver.css"




const GameOver = () => {
  return (
    <div id="gameover">
      <h2>Fim de Jogo!</h2>
      <p>Pontuação:</p>
      <p>Você acertou y de z de perguntas:</p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button>Reiniciar</button>
    </div>
  )
}

export default GameOver

import React, { useState, useContext } from 'react'
import { Question } from '../helpers/QuestionBank'
import { QuizContext } from '../helpers/Contexts';

function EndScreen() {
    const{ score, setScore, setGameState } = useContext(QuizContext);

    const restartQuiz = ()=>{
        setScore(0)
        setGameState('menu')
    }
  return (
    <div className='EndScreen'>
        <h1>Quiz Finished</h1>
        <h3>{ score } / {Question.length}</h3>

        <button onClick={restartQuiz}>Resart Quiz</button>
    </div>
  )
}

export default EndScreen

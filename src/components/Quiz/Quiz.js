import React from 'react';
import classes from './Quiz.css';

const quiz = (props) => {
    return (
        <div className={classes.quiz}>
            <h3 className={classes.question}>{props.question}</h3>
            <div>
                <button className={classes.quizButton} onClick={() => props.selectedAnswer(0)}>{props.answers[0].copy}</button>
                <button className={classes.quizButton} onClick={() => props.selectedAnswer(1)}>{props.answers[1].copy}</button>
            </div>
        </div>
    )
}

export default quiz;
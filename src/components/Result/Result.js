import React from 'react';
import classes from './Result.css';

const result = (props) => {
    return (
        <div className={classes.results}>
            <h4 className={classes.resultTitle}>Congratulations!</h4>
            <p className={classes.resultDescription}>Based on your selection we've decided on the {props.firstShoe} and {props.secondShoe}!
            Enjoy the 30 day trial!</p>
            <img src={require('../../assets/first-choice.png')} alt="first offer" />
            <h4 className={classes.shoeTitle}>{props.firstShoe}</h4>
            <p className={classes.shoeDescription}>Ultimate lightweight running shoe.</p>
            <h5 className={classes.shoePrice}>CHF 230.00</h5>

            <img src={require('../../assets/second-choice.png')} alt="second offer" />
            <h4 className={classes.shoeTitle}>{props.secondShoe}</h4>
            <p className={classes.shoeDescription}>Ultimate lightweight running shoe.</p>
            <h5 className={classes.shoePrice}>CHF 220.00</h5>
        </div>
    )
}

export default result;
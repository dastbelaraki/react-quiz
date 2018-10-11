import React, { Component } from 'react';
import axios from 'axios';
import classes from './App.css';
import Quiz from '../../components/Quiz/Quiz';
import Result from '../../components/Result/Result';

class App extends Component {
  state = {
    showQuiz: false,
    showResult: false
  }

  showQuizHandler = () => {
    this.setState({ showQuiz: true });
  }

  selectedAnswerHandler = (value) => {
    const answer = this.state.questions[this.state.nextQuestionID].answers[value];
    const shoesRating = answer.ratingIncrease;
    const shoesList = [...this.state.shoes];
    for (const shoeName in shoesRating) {
      const currentShoe = shoesList.find(shoe => shoe.name === shoeName);
      currentShoe.rating = currentShoe.rating + shoesRating[shoeName];
    }

    if (answer.nextQuestion !== "") {
      this.setState({
        nextQuestionID: answer.nextQuestion,
        shoes: shoesList
      })
    } else {
      // Sorting the shoes array
      this.state.shoes.sort(this.compare);
      // Removing underscore from shoe name before displaying it to user
      for (const shoe in shoesList) {
        if(shoesList[shoe].name.includes('_')){
          shoesList[shoe].name = shoesList[shoe].name.replace('_', ' ');
        }
      }
      this.setState({
        showResult: true,
        showQuiz: false
      })
    }
  }

  compare = (a, b) => {
    if (a.rating < b.rating)
      return 1;
    if (a.rating > b.rating)
      return -1;
    return 0;
  }

  componentDidMount() {
    axios.get('data.json').then(response => {
      this.setState({
        shoes: response.data.shoes,
        questions: response.data.questions,
        nextQuestionID: 0
      })
    });
  }

  render() {
    return (
      <div className={classes.App}>
        {this.state.showQuiz && !this.state.showResult ?
          <Quiz
            question={this.state.questions[this.state.nextQuestionID].copy}
            answers={this.state.questions[this.state.nextQuestionID].answers}
            selectedAnswer={this.selectedAnswerHandler}
          />
          :
          !this.state.showQuiz && this.state.showResult ?
          <Result firstShoe={this.state.shoes[0].name} secondShoe={this.state.shoes[1].name} />
          :
          <>
            <h1>Take the quiz and try your first pair!</h1>
            <button className={classes.startButton} onClick={this.showQuizHandler} >Try On Trial</button>
          </>
        }
      </div>
    );
  }
}

export default App;
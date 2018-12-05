import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import apiQuestions from './api/apiQuestions';
import Navbar from './components/TopBar/TopBar';
import Content from './components/Content/Content';
import Result from './components/Result/Result';

class App extends Component {
  state = {
    counter: 0,
    question: '',
    questionId: 1,
    questionTitle: '',
    answerOptions: [],
    answer: '',
    answersCount: {
      One: 0,
      Two: 0,
      Three: 0,
      Four: 0
    },
    result: '',
    resultContent: ''
  };

  componentWillMount() {
    const answerOptions = apiQuestions.map(question => question);
    this.setState({
      question: answerOptions[0].question,
      questionTitle: answerOptions[0].title,
      answerOptions: answerOptions[0].answers,
    });
  }

  handleAnswerSelected = e => {
    const {name, value} = e.currentTarget;
    this.setState({
      result: name,
      resultContent: value,
    });
  };

  renderResult() {
    return (
      <Result
        quizResult={this.state.result}
        quizResultContent={this.state.resultContent}
      />
    );
  }

  renderContent() {
    return (
      <Content
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTitle={this.state.questionTitle}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  render() {
    return (
      <div>
        <Navbar />
        <Progress color="success" value={10} />
        <div className="bg-primary content-body">
          {this.state.result ? this.renderResult() : this.renderContent()}
        </div>
      </div>
    );
  }
}

export default App;

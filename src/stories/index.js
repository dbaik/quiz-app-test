import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import TopBar from '../components/TopBar/TopBar';
import UserBadge from '../components/UserBadge/UserBadge';
import Logo from '../components/Logo/Logo';
import Target from '../components/Target/Target';
import AnswerOption from '../components/AnswerOption/AnswerOption';
import Content from '../components/Content/Content';
import Question from '../components/Question/Question';

storiesOf('TopBar', module)
  .add('default view', () => <TopBar />);

storiesOf('TopBar/UserBadge', module)
  .add('default view', () =>
    <UserBadge
      imageSrc="//placekitten.com/100/100"
      userName="Marjolein"
      scorePoints={183}
    />
  )
  .add('without image', () =>
    <UserBadge
      userName="Marjolein"
      scorePoints={183}
    />
  )
  .add('without image, name, score', () =>
    <UserBadge />
  );

storiesOf('TopBar/Logo', module)
  .add('default view', () =>
    <Logo
      logoSrc="//www.protacon.com/wp-content/uploads/2016/03/logo_rexel.jpg"
      logoTitle="Rexel Logo"
    />
  );

storiesOf('TopBar/Target', module)
  .add('default view', () => <Target targetScore={15} />);

const apiQuestions = [
  {
    question: "Vel aut maxime a. Odio nobis doloremque vel totam velit. Sint fuga facilis odio excepturi.",
    title: "Dolor necessitatibus temporibus?",
    answers: [
      {
        type: "One",
        content: "Cum est neque. Praesentium aut omnis nihil omnis."
      },
      {
        type: "Two",
        content: "Et officiis sunt delectus sint aut modi laboriosam"
      },
      {
        type: "Three",
        content: "Ipsum porro dolorem temporibus eos temporibus."
      },
      {
        type: "Four",
        content: "Dolorem vel eveniet fugiat ullam autem nobis qui et."
      }
    ]
  },
];

const answers = [
  {
    type: "One",
    content: "Cum est neque. Praesentium aut omnis nihil omnis."
  },
  {
    type: "Two",
    content: "Et officiis sunt delectus sint aut modi laboriosam"
  },
  {
    type: "Three",
    content: "Ipsum porro dolorem temporibus eos temporibus."
  }

];

const answerOptions = apiQuestions.map(question => question);

storiesOf('Content', module)
  .add('default view', () =>
    <Content
      answer=""
      answerOptions={answerOptions[0].answers}
      questionId={id}
      question={answerOptions[0].question}
      questionTitle={answerOptions[0].title}
      onAnswerSelected={action('clicked')}
    />
  )
  .add('three options', () =>
    <Content
      answer=""
      answerOptions={answers}
      questionId={id}
      question={answerOptions[0].question}
      questionTitle={answerOptions[0].title}
      onAnswerSelected={action('clicked')}
    />
  );

const title = 'Some question title will be here';
const content = 'Some question title will be here';
const image = '//placekitten.com/2000/1100';
const id = 10;

storiesOf('Content/Question', module)
  .add('default view', () =>
    <Question
      title={title}
      content={content}
      image={image}
      questionId={id}
    />
  )
  .add('without image', () =>
    <Question
      title={title}
      content={content}
      questionId={10}
    />

  );

storiesOf('Content/AnswerOption', module)
  .add('default view', () =>
    <AnswerOption
      onAnswerSelected={action('clicked')}
      answerContent="Answer content"
      answer=""
      answerType="One"
    />
  );


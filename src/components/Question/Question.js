import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from 'reactstrap';
import './Question.css';

const Question = ({ content, title, image, questionId }) => (
  <Card className="text-center">
    <div className="img-wrap rounded-top bg-light">
      <CardImg
        top
        width="100%"
        src={image}
        alt={`Question ${questionId}`}
      />
      <div className="question-number h5 rounded-circle">
        {questionId}
      </div>
    </div>
    <CardBody>
      <CardText>{content}</CardText>
      <CardTitle className="text-primary mb-0">
        {title}
      </CardTitle>
    </CardBody>
  </Card>
);

Question.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  questionId: PropTypes.number.isRequired,
};

export default Question;

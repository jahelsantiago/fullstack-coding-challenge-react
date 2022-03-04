import React from 'react';
import Question from "./Question";
import styles from './QuestionContainer.module.css';
import QuestionContainer from "./QuestionContainer";
import QuestionsBody from "./QuestionsBody";

function QuestionSection({currCandidate, currApplication}){
    return (
        <QuestionContainer currCandidate={currCandidate}>
            <QuestionsBody currApplication={currApplication}/>
        </QuestionContainer>
    );
};

export default QuestionSection;
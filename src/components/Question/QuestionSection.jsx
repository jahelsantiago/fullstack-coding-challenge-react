import React from 'react';
import QuestionContainer from "./QuestionContainer";
import QuestionsBody from "./QuestionsBody";
import PropTypes from 'prop-types';
import styles from "./QuestionBody.module.css";

QuestionSection.prototype = {
    currCandidate: PropTypes.object.isRequired,
    currApplication: PropTypes.object.isRequired,
}


function QuestionSection({currCandidate, currApplication}){
    let body = null;
    //if the user dont have an application show an error message
    if(!currApplication){
        body =  (
            <div  className={styles.subtitle}>
                Este usuario no ha respondido ninguna pregunta
            </div>
        )
    }else{ //else show the questions with the video and the comments
        body = (<QuestionsBody currApplication={currApplication}/>)
    }
    return (
        <QuestionContainer currCandidate={currCandidate}>
            {body}
        </QuestionContainer>
    );
}

export default QuestionSection;
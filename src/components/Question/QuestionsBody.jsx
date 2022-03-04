import React from 'react';
import styles from "./QuestionBody.module.css"
import Question from "./Question";
import PropTypes from 'prop-types';
import {useQuestions} from "../../services";

QuestionsBody.prototype = {
    currApplication: PropTypes.shape({
        id: PropTypes.number.isRequired,
        video: PropTypes.object.isRequired,
    })
}


function QuestionsBody({currApplication}) {
    const {videos, updateComment, save} = useQuestions(currApplication)

    return (
        <div className={styles.container}>
            {videos.map((video, index) => (
                <Question key={video.src} video={video} id = {currApplication.id}/>
            ))}
        </div>
    );
}

export default QuestionsBody;
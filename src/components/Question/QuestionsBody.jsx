import React from 'react';
import styles from "./QuestionBody.module.css"
import Question from "./Question";

function QuestionsBody({currApplication}) {
    if(!currApplication){
        return (
            <div  className={styles.subtitle}>
                Este usuario no ha respondido ninguna pregunta
            </div>
        )
    }
    return (
        <>
            {currApplication.videos.map((video, index) => (
                <Question key={video.src} video={video}/>
            ))}
        </>
    );
}

export default QuestionsBody;
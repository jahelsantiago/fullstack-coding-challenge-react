import React from 'react';
import styles from "./QuestionContainer.module.css";


function QuestionContainer({currCandidate, children}) {
    if(!currCandidate) return null;

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>{currCandidate.name}</h2>
            </div>
            {children}
        </div>
    );
}

export default QuestionContainer;
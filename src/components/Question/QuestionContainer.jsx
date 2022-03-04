import React from 'react';
import styles from "./QuestionContainer.module.css";
import propTypes from 'prop-types';

QuestionContainer.prototype = {
    currCandidate: propTypes.object.isRequired,
}

function QuestionContainer({currCandidate, children}) {
    if(!currCandidate) return (
        <div className={styles.container}>
            <h1 className={styles.title}>Porfavor elija un candidato</h1>
        </div>
    );

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
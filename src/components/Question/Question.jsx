import React, {useState} from 'react';
import styles from './Question.module.css';
import PropTypes from 'prop-types';

Question.prototype = {
    video: PropTypes.shape({
        comments: PropTypes.string,
        question: PropTypes.string,
        questionId: PropTypes.number,
        src: PropTypes.string,
    }),
}

function Question({video, id}) {
    const [question, setQuestion] = useState();
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>
                {video.question}
            </h2>
            <video className={styles.video} controls>
                <source src={video.src} type="video/mp4"/>
            </video>
            <div className={styles.comment}>
                <textarea
                    className={styles.input}
                    rows="2"
                    placeholder="Your answer"
                    value={question}
                    onChange={(e)=>{setQuestion(e.target.value)}}
                />
                <button type="button" onClick={()=>{}} className={styles.button}>Comentar</button>
            </div>

        </div>
    );
}

export default Question;
import React, {useState} from 'react';
import styles from './Question.module.css';

function Question({video}) {
    const [question, setQuestion] = useState();
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>
                {video.question}
            </h2>
            <video className={styles.video} controls>
                <source src={video.src} type="video/mp4"/>
            </video>
            <form className={styles.comment}>
                <textarea
                    className={styles.input}
                    rows="2"
                    type="text" placeholder="Your answer"
                    value={question}
                    onChange={(e)=>{setQuestion(e.target.value)}}
                />
                <button type="button" onClick={()=>{}} className={styles.button}>Comentar</button>
            </form>

        </div>
    );
}

export default Question;
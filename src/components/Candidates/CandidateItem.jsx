import React from 'react'
import styles from "./CandidateItem.module.css"
export const CandidateItem = ({name, onClick, selected}) => {
    const containerClassName = styles.container + " " + (selected ? styles.selected : styles.notSelected)
    return (
        <div className={containerClassName} onClick={onClick}>
            <div className={selected?styles.selected:styles.notSelected}>
                <div className={styles.name}>{name}</div>
            </div>
        </div>
  )
}

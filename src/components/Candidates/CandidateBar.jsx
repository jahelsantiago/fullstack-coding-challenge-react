import React, {useState} from 'react'
import styles from './CandidateBar.module.css'
import {CandidateItem} from "./CandidateItem";
import PropTypes from 'prop-types';

CandidateBar.propTypes = {
    candidateList: PropTypes.array.isRequired,
    currCandidateIndex: PropTypes.number.isRequired,
    changeCurrCandidate: PropTypes.func.isRequired,
}

export default function CandidateBar({candidateList, currCandidateIndex, changeCurrCandidate, open}){
  if(!open) return null;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Lista de candidatos
      </div>
      {candidateList.map((candidate, index) =>{
          const isSelected = index === currCandidateIndex;
          return <CandidateItem key={index} name={candidate.name} onClick={()=>{changeCurrCandidate(index)}} selected = {isSelected}/>
      })}
    </div>
  )
}

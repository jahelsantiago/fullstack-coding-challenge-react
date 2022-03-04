import React from 'react'
import styles from './CandidateBar.module.css'
import {CandidateItem} from "./CandidateItem";

export default function CandidateBar({candidateList, currCandidateIndex, changeCurrCandidate}){

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

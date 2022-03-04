import Head from 'next/head'
import  CandidateBar from '../components/Candidates'
import styles from '../../styles/Home.module.css'
import {useCandidates} from "../Hooks";
import QuestionSection from "../components/Question";


export default function Home() {
    const {currCandidateIndex, currCandidate, changeCurrCandidate, candidates, currApplication} =  useCandidates();


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CandidateBar candidateList={candidates} currCandidateIndex = {currCandidateIndex} changeCurrCandidate = {changeCurrCandidate}/>
        <QuestionSection currCandidate={currCandidate} currApplication={currApplication}/>
      </main>
    </div>
  )
}

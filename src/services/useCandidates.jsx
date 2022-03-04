import {useEffect, useRef, useState} from "react";
import {parseQuestions, parseApplication} from "./useCandidatesUtils";

/**
 * Hook that deals with the candidates
 * @return {{candidates: *[], changeCurrCandidate: changeCurrCandidate, currCandidateIndex: number, currApplication: *[], currCandidate: *}}
 */
function useCandidates(){
    const [currCandidateIndex, setCurrCandidateIndex] = useState(-1)
    const [candidates, setCandidates] = useState([])
    const [currApplication, setCurrApplication] = useState([])
    const currCandidate = candidates[currCandidateIndex]
    const questions = useRef()

    /**
     * Function that change the current candidate, this is the candidate that the user is seeing
     * @param index {number} The index of the candidate to change as current
     */
    function changeCurrCandidate(index){

        setCurrCandidateIndex(index)
    }


    /**
     * initial effect that load a list with all the candidates and the list of possible questions
     */
    useEffect(() => {
        //load the list of candidates to the state
        fetch('http://localhost:3004/candidates')
            .then(res => res.json())
            .then(data => {
                setCandidates(data)
            })

        //get the list of questions in object format
        fetch('http://localhost:3004/questions')
            .then(res => res.json())
            .then(data => {
                questions.current = parseQuestions(data);
            })
    }, [])


    /**
     * When the user changes the current candidate, this function is called to load the current application
     */
    useEffect(()=>{
        //check if the candidate exist, if so check if he has an application and load the application including the question, and the video
        if(currCandidate && currCandidate.applicationId){
            fetch(`http://localhost:3004/applications/${currCandidate.applicationId}`)
                .then(res => res.json())
                .then(data => {
                    parseApplication(data, questions.current) //add the question using the question ID
                    setCurrApplication(data)
                })
        }else{
            setCurrApplication(null)
        }
    }, [currCandidate])

    return  {currCandidateIndex, currCandidate, changeCurrCandidate, candidates, currApplication}
}

export default useCandidates
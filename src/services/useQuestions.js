//do a POST request to the server to add a new comment in the application
import {useEffect, useRef, useState} from "react";

function postComment(application){
    const applicationID = application.id;
    return fetch(`http://localhost:3004/applications/${applicationID}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(application)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
}

export default function useQuestions(currApplication){
    const id = useRef(currApplication.id);
    const [videos, setVideos] = useState(currApplication.videos);

    useEffect(() => {
        setVideos(currApplication.videos);
    }, [currApplication]);

    function updateComment(idx, comment){
        const newVideos = [...videos];
        newVideos[idx].comments = comment;
        setVideos(newVideos);
    }

    function save(){
        const application = {
            id: id.current,
            videos: videos
        }
        postComment(application); //añadir un catch de error
    }

    return {videos, updateComment, save};
}
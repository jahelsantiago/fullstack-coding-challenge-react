/**
 * Function that parse the candidates from a list to a object for constant time lookup
 * @param question {any[]} The question to parse the candidates
 * @return {Object} The object with the candidates
 */
export function parseQuestions(question = []){
    const questionsParsed = {};
    question.forEach(function(item){
        questionsParsed[item.id] = item.question;
    });
    return questionsParsed;
}

/**
 * Function that add the question to each video
 * @param application
 * @param questions
 * @return {{}}
 */
export function parseApplication( application, questions = {} ){
    const listVideos = application.videos;
    listVideos.forEach(function(item, index){
        listVideos[index].question = questions[item.questionId];
    });
}
function finalScore(omr) {
    const answerSheet = omr.right + omr.wrong + omr.skip;
    
    if(typeof omr !== "object"){
        return "Invalid";
    }
    else if(answerSheet !== 100){
        return "Invalid"
    }

    else{
        
        const rightAnswer = omr.right * 1;
        const wrongAnswer = omr.wrong * 0.5;
        const skipAnswer = omr.skip * 0;
        const getMarks = rightAnswer - (wrongAnswer + skipAnswer)
        return Math.round(getMarks)
    
    }

   
}

const result = finalScore({"right":67,"wrong":23,"skip":10})
console.log(result);

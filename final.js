//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
    // validation check
    if(typeof currentPrice !== "number" || typeof discount !== "number"){
        return "Invalid"
    }
    // after discount pay discount price 
    else{
        const discountPrice = (currentPrice * discount) / 100;
        const finalPrice = currentPrice - discountPrice;
        return finalPrice.toFixed(3);
    }
    
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
    // validation otp check
    if(typeof otp !== "string" ){
        return "Invalid"
    }

    // otp length check 
    else if(otp.length !== 8 || otp.startsWith("ph") === false){
        return false;
    }

    return true;
}

//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
    // total answer
    const answerSheet = omr.right + omr.wrong + omr.skip;
    
    // validation check
    if(typeof omr !== "object"){
        return "Invalid";
    }
    else if(answerSheet !== 100){
        return "Invalid"
    }
     
    // result with math rounded 
    else{
        
        const rightAnswer = omr.right * 1;
        const wrongAnswer = omr.wrong * 0.5;
        const skipAnswer = omr.skip * 0;
        const getMarks = rightAnswer - (wrongAnswer + skipAnswer)
        return Math.round(getMarks)
    
    }
  
}


//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
    // validation
    if(Array.isArray(array) === false){
        return "Invalid"
    }

    // vote count
    let haVote = 0; 
    let naVote = 0;

    for(let vote of array){
        if(vote === "ha"){
            haVote++;
        }
        else if(vote === "na"){
            naVote++;
        }
    }

    // compare result 

    if(haVote > naVote){
        return true;
    }
    else if(haVote === naVote){
        return "equal";
    }
    else{
        return false;
    }   
}

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
    if(typeof str !== "string" || str.length === 0 ){
        return "Invalid"
    }
    
    // Split a sentence and convert in an array 
    const wordInStr = str.split(" ")
    

    // find long word in sentence
    let longWords = ""
    for(let word of wordInStr){
        if(word.length > longWords.length){
            longWords = word; 
        }
        
    }

    // count to charecterr without space
    let token = str.split(" ").join("").length;
    
    // return a object 
    return {
        longwords:longWords,
        token:token
    }
    
}



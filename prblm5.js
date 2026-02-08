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
        longwords: longWords,
        token: token
    }
    
}


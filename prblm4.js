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

    console.log(haVote,naVote);
    

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

const result = gonoVote(["ha","na","ha","na"])
console.log(result);

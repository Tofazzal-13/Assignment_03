function validOtp(otp) {
    if(typeof otp !== "string" ){
        return "invalid"
    }
    else if(otp.length !== 8 || otp.startsWith("ph") === false){
        return false;
    }

    return true;
}

const validOpt = validOtp(["ph-10985"]);
console.log(validOpt);

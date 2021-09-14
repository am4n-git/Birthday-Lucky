const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number")
const outputBox = document.querySelector("#output-box")
function checkBirthdateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(dob && luckyNumber.value){
        compareValues(sum, luckyNumber.value)
    }
    else{
        alert("Enter the required fields ⚠")
    }
}

function calculateSum(dob){
    dob= dob.replaceAll("-","")
    let sum=0;
    for(let i=0; i<dob.length; i++){
        sum+= Number(dob.charAt(i))
    }
    return sum;
}


function compareValues(sum, luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.innerText="Your Birthday is Lucky! \n\n🥳"
    }
    else{
        outputBox.innerText="Your Birthday is not lucky \n\n🙁"
    }
}


checkNumber.addEventListener('click', checkBirthdateIsLucky)
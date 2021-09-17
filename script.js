const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number")
const outputBox = document.querySelector("#output-box")
function checkBirthdateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(dob && luckyNumber.value>0){
        compareValues(sum, luckyNumber.value)
    }
    else if(luckyNumber.value<0){
        outputBox.innerText="Invalid Input: Negative Values not allowed";
        outputBox.style.color= 'black';

    }
    else{
        outputBox.innerText="Enter the required fields ⚠"
        outputBox.style.color= 'black';
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
        outputBox.style.color= 'crimson';
    }
    else{
        outputBox.innerText="Your Birthday is not lucky \n\n🙁"
        outputBox.style.color= 'crimson';
    }
}


checkNumber.addEventListener('click', checkBirthdateIsLucky)
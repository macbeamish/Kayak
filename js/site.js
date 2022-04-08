//the following code is my initial attempt at this challenge, This solution has each function only perform one small task.
// a more refined solution can be found below this solution that utilizes return objects

//the app currently calls this function, but this can be easily ammended by changing the "btnSubmit" button event listener on the app.html page
//to call for the getStringB function instead

// this functions retrieves the users input and calls all other relevant functions.
function getString(){

    //hides result table
    document.getElementById("alert").classList.add("invisible");

    //retrieves user input
    let userString = document.getElementById("userString").value;
    
    //calls function to clean up and validate user input
    let cString = cleanString(userString);

    //calls function to reverse the cleaned string
    let revString = reverseString(cString);

    //calls function to check if reversed string matches original string
    let isPal = checkPal(cString, revString);
    
    //calls function to display results
    displayResult(isPal, userString);

}



//removes special characters spaces and cases from the input string
function cleanString(userString){
    //removes upper case letters
    userString=userString.toLowerCase();
    let regex =/[^a-z0-9]/gi;
    userString = userString.replace(regex,"");
    return userString;
}
    
//reverse string
function reverseString(cString){
    let revString =[];
    //reverse string using for loop
    for (let index = (cString.length - 1); index >= 0; index--) {
        revString += cString[index];     
    }
    return revString;
}

//check if the reversed string matches the user input
function checkPal(cString, revString){
    if(cString==revString){return true;}
    else {return false;}
}



//displayresult of reversed string
function displayResult(isPal , userString){
    let resText ="";//message text
    let hText = "";//header text
    if(isPal){resText="is"; hText="Well Done!";} 
    else{resText="is not"; hText="Sorry";}
    document.getElementById("alertHeading").innerHTML = `${hText}`;
    document.getElementById("msg").innerHTML = `${userString} ${resText} a palindrome!`;
    document.getElementById("alert").classList.remove("invisible");

   
    }

// The below code is an alternative approach i developed found after further research that utilizes return Objects
function getStringB(){

    //hides result table
    document.getElementById("alert").classList.add("invisible");

    //retrieves user input
    let userString = document.getElementById("userString").value;
     
    //call function to check the string is palindrome
    let returnObj = checkForPalindrome(userString);

    //calls function to display results
    displayMessage(returnObj);

}
//function that checks for palindrome after cleaning up the string and returns a message response to the result as a return object
function checkForPalindrome(userString){
    userString=userString.toLowerCase();
    let regex =/[^a-z0-9]/gi;
    userString = userString.replace(regex,"");
     
    let returnObj ={};

    let revString =[];
    
    for (let index = (userString.length - 1); index >= 0; index--) {
        revString += userString[index];     
    }
    if(userString==revString){
        returnObj.msg = "Well done! You have entered a palindrome";
    }
    else{
        returnObj.msg = "Sorry you did not enter a palindrome";
    }
    returnObj.reversed = revString;
    
    return returnObj;
}    
function getStringB(){

    //hides result table
    document.getElementById("alert").classList.add("invisible");

    //retrieves user input
    let userString = document.getElementById("userString").value;
     
    //call function to check the string is palindrome
    let returnObj = checkForPalindrome(userString);

    //calls function to display results
    displayMessage(returnObj);

} 

function displayMessage(returnObj){
    document.getElementById("alertHeading").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML =` Your Phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}
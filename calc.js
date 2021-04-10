//Gets the history values
function getHistory(){
    return document.getElementById("history-value").innerText;
}

// Displays the history values
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}


// Gets the output values 
function getOutput() {
    return document.getElementById('output-value').innerText;
}

// Displays the  output values
function printOutput(num){
    // Validates to check for empty inputs
    if(num==""){
        //Submits an empty output
        document.getElementById("output-value").innerText=num;
    }
    else{
        //Formats the output 
        document.getElementById("output-value").innerText = getFormattedNumber(num);

    }
 
}

//Formats the output values or  it add commas to the numbering system
function getFormattedNumber(num){
     //check if number is a negative
    if(num=="-"){
        return "";
    }else{
        let n = Number(num);
        let value = n.toLocaleString("en");
        return value;
    }
}

// Reverses number format or removes comma
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

// Get the operator list
let operator = document.getElementsByClassName("operator");

//Loop through to get access to each operators
for(let i=0;i<operator.length;i++){
    //Give click event listener to operators
    operator[i].addEventListener('click', function(){
        //Clears boths history and output
      if(this.id=="clear"){
            printOutput("");
            printHistory("");
       }
        //Removes last single or backspaces numbers in input
      else if(this.id=="backspace"){
            // Stores the reversed output and convert to string
            let output=reverseNumberFormat(getOutput()).toString();
            if(output){
                // Subtr removes the last character
                output= output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else {
             //Stores the output and history values
             let output=getOutput();
             let history=getHistory();


             //Checks if output is empty and  history is not empty
             if (output =="" && history!=""){
                 //Check if the history is a number 
                 if(isNaN(history[history.length-1])){
                     //Removes or replaces the last value
                     history = history.substr(0,history.length-1);
                 }

             }

             //Checks if output or history is not empty
             if(output!="" || history!=""){
                 //condition?true:false
                 output= output==""? output :
                 //Reverses output as usual
                 output=reverseNumberFormat(output);
                 //Concatinates history with output
                 history=history+output;
                 //Checks if equal sign is clicked
                 if(this.id=="="){
                     //Evaluate history
                     let result = eval(history);
                     //Print history
                     printOutput(result);
                     //History is set to empty
                     printHistory("");
                 }
                 else{
                     //Other operators are added to history 
                     history = history+this.id;
                     //History is printed
                     printHistory(history);
                     //Output is set to empty
                     printOutput("");
                 }
             }


        }
      

    });
}

// Get the number list
let number = document.getElementsByClassName("number");

//Loop through to get access to each number
for (let i = 0;i<number.length;i++) {
    //Give click event listener to numbers
    number[i].addEventListener('click', function () {
       // Stores the reversed output
       let output=reverseNumberFormat(getOutput());
       //Check if the output is a number
       if(output!=NaN){
           //concatinate the output with the id
           output=output+this.id;
           printOutput(output);
       }

    });
}



// Get input-field and all buttons
const inputField = document.getElementById("input-field");
const buttons = document.querySelectorAll("button")


// Loop through buttons and add click events
buttons.forEach(button => {
    button.addEventListener("click", ()=> {
        const value=button.textContent;

        if(value === "C"){
                //clear input field
                inputField.value ="";
        } else if (value === "="){
            try {
                //Evaluate the expression
                inputField.value= eval(inputField.value)
         }catch {
            inputField.value = "Error"
           }
        }else {
            //Add number/operator to display
            inputField.value += value;
        }
    })
})

// Task 1: Sanitize your code
//A. ensure that after an evaluation, the input field should be cleared when another button with a number is clicked before the number clicked is displayed
//B. ensure that if the operation ends with a mathematical operator, when the equals sign is clicked, the last math operator should be removed before the operation is evaluated
//C. ensure that no mouse operator is displayed consectively and does not begin the opertion
//D. add 4 extra buttons, 1. a button that removes the value one after the other att every click 2. the decimal button 3.the double zero button 4. the percentage button

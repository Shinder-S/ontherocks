/**
 * 
    This page was used in the second installment to implement the requested captcha

    for this delivery no change was made, except the name to be more descriptive 

*/

/**
 * We start by creating a variable with a random number, using that library

with infoform the elements that the user enters are taken, through the id contact-form
 
I add an event that when listening to the click executes the function that checks if the fields are complete

Finally, the function that takes the random value created at the beginning is defined, 

and corroborates it with the one entered by the user (captcha) 
 */

let randomNumber = (Math.floor(Math.random()*100) +1);
document.getElementById('valueCaptcha').innerHTML =randomNumber;
let infoForm = document.getElementById('contact-form').elements;
document.getElementById('submit').addEventListener("click", checkingfields);


function checkingfields (){
        if (infoForm[0].value == '' || infoForm[1].value == '' || infoForm[2].value == '' ||infoForm[3].value == '' || infoForm[4].value == '') {
            return alert('Fields with * are required. Complete to submit.')
        }
        if (infoForm[0].value == '' || infoForm[1].value !== '' || infoForm[2].value !== '' || infoForm[3].value !== '' || infoForm[4].value !== ''){
            choose();
        }
}

function choose(){
    let number = document.getElementById('captcha').value;
    if (number == randomNumber) 
        alert("Captcha Ok");
    else{
        alert("Captcha erroneo");
    }
}
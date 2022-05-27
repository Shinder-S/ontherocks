let randomnumber = (Math.floor(Math.random()*100) +1);
document.getElementById('valueCaptcha').innerHTML =randomnumber;

let infoform = document.getElementById('contact-form').elements;
console.log(checkingfields);

let submit = document.getElementById('submit');

submit.addEventListener("click", checkingfields);


function checkingfields (){

        if (infoform[0].value == '' || infoform[1].value == '' || infoform[2].value == '' ||infoform[3].value == '' || infoform[4].value == '') {
            return alert('Fields with * are required. Complete to submit.')
        }
        if (infoform[0].value == '' || infoform[1].value !== '' || infoform[2].value !== '' || infoform[3].value !== '' || infoform[4].value !== ''){
            choose();
        }
}

function choose(){
    let number = document.getElementById('captcha').value;

    if (number == randomnumber) 
        window.confirm("Captcha Ok");
    else{
        window.confirm
        ("Captcha erroneo")
    }
}
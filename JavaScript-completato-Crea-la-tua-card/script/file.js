const form = document.querySelector("form");
const nome = document.querySelector("input");
const email = document.querySelector("#email");
const telefono = document.querySelector("#tel");
const checkbox = document.querySelector("#privacy");
const erroreCheckbox=document.querySelector('label').nextElementSibling;

const container_form = document.querySelector("div");
const container_card = document.querySelector("#card");

const regexNome = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexTel = /^3[0-9]{8,9}$/;

const erroreNome = "Nome inesistente"
const erroreEmail = "Email sbagliata"
const erroreTelefono = "Telefono sbagliato"

form.addEventListener("submit", gestisciForm);

//Funzione che serve a bloccare il submit
function gestisciForm(e){
    e.preventDefault();
    console.log(e);

    //form.submit();

    controlloDati(nome, regexNome, erroreNome)
    controlloDati(email, regexEmail, erroreEmail)
    controlloDati(telefono, regexTel, erroreTelefono)
    controlloDati(privacy, undefined, "Devi accettare le condizioni")

}

//Funzione che serve a validare i dati
function controlloDati(input, regex, msg){

    if(input.getAttribute("id")=="privacy"){
        console.log(regex);
        if(input.checked == false){
            erroreCheckbox.innerHTML = msg
        }else{
            erroreCheckbox.innerHTML = "";
        }
    }else{
        console.log(regex)
        if(regex.test(input.value.trim())==false){
            input.nextElementSibling.innerHTML = msg;
        }else{
            input.nextElementSibling.innerHTML = "";
        }
    }

}

//La proprietà nextElementSibling permette di riferirsi al fratello successivo (in HTML) di un determinato tag
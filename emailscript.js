const virhe = document.querySelector('.virhe')
const nimi = document.querySelector('#nimi');
const email = document.querySelector('#email');
const viesti = document.querySelector('#viesti');
const emailnappi = document.querySelector('.lahetanappi');
emailnappi.addEventListener('click', e => {
  e.preventDefault();
  sendJSON();
});

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp1?code=lWOELqiU07AqsBviOQYzuNIrQP7xoV7NV7C5W2ctgjIRcf7nXE2biw==";

  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function (){
    if(xhr.readyState === 4 && xhr.status === 200){
    console.log("Valmis, yhteys toimii.");
  }
};
var data = JSON.stringify({
  "EmailMsg": viesti, /*kirjoittaa sisällön*/
  "EmailAddress": email, /*  Viestin kirjoittajan osoite*/
  "EmailTo": "Samu.Ojala@edu.salpaus.fi", /*Sivunpitäjän osoite*/
  "EmailName": nimi /*Nimi-kentän sisältö*/
});

}if(viesti.value ===''|| email.value ===''||nimi.value ===''){
virhe.style.background='#ff0000';
virhe.style.border= 'solid 2px black';

}else{
  xhr.send(data);
}
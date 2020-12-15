const virhe = document.querySelector('.virhe')
const nimi = document.querySelector('#nimi');
const email = document.querySelector('#email');
const viesti = document.querySelector('#viesti');
const emailnappi = document.querySelector('.lahetanappi');
const virheteksti = document.querySelector('#virheteksti');
emailnappi.addEventListener('click', e => {
  e.preventDefault();
  sendJSON();
  virhetapahtuma();
});

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp2?code=PnWhScmEcspN8Fy7eYKnIZA37AFgUZ0fMQ1OpXOJ6dtBPBGNXAMIqQ==";

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
  "EmailTo": "Samu.Ojala", /*Sivunpitäjän osoite*/
  "EmailName": nimi +" "+ email /*Nimi-kentän sisältö*/
});

};

function virhetapahtuma(){
if(viesti.value ===''|| email.value ===''||nimi.value ===''){
virhe.style.background='#ff0000';
virhe.style.border= 'solid 2px black';
virheteksti.innerHTML=('!!!!     Täytä kaikki kentät, Kiitos.     !!!!')
setTimeOut(function(){virhe.style.background = 'white'},555550);
}else{
  xhr.send(data);
  emailnappi.disabled = true;
  setTimeOut(function(){emailnappi.disabled = false;},55555000);
  virheteksti.innerHTML = 'Kiitos!';
}
};
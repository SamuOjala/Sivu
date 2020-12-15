const virhe = document.querySelector('.virhe')
const nimi = document.querySelector('#nimi');
const email = document.querySelector('#email');
const viesti = document.querySelector('#viesti');
const emailnappi = document.querySelector('.lahetanappi');
const virheteksti = document.querySelector('#virheteksti');
emailnappi.addEventListener('click', e => {
  e.preventDefault();
  sendJSON();
});

function sendJSON(){
  if(viesti.value ===''|| email.value ===''||nimi.value ===''){
    virhe.style.background ='#ff0000';
    virhe.style.border ='solid 2px black';
    virheteksti.innerHTML=('!!!!     Täytä kaikki kentät, Kiitos.     !!!!')
    setTimeout(()=> virhe.style.background = 'rgb(160, 190, 190)',3000);
    setTimeout(()=> virhe.style.border = '0px',3000);
    setTimeout(()=> virhe.innerHTML = '', 3000);
  }else{
    let xhr = new XMLHttpRequest();
    let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp2?code=PnWhScmEcspN8Fy7eYKnIZA37AFgUZ0fMQ1OpXOJ6dtBPBGNXAMIqQ==";

    xhr.open("POST", url, true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status === 200){
        console.log("valmis, yhteys toimii");
      }
    };
    const nimi = document.querySelector('#nimi').value;
    const email = document.querySelector('#email').value;
    console.log("nimikentän sisältö: " + nimi);
    const viesti = document.querySelector('#viesti').value;
    console.log("viestikentän sisältö: " + viesti);
    var data = JSON.stringify({
      "EmailMsg": viesti,  //Kirjoittaa sisällön 
      "EmailTo": "samu.ojala", //oma sähköpostisi!!!!
      "EmailName": nimi//Nimi-kentän sisältö
    });
    xhr.send(data);
  }
}


function virhetapahtuma(){
if(viesti.value ===''|| email.value ===''||nimi.value ===''){
virhe.style.background ='#ff0000';
virhe.style.border ='solid 2px black';
virheteksti.innerHTML=('!!!!     Täytä kaikki kentät, Kiitos.     !!!!')
setTimeout(()=> virhe.style.background = 'rgb(160, 190, 190)',3000);
setTimeout(()=> virhe.style.border = '0px',3000);
setTimeout(()=> virhe.innerHTML = '', 3000);
}else{
  xhr.send(data);
  sendJSON();
  emailnappi.disabled = true;
  setTimeout(function(){emailnappi.disabled = false;},55555000);
  virheteksti.innerHTML = 'Kiitos!';
}
};
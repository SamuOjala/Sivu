if(document.querySelector('#AsetusLogo') != null){
  const asetuksetLogo = document.querySelector('#AsetusLogo');
  const asetukset = document.querySelector('.Asetukset');
  const asetusOtsikko = document.querySelector('#asetusotsikko');

  asetuksetLogo.addEventListener('click', e =>{
    e.preventDefault();
    
/*
 const teema = document.querySelector('input[name="theme"]:checked').value;
  if(teema == 'tumma'){
    document.body.style.background = 'black';
  }
  else{
    document.body.style.background = 'white';
  }*/

  const teema2 = document.querySelector('input[name="theme"]:checked').id;
    if(teema2== 'tumma'){
      document.body.style.background = 'black';
      document.body.style.color = 'white';
    }else if(teema2 == 'vaalea'){
      document.body.style.background = 'white';
      document.body.style.color = 'black';
    }
    else{
      document.body.style.background = '#6d8bcc';
      document.body.style.color = 'black';
    }
    
  });
}


if(document.querySelector('.yhteysnappi') != null)
{
  const etuSisalto = document.querySelector('#etu');
  const sukuSisalto = document.querySelector('#suku');
  const sahkoSisalto = document.querySelector('#sahko');
  const virheilmo = document.querySelector('#virhetila');
  const nappiYhteys = document.querySelector('.yhteysnappi');

  nappiYhteys.addEventListener('click', e => {
    e.preventDefault();
    if(etuSisalto.value ==='' || sukuSisalto.value ==='' || sahkoSisalto.value ==='' ){
      virheilmo.classList.add('virheilmo')
      virheilmo.innerHTML = 'Täytä kentät pakolliset kentät!';
      nappula.style.background = 'red';
      nappula.value= 'Lisää tieto!';
      setTimeout(()=> virheilmo.classList.remove('virheilmo'), 3000);
      setTimeout(()=> nappiyhteys.style.background = '#b45b07', 3000);
      setTimeout(()=> nappiyhteys.value='Lähetä.', 3000);
    }else{

      const li = document.createElement('li');
      

      etuSisalto.value = '';
      sukuSisalto.value= '';
      sahkoSisalto.value='';
    }
  });
}
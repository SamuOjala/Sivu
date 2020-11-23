
function iat(ekaNumero, tokaNumero, kolmasNumero, neljasNumero, viidesNumero){
  return(ekaNumero + tokaNumero + kolmasNumero + neljasNumero + viidesNumero)
}
const nimi = 'Samu';
const ika = 16;
const opiskelija = true;

console.log(`Hei surffailija, olen ${nimi} ja olen ${ika} vuotias.`)
console.log('Opiskelija? '+opiskelija)


const ystavani = ['Wubbi Swedu', 'Jesse Pulmu', 'Nacho Saurusz', 'Minä Siepari'];
console.log('1. Ystäväni '+ystavani[0].split(' ')[0]);
console.log('2. Ystäväni '+ystavani[1].split(' ')[0]);
console.log('3. Ystäväni '+ystavani[2].split(' ')[0]);
console.log('4. Ystäväni '+ystavani[3].split(' ')[0]);
const perhe= [
  {
    id: 1,
    nimi: 'Isä',
    ika: 40,
    taysiikainen:true
  },
  {
    id: 2,
    nimi: 'Äiti',
    ika: 40,
    taysiikainen:true
  },
  {
    id: 3,
    nimi: 'Sisko yksi',
    ika: 14,
    taysiikainen:false
  },
  {
    id: 4,
    nimi: 'Sisko kaksi',
    ika: 11,
    taysiikainen:false
  }
];


const perheTaysi = perhe.filter(function(perhe){
  return perhe.taysiikainen === true;
}).map(function(perhe){
  console.log(perhe.nimi+' on täysi-ikäinen');
});
const perheAla = perhe.filter(function(perhe){
  return perhe.taysiikainen === false;
}).map(function(perhe){
  console.log(perhe.nimi+' on alaikäinen');
});

console.log('Perheeni jäsenten ikien summa on: '+ iat(11, 14, 16, 40, 40 ));
/*
const asetuksetLogo = document.querySelector('#AsetusLogo');
const asetukset = document.querySelector('.Asetukset');
const asetusOtsikko = document.querySelector('#asetusotsikko');

asetuksetLogo.addEventListener('click', e =>{
  asetukset.classList.add('asetukset');
  asetukset.innerHTML('<h1>Asetuksia teemojen vaihtamiseen.</h1>')
  asetukset.style.background = 'White';
  asetukset.style.border = '5px double black';
});*/

const nappula = document.querySelector('#nappula');
const etuSisalto = document.querySelector('#etu');
const sukuSisalto = document.querySelector('#suku');
const sahkoSisalto = document.querySelector('#sahko')
const virheilmo = document.querySelector('#virhetila');


nappula.addEventListener('click', e =>{
  e.preventDefault();

  if(etuSisalto.value ==='' || sukuSisalto.value ==='' || sahkoSisalto.value ==='' ){
    virheilmo.classList.add('virheilmo')
    virheilmo.innerHTML = 'Täytä kentät pakolliset kentät!';
    nappula.style.background = 'red';
    nappula.value= 'Lisää tieto!';
    setTimeout(()=> virheilmo.classList.remove('virheilmo'), 3000);
    setTimeout(()=> nappula.style.background = '#b45b07', 3000);
    setTimeout(()=> nappula.value='Lähetä.', 3000);
  }else{

    const li = document.createElement('li');

    li.appendChild(document.createTextNode(`Kiitos!`));
    virheilmo.appendChild(li);

    etuSisalto.value = '';
    sukuSisalto.value= '';
    sahkoSisalto.value='';
  }
});
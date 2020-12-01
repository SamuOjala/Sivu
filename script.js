//alert('aRE U SuRE? Bcz Im not.');
console.log('Wörkkiii');

//Muuttujat: var let tai const;

function laskutehtava(ekaNumero, tokaNumero){
  return(ekaNumero + tokaNumero)
}

let ika=25;
ika = ika+1;

console.log(ika);

const pii=3.14;

console.log('Piin likiarvo: ' + pii)

const etunimi='Samu'; //string
const sukunimi='Ojala'; //string
const syntymavuosi=2004; //integer, eli kokonaisluku
const hollolalainen=true; //boolean
let maarittelematon; //undefinied

console.log("Syntymävuoden tyyppi: "+ typeof syntymavuosi);
console.log("Nimen tyyppi: " + typeof etunimi);
console.log("Hollolalaisuuden tyyppi: " + typeof hollolalainen);

//template string;
const henkilotieto= `Nimeni on ` + etunimi+' '+sukunimi+' ja syntymävuoteni on '+syntymavuosi;
//console.log(henkilotieto)

console.log(`Nimeni on ${etunimi} ${sukunimi} ja syntymävuoteni on ${syntymavuosi}`);
console.log(`Henkilötiedon pituus on: ${henkilotieto.length}`);

console.log(henkilotieto.toUpperCase());

console.log(henkilotieto.substring(10, 14));

console.log(henkilotieto.substring(0, 9).toUpperCase())

console.log(henkilotieto.split(' '))

const autoja=['Hyundai', 'Toyota', 'Volvo', 'Opel'];
autoja[4]='BMW';
autoja.push('Saab');
autoja.unshift('Mercedes-benz');
console.log(autoja);

const opiskelija= {
  id: 01,
  etunimi: 'Samu',
  sukunimi: 'Ojala',
  syntymavuosi: 2004,
  sahkoposti: 'Samuojala@edu.salpaus.fi',
  osoite: {
    katu: 'Stählberginkatu 4',
    kunta: 'lahti'
  }
};
console.log(opiskelija);

const laksyt = [
  {
    id: 1,
    tehtava: 'Ohjelmointi, HTML',
    tehty: true
  },
  {
    id: 2,
    tehtava: 'Ohjelmointi, CSS',
    tehty:true
  },
  {
    id: 3,
    tehtava: 'Ohjelmointi, Javascript',
    tehty: false
  }
];

for(let i=0; i<= 10; i++){
  console.log(`For loopin iteraatioluku on: ${i}`);
}
let i = 0;
while(i<=10){
  i++;
  console.log(`While loopin iteraatioluku on: ${i}`);
};
for(let i=0; i<laksyt.length; i++){
  console.log(laksyt[i].tehtava);
};
const laksyTehtava = laksyt.map(function(laksy){
  return(laksy.tehtava);
});
console.log(laksyTehtava);

const tehtavaTehty = laksyt.filter(function(laksy){
  return laksyt.tehty === false;
}).map(function(laksy){
  return laksyt.tehtava;
});

console.log(tehtavaTehty);


const numero = 5;
const nimi = 'Jorma';
if(numero < 18 || nimi === 'Jorma'){
  console.log('Olet liian nuori tai Jorma.');
}else if(numero === 18){
  console.log('Just ja just pääsit.');
}
else{
  console.log('Olet tervetullut.');
}

const access = numero > 18 ? 'granted' : 'denied';
console.log(access);

console.log(laskutehtava(1, 5));

////////////////////////////////////////////////////////////////////////////////
const kurssinOsat = document.querySelectorAll('.sisalto');

kurssinOsat.forEach((osa)=>console.log(osa));

const ul = document.querySelector('.kurssi');
const kurssinappi = document.querySelector('.kurssinappi');
const nimiSisalto = document.querySelector('#nimi');
const asiaSisalto = document.querySelector('#tieto');
const virhe = document.querySelector('.virheilmoitus');
const viesti = document.querySelector('#tiedot');

kurssinappi.addEventListener('click', e =>{
  e.preventDefault();

  if(nimiSisalto.value === '' || asiaSisalto.value === ''){
    virhe.classList.add('virhe')
    virhe.innerHTML = 'Täytä kentät sotilas!';
    kurssinappi.style.background = 'red';
    kurssinappi.value= 'Virhe! En lisännyt tietoa.';
    setTimeout(()=> virhe.classList.remove('virhe'), 3000);
    setTimeout(()=> kurssinappi.style.background = '#444444', 3000);
    setTimeout(()=> kurssinappi.value='Lisää tieto!', 3000);
  }else{

    const li = document.createElement('li');

    li.appendChild(document.createTextNode(`${nimiSisalto.value} : ${asiaSisalto.value}`));

    viesti.appendChild(li);

    nimiSisalto.value = '';
    asiaSisalto.value= '';
  }
});

const merkitseValmiit = document.querySelector('.merkinta');

merkitseValmiit.addEventListener('click', e => {
  e.preventDefault();
  if(document.querySelector('#tehta').checked){
  ul.children[0].innerHTML = '<input type="checkbox" id ="tehta" checked>HTML tunnit pidetty.';
  }else{
    ul.children[0].innerHTML = '<input type="checkbox" id ="tehta">HTML tunteja ei ole pidetty.';
  }
  if(document.querySelector('#tehtb').checked){
  ul.children[1].innerHTML = '<input type="checkbox" id ="tehtb" checked>CSS tunnit pidetty.';
  }else{
    ul.children[1].innerHTML = '<input type="checkbox" id ="tehtb">CSS tunteja ei ole pidetty.';
  }
  if(document.querySelector('#tehtc').checked){
  ul.children[2].innerHTML = '<input type="checkbox" id ="tehtc" checked>JavaScript tunnit pidetty.';
  }else{
    ul.children[2].innerHTML = '<input type="checkbox" id ="tehtc" >Java Script tunteja ei ole pidetty.';
  }
  if(document.querySelector('#tehtd').checked){
  ul.children[3].innerHTML = '<input type="checkbox" id ="tehtd" checked>CI/CD tunnit pidetty.';
  }else{
    ul.children[3].innerHTML = '<input type="checkbox" id ="tehtd" >CI/CD tunteja ei ole pidetty.';
  }
});
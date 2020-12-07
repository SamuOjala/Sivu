const taulukko = document.querySelector('.taulukko');
const th1 = document.querySelector('#th1')
const th2 = document.querySelector('#th2')

var getJSON = function(url, callback){

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function(){
    var status = xhr.status;

    if (status == 200){
      callback(null, xhr.response);
    }else{
      callback(status);
    }
  };
  xhr.send();
};
getJSON('https://api.apify.com/v2/datasets/BDEAOLx0DzEW91s5L/items?format=json&clean=1', function(err, data){

let taulukko = '<table style="border:3px solid black">'
const historia = data.map(function(paiva){

  if(paiva.confirmedCases != undefined){
    taulukko = taulukko + `<tr><td>${paiva.lastUpdatedAtApify.split('T')[0]}</td><td>Confirmed</td></td>${paiva.confirmedCases}</td></tr>`;

  }else if(paiva.testedCases != undefined){
    taulukko = taulukko + `<tr><td>${paiva.lastUpdatedAtApify.split('T')[0]}</td><td>Tested</td><td>${paiva.testedCases}</td></tr>`;

  }else if(paiva.infected != undefined){
    taulukko = taulukko + `<tr><td>${paiva.lastUpdatedAtApify}</td><td>Infected</td><td>${paiva.infected}</td></tr>`;
    
  }else{
    taulukko = taulukko + `<tr><td>${paiva.lastUpdatedAtApify.split('T')[0]}</td><td>Ei dataa</td></tr>`;
  }

});
taulukko = taulukko + `</table>`
document.body.innerHTML = taulukko;
});
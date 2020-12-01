const uutiset = document.querySelector('.news');
const p1 = document.querySelector('#p1');

var getJSON = function(url, callback) {

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
getJSON('https://api.apify.com/v2/key-value-stores/jEFt5tgCTMfjJpLD3/records/LATEST?disableRedirect=true', function(err, data){
  if(err != null){
    console.error(err);
  }else{
    console.log(`${data.infected}`);
    const pvm = (`${data.lastUpdatedAtApify}`.split('T', 1));
    const tartunnat = (`${data.infected}`)
    const testatut = (`${data.tested}`)
    const kuolleet = (`${data.deaths}`)
    p1.innerHTML = (pvm);
    p2.innerHTML = ('Testattuja: ' + testatut);
    p3.innerHTML = ('Tartutettuja: ' + tartunnat);
    p4.innerHTML = ('Kuolleita: ' + kuolleet);
    p5.innerHTML = ('<a href="https://api.apify.com/v2/datasets/BDEAOLx0DzEW91s5L/items?format=json&clean=1">Historiaa</a>');
    p6.innerHTML = ('<a href="taulukko.html">Taulukko marraskuun luvuista.</a>');
  }
});
const taulukko = document.querySelector('.taulukko')

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
getJSON('https://api.apify.com/v2/datasets/BDEAOLx0DzEW91s5L/items?format=json&clean=1', function(err, data){
  if(err != null){
    console.error(err);
  }else{
    th1.innerHTML=('Päivämäärä')
  }
});
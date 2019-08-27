

var coinInserted = false;
var dictConversion = {};
//Costa Rica
dictConversion.cr_usa = 0.0018;
dictConversion.cr_europe = 0.0016;
dictConversion.cr_mexico= 0.035;
dictConversion.cr_japan = 0.19;
dictConversion.cr_arabia = 0.0066;
dictConversion.cr_uk = 0.0014;
dictConversion.cr_india = 0.0018;
dictConversion.cr_russia= 0.12 ;
dictConversion.cr_guatemala= 0.014 ;

//USA
dictConversion.usa_cr = 567.08;
dictConversion.usa_europe = 0.90 ;
dictConversion.usa_mexico= 19.94;
dictConversion.usa_japan = 106.12 ;
dictConversion.usa_arabia = 3.75 ;
dictConversion.usa_uk = 0.82 ;
dictConversion.usa_india = 72.02 ;
dictConversion.usa_russia= 66.09  ;
dictConversion.usa_guatemala= 7.68  ;

//europe
dictConversion.europe_cr = 630.66;
dictConversion.europe_usa = 1.11  ;
dictConversion.europe_mexico= 22.14;
dictConversion.europe_japan = 117.52  ;
dictConversion.europe_arabia = 4.16 ;
dictConversion.europe_uk = 0.91  ;
dictConversion.europe_india = 79.97 ;
dictConversion.europe_russia= 73.39  ;
dictConversion.europe_guatemala= 8.54   ;

//mexico
dictConversion.mexico_cr = 28.48 ;
dictConversion.mexico_usa = 0.050   ;
dictConversion.mexico_europe= 0.045 ;
dictConversion.mexico_japan = 5.30 ;
dictConversion.mexico_arabia = 0.19;
dictConversion.mexico_uk = 0.041 ;
dictConversion.mexico_india = 3.60  ;
dictConversion.mexico_russia= 3.31  ;
dictConversion.mexico_guatemala= 0.39 ;

//japon
dictConversion.japon_cr = 5.37  ;
dictConversion.japon_usa = 0.0095 ;
dictConversion.japon_europe= 0.0085 ;
dictConversion.japon_mexico = 0.19 ;
dictConversion.japon_arabia = 0.035 ;
dictConversion.japon_uk = 0.0077;
dictConversion.japon_india = 0.68;
dictConversion.japon_russia= 0.62;
dictConversion.japon_guatemala = 0.073 ;

//arabia
dictConversion.arabia_cr = 151.45  ;
dictConversion.arabia_usa = 0.27 ;
dictConversion.arabia_europe= 0.24;
dictConversion.arabia_mexico = 5.32  ;
dictConversion.arabia_japon = 28.20 ;
dictConversion.arabia_uk = 0.22  ;
dictConversion.arabia_india = 19.14;
dictConversion.arabia_russia= 17.63 ;
dictConversion.arabia_guatemala = 2.05  ;

//UK
dictConversion.uk_cr = 693.90  ;
dictConversion.uk_usa = 1.22  ;
dictConversion.uk_europe= 1.10 ;
dictConversion.uk_mexico = 24.37    ;
dictConversion.uk_japon = 129.17;
dictConversion.uk_arabia = 4.58  ;
dictConversion.uk_india = 87.71 ;
dictConversion.uk_russia= 80.75  ;
dictConversion.uk_guatemala = 9.40  ;

//india
dictConversion.india_cr = 7.92  ;
dictConversion.india_usa = 0.014  ;
dictConversion.india_europe= 0.013 ;
dictConversion.india_mexico = 0.28     ;
dictConversion.india_japon = 1.47 ;
dictConversion.india_arabia = 0.052;
dictConversion.india_uk = 0.011  ;
dictConversion.india_russia= 0.92  ;
dictConversion.india_guatemala = 0.11 ;

//russia
dictConversion.russia_cr = 8.59 ;
dictConversion.russia_usa = 0.015  ;
dictConversion.russia_europe= 0.014 ;
dictConversion.russia_mexico = 0.30 ;
dictConversion.russia_japon = 1.60 ;
dictConversion.russia_arabia = 0.057 ;
dictConversion.russia_uk = 0.012 ;
dictConversion.russia_india = 1.09 ;
dictConversion.russia_guatemala = 0.12  ;

//guatemala
dictConversion.guatemala_cr = 73.75 ;
dictConversion.guatemala_usa = 0.13  ;
dictConversion.guatemala_europe= 0.12  ;
dictConversion.guatemala_mexico = 2.59  ;
dictConversion.guatemala_japon = 13.75  ;
dictConversion.guatemala_arabia = 0.49  ;
dictConversion.guatemala_uk = 0.11  ;
dictConversion.guatemala_india = 9.33 ;
dictConversion.guatemala_russia = 8.60  ;

function onChangeInput(){

  if(coinInserted){
    alert("Ya se ha ingresado un valor a convertir");
    this.value = "";
  }
  else{
    coinInserted = true;

  }
}
function onClickStar(){

  console.log(this.isOn);
  if(this.isOn){
    this.src="starOff.png"
    this.isOn = false;
  }
  else{

    this.src="star.png"
    this.isOn = true;
  }
}

function setIsOnFlag(){
  var coins = document.getElementsByClassName('coin');
  for(let item of coins){
    item.children[5].isOn = false;
  }
}

function onClickConvert(){

  var coins = document.getElementsByClassName('coin');
  var selectedCoins = [];
  var inputCoin = '';
  var inputCoinValue = '';

  for(let item of coins){
    if(item.children[5].isOn){
      selectedCoins.push(item);
    }
    if(item.children[4].value != ""){
      inputCoin = item;
      inputCoinValue = parseInt(item.children[4].value);
    }
  }

  selectedCoins.forEach(function(coin){

    if(inputCoin.id != coin.id){

      var key = inputCoin.id + "_" + coin.id;
      alert(key);
      var result = convert(key,inputCoinValue);
      console.log(coin.children);
      coin.children[6].innerHTML = result.toString();
    }

  });
  //console.log(selectedCoins);
}

function onClickClean(){

  coinInserted = false;
  var coins = document.getElementsByClassName("coin");
  for(let item of coins){
    item.children[4].value = "";
    item.children[6].innerHTML = "Resultado";
  }


}


function convert(key,inputValue){

  var result = dictConversion[key] * inputValue;
  return result;
}

window.onload = function(){
  setIsOnFlag();

}

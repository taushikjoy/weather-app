window.addEventListener('load' , () => {

  let bodyy = document.querySelector('body') 
  let temparature = document.querySelector('.temp-degee');
  let location = document.querySelector('.location-timezone');
  let description = document.querySelector('.temp-description');
  let searchValue = document.querySelector('.search-value');
  let searchButton = document.querySelector('.search-button');

  let city ;

  searchButton.addEventListener('click' , function () {
    city = searchValue.value; 
  //  })

  const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d968d0bf8e4b382411e3846f6e87d970` ;

  fetch(api).then(
    response => {
      return response.json();
    }
  ).then(data => {

    //console.log(data);

    const {temp} = data.main;

    const {name} = data;


    temparature.textContent = temp - 273.15;

    location.textContent = name;

  if (temparature.textContent <32 && temparature.textContent >25 ) {

    description.textContent = "its a nice weather";
    bodyy.style.background =  linearGradient(rgb(47,158,1), rgb(48,62,190)) ;
    

  }
  else if(temparature.textContent >32 ) {

    description.textContent = "its hot";

  }

  //  searchButton.addEventListener('click' , function () {
  //   city == searchValue.textContent; 
  //  })



    //console.log(temp);

  })

})
}) 



window.addEventListener('load' , () => {

  let temparature = document.querySelector('.temp-degee');
  let location = document.querySelector('.location-timezone');
  let description = document.querySelector('.temp-description');

  let city = 'dhaka' ;

  const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d968d0bf8e4b382411e3846f6e87d970` ;

  fetch(api).then(
    response => {
      return response.json();
    }
  ).then(data => {

    //console.log(data);

    const {temp} = data.main;

    const {name} = data;


    temparature.textContent = temp/10;

    location.textContent = name;

  if (temparature.textContent <32 && temparature.textContent >25 ) {

    description.textContent = "its a nice weather";

  }
  else if(temparature.textContent >32 ) {

    description.textContent = "its hot";

  }



    //console.log(temp);

  })


}) 



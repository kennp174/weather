var cities;
var city;

function setup() {

  cities = createSelect();
  cities.option('New York,NY');
  cities.option('Miami, FL');
  //Change these cities and/or add your own

  cities.changed(loadCity);
  loadCity();

  createCanvas(400,400);

}

function draw() {
  if(city){ //Your drawing should go inside this if statement

    background("grey");
    text(city.name,50,50); //feel free to delete this


  }
}

//These functions below load the weather data and save it to the city variable.
//There is no need to edit these functions.
function loadCity(){
  var url = 'http://api.openweathermap.org/data/2.5/weather?q='+cities.value()+
   '&APPID=f02124924447c73bc1d1626b1bee5f45&units=imperial';//set units=metric if you prefer Celcius
  loadJSON(url,setCity);
}
function setCity(data){
  city = data;
}

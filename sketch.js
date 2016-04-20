var cities;
var city;
var cloud;
var rain;
var mist;
var temp;
var windy;
//var circleX =0;





function preload(){
  cloud = loadImage('img/clouds.jpg');
  rain = loadImage('img/rain.jpg');
  clear = loadImage('img/clearsky.jpg');
  windy = loadImage('img/windy.png');
}


function setup() {

  cities = createSelect();
  cities.option('New York,NY');
  cities.option('Dallas, TX');
  cities.option('Charleston, SC');
  cities.option('Seattle, WA');
  cities.option('Cincinnatti, OH');


  //Change these cities and/or add your own

  cities.changed(loadCity);
  loadCity();

  createCanvas(1000,800);

}

function draw() {
  //fill("red");
  //ellipse (circleX, 100,50,50);
  //circleX = circleX +5;
  if(city){
    background("red");
    if (city.weather[0].main == "Clear"){
    image (clear,0, 0, background.width, background.height)

    } else if (city.weather[0].main == "Clouds"){
      image (cloud, 0, 0, background.width, background.height)
    } else if (city.weather[0].main == "Rain"){
      image (rain, 0, 0, background.width, background.height)
    } else if (city.weather[0].main == "Windy"){
      background("blue");
      image (windy, mouseX, mouseY, 200, 200);
    }
      //else if (circleX >= 1000) {
      //circleX=0;
      //}




    fill(floor(city.main.temp*3), floor(city.main.temp*3),0);
    noStroke();
    ellipse(900,100,150,150);



    var sunset = new Date(city.sys.sunset*1000);
    textSize(50);
    fill('red');
    text(sunset.toLocaleTimeString(),325,700);
    textSize(30);
    fill("white");
    text(city.weather[0].main,20,40);

    var temp = city.main.temp;
    fill ("blue");
    textSize(40);
    text(temp,850,80,200,200);

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

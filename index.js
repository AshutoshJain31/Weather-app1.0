// Current weather
const button = document.querySelector(".nav > button");
const input = document.querySelector(".nav > input");
const Disc = document.querySelector(".dicription>h3");
const time = document.querySelector(".weather>:nth-child(2)");
const sky = document.querySelector(".weather>:nth-child(3)");
const temp = document.querySelector(".weather>:nth-child(4)");
const htemp = document.querySelector(".weather>:nth-child(5)");
const wtype = document.querySelector(".weather>:nth-child(6)");
const wimg = document.querySelector(".weather>img");
// const wbimg=document.body.style.backgroundImage="url('./asserts/FireWatch-WeatherDesk-Pack-master/night-normal.jpg')";
// console.log(wbimg);
// Location
const iname = document.querySelector(".location>:nth-child(1)");
const region = document.querySelector(".location>:nth-child(2)");
const country = document.querySelector(".location>:nth-child(3)");
const lat = document.querySelector(".location>:nth-child(4)");
const long = document.querySelector(".location>:nth-child(5)");
const srise = document.querySelector(".location>:nth-child(6)");
const sset = document.querySelector(".location>:nth-child(7)");
console.log(srise);
// Air
const air = document.querySelector(".Air>:nth-child(2)");
// Wind
const wind = document.querySelector(".Wind>:nth-child(2)");
// Humidity
const Humidity = document.querySelector(".Humidity>:nth-child(2)");
// Visibility
const visibility = document.querySelector(".Visibility>:nth-child(2)");
// Pressure
const pressure = document.querySelector(".Pressure>:nth-child(2)");
// Dewpoint
const dewpoint = document.querySelector(".DewPoint>:nth-child(2)");
console.log(dewpoint);

// today
const timg = document.querySelector(".Today>img");
const thtemp = document.querySelector(".Today>:nth-child(3)");
const tltemp = document.querySelector(".Today>:nth-child(4)");

// day1
const day1 = document.querySelector(".day1>:nth-child(1)");
const d1img = document.querySelector(".day1>img");
const d1ltemp = document.querySelector(".day1>:nth-child(3)");
const d1htemp = document.querySelector(".day1>:nth-child(4)");
// day2
const day2 = document.querySelector(".day2>:nth-child(1)");
const d2img = document.querySelector(".day2>img");
const d2ltemp = document.querySelector(".day2>:nth-child(3)");
const d2htemp = document.querySelector(".day2>:nth-child(4)");
// day3
const day3 = document.querySelector(".day3>:nth-child(1)");
const d3img = document.querySelector(".day3>img");
const d3ltemp = document.querySelector(".day3>:nth-child(3)");
const d3htemp = document.querySelector(".day3>:nth-child(4)");
// day4
const day4 = document.querySelector(".day4>:nth-child(1)");
const d4img = document.querySelector(".day4>img");
const d4ltemp = document.querySelector(".day4>:nth-child(3)");
const d4htemp = document.querySelector(".day4>:nth-child(4)");
// day5
const day5 = document.querySelector(".day5>:nth-child(1)");
const d5img = document.querySelector(".day5>img");
const d5ltemp = document.querySelector(".day5>:nth-child(3)");
const d5htemp = document.querySelector(".day5>:nth-child(4)");

const getdata = async (event) => {
  event.preventDefault();
  if (!input.value) {
    alert("Please enter the City");
    return;
  }
  const city = input.value;
  console.log(city);

  const fetchdata = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=015a8c94a56847fd99c152559231903&q=${city}`
  );
  const forecastdata = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=015a8c94a56847fd99c152559231903&q=${city}&days=6`
  );

  const data = await fetchdata.json();
  const odata = data;
  const forcast = await forecastdata.json();
  console.log(odata);   
  try {
    if ((odata.location.name = city)) {
    }
  } catch (error) {
    console.log(error);
    alert("City Not Found");
  }
  // Weather
  wimg.src = odata.current.condition.icon;
  Disc.innerHTML =
    odata.location.name +
    "," +
    odata.location.region +
    "," +
    odata.location.country;
  time.innerHTML = odata.location.localtime;
  sky.innerHTML =
    "he skies will be mostly " +
    odata.current.condition.text +
    " The Low Will be " +
    odata.current.feelslike_c;
  temp.innerHTML = `${odata.current.temp_c}${"<sup>o</sup>"}C`;
  htemp.innerHTML = `${"Feels Like "}${
    odata.current.feelslike_c
  }${"<sup>o</sup>"}C`;
  wtype.innerHTML = odata.current.condition.text;
  // Location
  iname.innerHTML = "Name: " + odata.location.name;
  region.innerHTML = "Region: " + odata.location.region;
  country.innerHTML = "Country: " + odata.location.country;
  lat.innerHTML = "Latitude: " + odata.location.lat;
  long.innerHTML = "Longitude: " + forcast.location.lon;
  srise.innerHTML = "Sunrise: " + forcast.forecast.forecastday[1].astro.sunrise;
  sset.innerHTML = "Sunset: " + forcast.forecast.forecastday[1].astro.sunset;
  // Air
  air.innerHTML = odata.current.gust_mph;
  // Wind
  wind.innerHTML = odata.current.wind_kph + "Km/h";
  // Humidity
  Humidity.innerHTML = odata.current.humidity + "%";
  // Visibility
  visibility.innerHTML = odata.current.vis_km + "Km";
  // Pressure
  pressure.innerHTML = odata.current.pressure_mb + "mb";
  //DewPoint
  dewpoint.innerHTML = forcast.forecast.forecastday[1].hour[1].dewpoint_c;

  // today
  timg.src = forcast.forecast.forecastday[1].hour[1].condition.icon;
  thtemp.innerHTML = forcast.forecast.forecastday[1].day.mintemp_c;
  tltemp.innerHTML = forcast.forecast.forecastday[1].day.maxtemp_c;
  // day1
  const Day1 = forcast.forecast.forecastday[1].date_epoch;
  const weekday1 = new Date(Day1 * 1000).toLocaleDateString("en", {
    weekday: "long",
  });
  console.log(weekday1);
  day1.innerHTML = weekday1;
  d1img.src = forcast.forecast.forecastday[1].day.condition.icon;
  d1htemp.innerHTML = forcast.forecast.forecastday[1].day.maxtemp_c;
  d1ltemp.innerHTML = forcast.forecast.forecastday[1].day.mintemp_c;
  // day2
  const Day2 = forcast.forecast.forecastday[2].date_epoch;
  const weekday2 = new Date(Day2 * 1000).toLocaleDateString("en", {
    weekday: "long",
  });
  console.log(weekday2);
  day2.innerHTML = weekday2;
  d2img.src = forcast.forecast.forecastday[2].day.condition.icon;
  d2htemp.innerHTML = forcast.forecast.forecastday[2].day.maxtemp_c;
  d2ltemp.innerHTML = forcast.forecast.forecastday[2].day.mintemp_c;
  // day3
  const Day3 = forcast.forecast.forecastday[3].date_epoch;
  const weekday3 = new Date(Day3 * 1000).toLocaleDateString("en", {
    weekday: "long",
  });
  console.log(weekday3);
  day3.innerHTML = weekday3;
  d3img.src = forcast.forecast.forecastday[3].day.condition.icon;
  d3htemp.innerHTML = forcast.forecast.forecastday[3].day.maxtemp_c;
  d3ltemp.innerHTML = forcast.forecast.forecastday[3].day.mintemp_c;
  // day4
  const Day4 = forcast.forecast.forecastday[4].date_epoch;
  const weekday4 = new Date(Day4 * 1000).toLocaleDateString("en", {
    weekday: "long",
  });
  console.log(weekday4);
  day4.innerHTML = weekday4;
  d4img.src = forcast.forecast.forecastday[4].day.condition.icon;
  d4htemp.innerHTML = forcast.forecast.forecastday[4].day.maxtemp_c;
  d4ltemp.innerHTML = forcast.forecast.forecastday[4].day.mintemp_c;
  // day5
  const Day5 = forcast.forecast.forecastday[5].date_epoch;
  const weekday5 = new Date(Day5 * 1000).toLocaleDateString("en", {
    weekday: "long",
  });
  console.log(weekday5);
  day5.innerHTML = weekday5;
  d5img.src = forcast.forecast.forecastday[5].day.condition.icon;
  d5htemp.innerHTML = forcast.forecast.forecastday[5].day.maxtemp_c;
  d5ltemp.innerHTML = forcast.forecast.forecastday[5].day.mintemp_c;

  const day = odata.current.is_day;
  const boolvalue = odata.current.condition.text;
  console.log(boolvalue, day);
  background(day, boolvalue);

 

  function background(day, boolvalue) {
    const backmapping={
        "Mist-0":"url('./asserts/FireWatch-WeatherDesk-Pack-master/night-cloudy.jpg')",
        "Mist-1":"url('./asserts/FireWatch-WeatherDesk-Pack-master/cloudy.jpg')",
        "Moderate rain-0":"url('./asserts/FireWatch-WeatherDesk-Pack-master/night-rain.jpg')",
        "Moderate rain-1":"url('./asserts/FireWatch-WeatherDesk-Pack-master/day-rain.jpg')",
        "Sunny-1":"url('./asserts/FireWatch-WeatherDesk-Pack-master/day-normal.jpg')",
        "Sunny-0":"url('./asserts/FireWatch-WeatherDesk-Pack-master/night-normal.jpg')",
        "Patchy rain possible-0":"url('./asserts/FireWatch-WeatherDesk-Pack-master/night-thunder.jpg')",
        "Patchy rain possible-1":"url('./asserts/FireWatch-WeatherDesk-Pack-master/day-thunder.jpg')",
        "Clear-1":"url('./asserts/FireWatch-WeatherDesk-Pack-master/day-cloudy.jpg')",
        "Clear-0":"url('./asserts/FireWatch-WeatherDesk-Pack-master/night-cloudy.jpg')",
        "Light rain shower-0":"url('./asserts/FireWatch-WeatherDesk-Pack-master/night-rain.jpg')",
        "Light rain shower-1":"url('./asserts/FireWatch-WeatherDesk-Pack-master/day-rain.jpg')",
        "Light rain-0":"url('./asserts/FireWatch-WeatherDesk-Pack-master/night-rain.jpg')",
        "Light rain-1":"url('./asserts/FireWatch-WeatherDesk-Pack-master/day-rain.jpg')",
        "Overcast-1":"url('./asserts/FireWatch-WeatherDesk-Pack-master/day-wind.jpg')",
        "Overcast-0":"url('./asserts/FireWatch-WeatherDesk-Pack-master/night-wind.jpg')",
        "Fog-0":"url('./asserts/FireWatch-WeatherDesk-Pack-master/night-snow.jpg')",
        "Fog-1":"url('./asserts/FireWatch-WeatherDesk-Pack-master/day-snow.jpg')",
        "Partly cloudy-1":"url('./asserts/FireWatch-WeatherDesk-Pack-master/day-cloudy.jpg')",
        "Partly cloudy-0":"url('./asserts/FireWatch-WeatherDesk-Pack-master/night-cloudy.jpg')",
        "-0":"url('./asserts/FireWatch-WeatherDesk-Pack-master/night-cloudy.jpg')",
        "-1":"url('./asserts/FireWatch-WeatherDesk-Pack-master/day-cloudy.jpg')",

      }
    const key=`${boolvalue}-${day}`
    document.body.style.backgroundImage =backmapping[key]
    document.querySelector(".weather").style.backgroundImage =backmapping[key]
    return
    if (day == 0 && boolvalue == "Mist") {
      document.body.style.backgroundImage =
        "url('./asserts/FireWatch-WeatherDesk-Pack-master/day-normal.jpg')";
      document.querySelector(".weather").style.backgroundImage =
        "url('./asserts/FireWatch-WeatherDesk-Pack-master/day-normal.jpg')";
    } else {
      document.body.style.backgroundImage =
        "url('./asserts/FireWatch-WeatherDesk-Pack-master/night-normal.jpg')";
      document.querySelector(".weather").style.backgroundImage =
        "url('./asserts/FireWatch-WeatherDesk-Pack-master/night-normal.jpg')";
    }
  }
};


// Set current year and last modified date in the footer
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Static weather values for Nigeria
const temperature = 30;
const windSpeed = 10;

// Calculate wind chill using the metric formula
function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Wind chill only applies when temp is 10°C or below and wind is above 4.8 km/h
let windChill = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
  windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
}

document.querySelector("#windchill").textContent = windChill;

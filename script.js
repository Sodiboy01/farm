const form = document.querySelector('form');
const btn = document.querySelector('button');
const apiKey = '1fff603b28a6b4ccbaace7032bfd2d5dd49f1dc75090f5f0fbedf00e';
 btn.addEventListener('click', e =>{
    e.preventDefault();
    // Check if the browser supports Geolocation API
if (navigator.geolocation) {
    // Get the user's current position
    navigator.geolocation.getCurrentPosition(function(position) {
      // Get the latitude and longitude from the position object
      const { latitude, longitude } = position.coords;
  
      // Make a request to a reverse geocoding API to get the address details
      fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
        .then(response => response.json())
        .then(data => {
          // Extract the state and country from the address details
          const { principalSubdivision, countryName } = data;
  
          // Log the state and country to the console
          console.log(`State: ${principalSubdivision}, Country: ${countryName}`);
          form.state.value = principalSubdivision;
        })
        .catch(error => console.error(error));
    });
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
  
 });

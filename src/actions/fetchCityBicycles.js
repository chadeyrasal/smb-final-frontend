export function fetchCityBicycles() {
  fetch('http://localhost:3000/api/v1/cities/1/bicycles')
    .then(response => response.json())
    .then(cityBicycles => console.log(cityBicycles))
}

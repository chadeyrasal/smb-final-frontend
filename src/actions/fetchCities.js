export function fetchCities() {
  fetch('http://localhost:3000/api/v1/cities')
    .then(response => response.json())
    .then(cities => {
      console.log(cities)
    })
}

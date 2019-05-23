function ghibliApi(){

    const baseURL ='https://ghibliapi.herokuapp.com/films';
   
   let randIndex = Math.floor(Math.random() * 20);
   
   fetch(baseURL)
   .then(function(response) {
    return response.json();
   })
   .then(function(json) {
    displayResults(json)
   });
   
   function displayResults(j){
      let title = (j[randIndex].title)
      let description = (j[randIndex].description)
      document.getElementsByTagName('h1')[1].innerText = title
      document.getElementsByTagName('p')[1].innerText = description
   }
   }
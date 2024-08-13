console.log('%c HI', 'color: firebrick')

// Challenge 1
// on page load, fetches the images using the url above ⬆️
// parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded", (e) => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function (response) {
        return response.json();
      })
    //   .then(dogs => console.log(dogs.message))
    .then(dogs => dogs.message.forEach(dog => renderOneAnimal(dog)))
})

function renderOneAnimal(dog) {
    const body = document.getElementById("dog-image-container")
    const img = document.createElement("img");
    console.log(dog)
    img.src = dog
    body.appendChild(img);
}
// Challenge 2
//on page load, fetches all the dog breeds using the url above ⬆️
// adds the breeds to the page in the <ul> provided in index.html

// AND 

// Challenge 3
// Once all of the breeds are rendered in the <ul>, 
// add JavaScript so that, when the user clicks on any one of the <li>s, 
// the font color of that <li> changes. This can be a color of your choosing.
let breeds = []

document.addEventListener("DOMContentLoaded", (e) => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        breeds = Object.keys(data.message);
        breeds.forEach(function (breed) {
          postBreed(breed);
        });
      });
  });

function postBreed(breed){
    const breedList = document.getElementById("dog-breeds")
    const breedLi = document.createElement("li")
    breedLi.textContent = breed;
    breedList.append(breedLi);
    breedLi.addEventListener("click", function() {
        breedLi.style.color = "purple"
    })
}

// Challenge 4
// Once we are able to load all of the dog breeds onto the page, 
// add JavaScript so that the user can filter breeds that start with 
// a particular letter using a dropdownLinks to an external site.

document.getElementById("breed-dropdown").addEventListener("change", function(e) {
    const filterBreeds = breeds.filter(function (breed){
        if(breed[0] === e.target.value){
        return breed }
    })
    filterBreeds.forEach(function (breed){
        postBreed(breed)
    })
})

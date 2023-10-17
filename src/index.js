console.log('%c HI', 'color: firebrick')
// Challenge 1
document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const imageContainer = document.getElementById("dog-images");
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const dogImages = data.message;
  
        dogImages.forEach(imageUrl => {
          const imgElement = document.createElement('img');
          imgElement.src = imageUrl;
          imageContainer.appendChild(imgElement);
        });
      })
      .catch(error => console.error('Error fetching dog images:', error));
  });

  //challenge 2

// Challenge 2
document.addEventListener('DOMContentLoaded', () => {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  const breedsList = document.getElementById('breeds-list');

  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      const breeds = Object.keys(data.message);

      breeds.forEach(breed => {
        const breedItem = document.createElement('li');
        breedItem.textContent = breed;
        breedsList.appendChild(breedItem);
      });
    })
    .catch(error => console.error('Error fetching dog breeds:', error));
});

// Challenge 3
document.addEventListener('DOMContentLoaded', () => {
    const breedsList = document.getElementById('breeds-list');
  
    breedsList.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'blue'; 
      }
    });
  });
  
  // Challenge 4
document.addEventListener('DOMContentLoaded', () => {
    const breedsList = document.getElementById('breeds-list');
    const filterDropdown = document.getElementById('breed-filter');
  
    filterDropdown.addEventListener('change', () => {
      const selectedLetter = filterDropdown.value;
      const breedItems = breedsList.getElementsByTagName('li');
  
      for (const item of breedItems) {
        if (item.textContent.startsWith(selectedLetter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    });
  });
  

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// get photos from unsplash API
const count = 10;
const apiKey = 'chx4wgQdU8nTAvfE1SVPTm7kqA7tihPVTh_rB8MD0u8';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// create elements for links & photos, add to DOM
function displayPhotos() {
    // run function for each object in photosArray
    photosArray.forEach((photo) => {
        // create <a> to link to Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        console.log(item);
        //create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);

        //put <img> inside <a>, then put that <img> inside image container
        item.appendChild(img);
        imageContainer.appendChild(item);
        
    });
}

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray);
        displayPhotos();
    } catch(e) {
        // catch errors here
        console.log(e)
    }
}

// on load

getPhotos();

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// get photos from unsplash API
const count = 10;
const apiKey = 'chx4wgQdU8nTAvfE1SVPTm7kqA7tihPVTh_rB8MD0u8';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// helper function to avoid repeat code 
function setAttributes(element, attributes) {
    // key = href, target, src, alt
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    } 
}

// create elements for links & photos, add to DOM
function displayPhotos() {
    // run function for each object in photosArray
    photosArray.forEach((photo) => {
        // create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        });
        console.log(item);
        //create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })

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
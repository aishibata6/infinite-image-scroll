const count = 10;
const apiKey = 'chx4wgQdU8nTAvfE1SVPTm7kqA7tihPVTh_rB8MD0u8';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

// get photos from unsplash API

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

    } catch(e) {
        // catch errors here
        console.log(e)
    }
}

// on load

getPhotos();
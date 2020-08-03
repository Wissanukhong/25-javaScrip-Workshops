// function remove photo
function removePhotos() {
    const photosElment = document.querySelector('.photos');
    photosElment.innerHTML= '';
}

// function search
function searchPhotos(event) {
    const stockPhoto = document.createElement('img')
    stockPhoto.src = "asset/photo-1.jpg"

    const displayPhoto = document.querySelector('.photos')
    displayPhoto.appendChild(stockPhoto);
}

// function run
function run() {
    searchPhotos();
}

run();
// key search
function keywordSearch(keyword){
    const stockPhoto = document.createElement('img')
    stockPhoto.src = `asset/photo-${keyword}.jpg`;

    const displayPhoto = document.querySelector('.photos')
    displayPhoto.appendChild(stockPhoto);
}

// function remove photo
function removePhotos() {
    const photosElment = document.querySelector('.photos');
    photosElment.innerHTML= '';
}

// function show error
function notMatching() {
    const noPhotos = document.createElement('img');
    noPhotos.src= `./asset/error404.png`;
}

// function search
function searchPhotos(event) {
    const keyword = event.target.value;

    if(event.key === 'Enter' && keyword) {
        removePhotos();
        keywordSearch(keyword);
    } else{
        notMatching(); // Error 
    }


}

// function run
function run() {
    const inputEle =document.querySelector('input');
    inputEle.addEventListener('keydown',searchPhotos)
}

run();
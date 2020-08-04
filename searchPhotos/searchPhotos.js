// key search
function keywordSearch(keyword) {

    if (checkFileExist(keyword)) {
        // if keyword matching show this result
        const stockPhoto = document.createElement('img')
        stockPhoto.src = `asset/photo-${keyword}.jpg`;

        const displayPhoto = document.querySelector('.photos')
        displayPhoto.appendChild(stockPhoto);
    } else {
        // if keywrod is not matching show this result
        const noPhotos = document.createElement('img');
        noPhotos.src = "asset/error404.png";
        const displayPhoto = document.querySelector('.photos')
        displayPhoto.appendChild(noPhotos);
    }
}

// function remove photo
function removePhotos() {
    const photosElment = document.querySelector('.photos');
    photosElment.innerHTML = '';
}

// function file before send result
function checkFileExist(keyword) {
    var http = new XMLHttpRequest();
    
    http.open('HEAD', `asset/photo-${keyword}.jpg`, false);
    http.send();
    if (http.status === 200) {
        return true;
    } 
    return false;
}

// function search
function searchPhotos(event) {
    const keyword = event.target.value;
    console.log(keyword, event.key)

    if (event.key === 'Enter' && keyword) {
        console.log('match')
        removePhotos();
        keywordSearch(keyword);
    }

}

// function run
function run() {
    const inputEle = document.querySelector('input');
    inputEle.addEventListener('keydown', searchPhotos)
}

run();
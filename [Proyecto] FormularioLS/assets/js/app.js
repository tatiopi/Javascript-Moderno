const listTweets = document.getElementById('lista-tweets');

eventListeners();

function eventListeners() {
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
    // borrar tweets
    listTweets.addEventListener('click', borrarTweet);

    document.addEventListener('DOMContentLoaded', localStorageList);
}

function agregarTweet(e) {
    // leer el valor del texarea ;
    const tweet = document.getElementById('tweet').value;
    // Crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    // Cear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    // añadir el boron de borrar
    li.appendChild(botonBorrar);
    listTweets.appendChild(li);

    // añadir a localstorage
    agregarTweetLocalStorage(tweet);
}

function borrarTweet(e) {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.textContent);
    }
}

function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetLocalStorage();
    // añadir el nuevo twwet
    tweets.push(tweet);
    // Convertir de string a arreglo para localstorage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function obtenerTweetLocalStorage() {
    let tweets;
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }

    return tweets;

}

function localStorageList() {
    let tweets = obtenerTweetLocalStorage();
    tweets.forEach(tweet => {
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';
        // Cear elemento y añadirle el contenido a la lista
        const li = document.createElement('li');
        li.innerText = tweet;
        // añadir el boron de borrar
        li.appendChild(botonBorrar);
        listTweets.appendChild(li);
    });
}

function borrarTweetLocalStorage(tweet) {
    let tweets, tweetABorrar;
    // Elimina la X del tweet
    tweetABorrar = tweet.substr(0, tweet.length - 1);
    // 
    tweets = obtenerTweetLocalStorage();
    tweets.forEach(function(tweet, index) {
        // tweetABorrar == tweet ? tweets.splice(index, 1) : 
        if (tweetABorrar == tweet) {
            tweets.splice(index, 1);
        }
    });
    localStorage.setItem('tweets', JSON.stringify(tweets));
}
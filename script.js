/*
 * Social Posts
 * Creare una pagina che elenchi una lista di post socials a partire da un array di oggetti.
 * Gli attributi minimi del modello di un post: id, contenuto, immagine, 
 * autore (nome, avatar), numero di likes, data creazione.
 * Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.
 * 
 * Immagini: va bene utilizzare qualsiasi servizio di placeholder
 * ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
 *
 * Bonus 1: Visualizzare la data con formato italiano (gg/mm/aaaa)
 * Bonus 2: Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene
 * le iniziali dell'utente (es. Sofia Perlari > SP)
 * Bonus 3: Click al pulsante "Mi Piace" incrementa il counter dei like al post.
 * 
*/

/***************************
    SET UP VARIABLES
****************************/




const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const container = document.getElementById('container')

for (let i = 0; i < posts.length; i++) {
    const currentPost = posts[i];

    console.log(postTemplate(currentPost));

    container.innerHTML += postTemplate(currentPost);

}

function postTemplate(postData) {

    const { id, content, media, author, likes, created } = postData;

    return `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${author.image}" alt="${author.name}"
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${author.name}</div>
                    <div class="post-meta__time">${created}</div>
                </div>
            </div>
        </div>
        <div class="post__text">${content}</div>
        <div class="post__image">
            <img src="${media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                </div>
            </div>
        </div>
    </div>                
    `


}
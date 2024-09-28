const books = [ { titlu: "Carte 1", autor: "Autor 1", esteCitita: true }, { titlu: "Carte 2", autor: "Autor 2", esteCitita: false }, ];

function showBooks (booksArray) {
    booksArray.forEach(book => {
        if(book.esteCitita === true) {
            console.log("Ai citit deja " + book.titlu + " de" + book.autor)
        }
        else {
            console.log("Trebuie sa citesti " + book.titlu + " de" + book.autor)
        }
    })
}

showBooks(books);
//LORSQUE L'ON CLIQUE SUR LE BOUTON
$('button').click(() => {
    // VIDE LA GALERIE
    $(".galery").empty();
    // ON RECUPERE LA VALEUR DU CHAMP
    const input = $('input').val()
    // ON ENVOIE LA REQUETE
    const xhr = $.get(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=gbuu5UwpoAdb7EFEBSBwkvpJlkwyXxyF&limit=14`)

    // UNE FOIS LA REQUETE TERMINER, ON TRAITE LA REPONSE
    xhr.done(function(res) {
        // CREER UNE VARIABLE NOMME IMAGES QUI EST UN TABLEAU CONTENANT TOUTES LES IMAGES
        const gifs = res.data
        // POUR CHAQUE IMAGE DU TABLEAU
        gifs.forEach(gif => {
            // ON AJOUTE L'IMAGE A LA GALERIE (section ayant la classe 'galery')
            $(".galery").append(`<img src="${gif.images.downsized.url}">`)
        })
    })
})
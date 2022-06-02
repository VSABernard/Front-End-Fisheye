function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;
    console.log (picture)

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        console.log (article)

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        console.log (img)

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        console.log (h2)

        return (article);
    }
    return { name, picture, getUserCardDOM }
}
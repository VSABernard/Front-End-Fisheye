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
        console.log (h2)

        const h3 = document.createElement( 'h3' );
        h3.textContent = `${city}, ${country}`;
        console.log (h3)

        const h4 = document.createElement( 'h4' );
        h4.textContent = tagline;
        console.log (h4)

        const h5 = document.createElement( 'h5' );
        h5.textContent = `${price}€/jour`;
        console.log (h5)

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(h5);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}
fetch('https://dde4-46-219-227-133.eu.ngrok.io/users')
    .then(value => value.json())
    .then(posts => {
        let cont = document.createElement('div');
        let div = document.createElement('div');


        div.innerHTML = `${posts.name}`


        cont.appendChild(div);
        document.body.appendChild(cont);
    })

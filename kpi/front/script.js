fetch('https://localhost:5555/users')
    .then(value => value.json())
    .then(data => console.log(data))
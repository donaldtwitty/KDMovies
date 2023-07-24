fetch('http://localhost:3000/movies', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Batman: Returns',
        genre: 'Action',
        rating: 10
    })
})

// (() => {

    const movieKey = TMDB_API;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'Authorization': TMDB_API
        }
    };

    fetch('https://api.themoviedb.org/3/search/movie?query=The Lion King', options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error.message);
        });


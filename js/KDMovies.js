(() => {
        const url = 'https://api.themoviedb.org/3/search/movie?query=shrek'
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${MOVIE_TOKEN}`
            }
        };

        fetch(url, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

})();


    // const options = {
    //     method: 'GET',
    //     headers: {
    //         accept: 'application/json',
    //         'Authorization': TMDB_API
    //     }
    // };
    //
    // fetch('https://api.themoviedb.org/3/search/movie?query=The Lion King', options)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.log(error.message);
    //     });


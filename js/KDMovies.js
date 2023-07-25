(() => {

// ////////////Fetch AP targeting search input///////////////////////////

    const getMoviesBySearch = async (queryParam) => {
        try {
            const queryString = `?query=${encodeURIComponent(queryParam)}&api_key=${MOVIE_API_KEY}`;
            const baseUrl = 'https://api.themoviedb.org/3/search/movie';
            const url = baseUrl + queryString;
            const options = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${MOVIE_API_KEY}`,
                },
            };

            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }


            const movies = await response.json();
            const container4 = document.getElementById("container4");
            container4.innerHTML = ''; // Clear previous search results

            movies.results.forEach(movie => {
                const card = document.createElement("div");
                card.classList.add("card");

                const img = document.createElement("img");
                img.classList.add("card-img-top");
                img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

                const cardBody = document.createElement("div");
                cardBody.classList.add("card-body");

                const title = document.createElement("h5");
                title.classList.add("card-title");
                title.textContent = movie.title;

                const overview = document.createElement("p");
                overview.classList.add("card-text");
                overview.textContent = movie.vote_average;

                const button = document.createElement("button");
                button.classList.add("btn", "btn-primary");
                button.textContent = "Add";
                button.addEventListener("click", () => {
                    // Add code to fetch and display cast information below the card
                });

                cardBody.appendChild(title);
                cardBody.appendChild(overview);
                cardBody.appendChild(button);

                card.appendChild(img);
                card.appendChild(cardBody);

                container4.appendChild(card);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    getMoviesBySearch();

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value;
        getMoviesBySearch(searchTerm);
    });

// ////////////End Fetch AP targeting search input///////////////////////////




////////////////////////Popular Movies fetch Row///////////////////////////

    function getPopMovies() {
        const popularUrl = "https://api.themoviedb.org/3/movie/popular"
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${MOVIE_TOKEN}`,
            },
        };


        fetch(popularUrl, options)
            .then(response => response.json())
            .then(movies => {
                const container1 = document.getElementById("container1");

                movies.results.forEach(movie => {
                    const card = document.createElement("div");
                    card.classList.add("card");

                    const img = document.createElement("img");
                    img.classList.add("card-img-top");
                    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

                    const cardBody = document.createElement("div");
                    cardBody.classList.add("card-body");

                    const title = document.createElement("h5");
                    title.classList.add("card-title");
                    title.textContent = movie.title;

                    const overview = document.createElement("p");
                    overview.classList.add("card-text");
                    overview.textContent = `Released: ${movie.release_date}`;
                    overview.textContent = `Rating: ${movie.vote_average} `;

                    const button = document.createElement("button");
                    button.classList.add("btn", "btn-primary");
                    button.textContent = "View Cast";
                    button.addEventListener("click", () => {
                        // Add code to fetch and display cast information below the card
                    });

                    cardBody.appendChild(title);
                    cardBody.appendChild(overview);
                    cardBody.appendChild(button);

                    card.appendChild(img);
                    card.appendChild(cardBody);

                    container1.appendChild(card);
                });
            })
            .catch(err => console.error(err));

    }
getPopMovies();











////////Top rated Movies fetch Row///////////////////////////
    function getTopMovies() {
        const topRatedUrl = "https://api.themoviedb.org/3/movie/top_rated"
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${MOVIE_API_KEY}`,
            },
        };

        fetch(topRatedUrl, options)
            .then(response => response.json())
            .then(movies => {
                    const container3 = document.getElementById("container3");

                    movies.results.forEach(movie => {
                        const card = document.createElement("div");
                        card.classList.add("card");

                        const img = document.createElement("img");
                        img.classList.add("card-img-top");
                        img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

                        const cardBody = document.createElement("div");
                        cardBody.classList.add("card-body");

                        const title = document.createElement("h5");
                        title.classList.add("card-title");
                        title.textContent = movie.title;

                        const overview = document.createElement("p");
                        overview.classList.add("card-text");
                        overview.textContent = `Released: ${movie.release_date}`;
                        overview.textContent = `Rating: ${movie.vote_average} `;


                        const button = document.createElement("button");
                        button.classList.add("btn", "btn-primary");
                        button.textContent = "View Cast";
                        button.addEventListener("click", () => {
                            // Add code to fetch and display cast information below the card
                        });

                        cardBody.appendChild(title);
                        cardBody.appendChild(overview);
                        cardBody.appendChild(button);

                        card.appendChild(img);
                        card.appendChild(cardBody);

                        container3.appendChild(card);
                    });
                })
                    .catch(err => console.error(err));
            }

        getTopMovies();

    //////// End of Top rated Movies fetch Row///////////////////////////

////////Now Playing Movies fetch Row///////////////////////////
    function getNowMovies() {
        const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing"
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${MOVIE_API_KEY}`,
            },
        };

        fetch(nowPlayingUrl, options)
            .then(response => response.json())
            .then(movies => {
                const container2 = document.getElementById("container2");

                movies.results.forEach(movie => {
                    const card = document.createElement("div");
                    card.classList.add("card");

                    const img = document.createElement("img");
                    img.classList.add("card-img-top");
                    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

                    const cardBody = document.createElement("div");
                    cardBody.classList.add("card-body");

                    const title = document.createElement("h5");
                    title.classList.add("card-title");
                    title.textContent = movie.title;

                    const overview = document.createElement("p");
                    overview.classList.add("card-text");
                    overview.textContent = `Released: ${movie.release_date}`;
                    overview.textContent = `Rating: ${movie.vote_average} `;

                    const button = document.createElement("button");
                    button.classList.add("btn", "btn-primary");
                    button.textContent = "View Cast";
                    button.addEventListener("click", () => {
                        // Add code to fetch and display cast information below the card
                    });

                    cardBody.appendChild(title);
                    cardBody.appendChild(overview);
                    cardBody.appendChild(button);

                    card.appendChild(img);
                    card.appendChild(cardBody);

                    container2.appendChild(card);
                });
            })
            .catch(err => console.error(err));
    }

       getNowMovies();
// End of Now Playing Movies fetch Row///////////////////////////





})();
    ////////////////////////Popular Movies fetch Row///////////////////////////


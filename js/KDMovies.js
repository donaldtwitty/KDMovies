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


            // the start of an attempt to put fav in JSON //
                card.innerHTML = `
                <form>
                <div class="movie-Card">
                        <div>
                            <img src="https://image.tmdb.org/t/p/w500/${result.poster_path}">                           
                        </div>
                        <div>
                        <h2>${result.original_title}</h2>
                            <p>${result.genre_names.join(", ")}</p>
                            <p>Popularity: ${result.popularity}</p>
                            <p class="overview">${result.overview}</p>
                            <button class="add-to-favorites">Add to Favorites</button>
                        </div>
                </div>
            </form>
                `;

                serchedMovieParentDiv.appendChild(dynamicSearchedMovie);
                let addBtn = dynamicSearchedMovie.querySelector('.add-to-favorites');
                addBtn.addEventListener('click', async (e) => {
                    e.preventDefault();
                    console.log(serchedMovieParentDiv);
                    const response = await addToFavorites(result);
                    console.log(response);
                    const favMoviesDiv = document.querySelector('#favorite-movies');
                    favMoviesDiv.innerHTML = ``;
                    await renderFavoriteMovies(await getFavoriteMovies());
                })
            // the end of an attempt to put fav in JSON //

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
                button.textContent = "Add to Favorites";
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
                    button.textContent = "Add to Favorite";
                    button.addEventListener("click", (event) => {
                        // Add code to fetch and display cast information below the card

                        // just seeing //

                        // end of just seeing //


                        // find and store the parent's parent of the button

                        // using this grandparent, find the image that resides inside and save the src url in a variable
                        // same thing with title and rating (.card-title and .card-text)

                        // use these three variable to populate the JSON stringified body of our POST fetch request


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


////////////////////////Favorite Option///////////////////////////

})();









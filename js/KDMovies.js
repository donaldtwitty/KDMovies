(() => {

// ////////////Fetch AP targeting search input///////////////////////////

    // const searchInput = document.getElementById("search-input").value;

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
            const movies = await response.json();
            const movieContainer = document.getElementById('movie-card');
            movieContainer.innerHTML = '';

            for (let movie of movies.results) {
                // node needs to appear within id #div
                let movieCard = document.createElement('div');
                movieCard.innerHTML = (`
                <ul>
                    <li>Title: ${movie.title}</li>
                    <li>Release Date: ${movie.release_date}</li>
                    <li>Poster Path: ${movie.poster_path}</li>
                    <li>Overview: ${movie.overview}</li>
                </ul>
            `);
                movieContainer.appendChild(movieCard);
            }
        } catch (error) {
            console.error(error);
        }
    };

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
        .then(response => {
            return response.json();
        })
        .then(movies => {
            console.log(movies);
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
                Authorization: `Bearer ${MOVIE_TOKEN}`,
            },
        };

        fetch(topRatedUrl, options)
            .then(response => {
                return response.json();
            })
            .then(movies => {
                console.log(movies);
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
                Authorization: `Bearer ${MOVIE_TOKEN}`,
            },
        };

        fetch(nowPlayingUrl, options)
            .then(response => {
                return response.json();
            })
            .then(movies => {
                console.log(movies);
            })
            .catch(err => console.error(err));
    }
    getNowMovies();
// End of Now Playing Movies fetch Row///////////////////////////

// /////////////////////////Event listeners////////////////////////////




})();
    ////////////////////////Popular Movies fetch Row///////////////////////////

// ////// Failed Attempt to add cards and functionality////////////////
//             console.log(movies);
//             for (let i = 0; i < response.movies.length; i++) {
//                 let title = response.movies[i].title;
//                 let release_date = movies.results[i].release_date;
//                 let poster_pat = movies.results[i].poster_path;
//                 let overview = movies.results[i].overview;
//                 card = document.createElement("div");
//                 card.style = 'style="width: 18rem';
//                 card.setAttribute("class", "col-lg-3 col-md-3 col-sm-3 m-1  card");
//
//                 let img = document.createElement("img");
//                 img.classList.add("card-img-top");
//                 img.src = img_url + poster_pat;
//
//                 let movieTitle = document.createElement("h5");
//                 movieTitle.setAttribute("class", "card-title");
//                 movieTitle.textContent = title;
//
//                 let mtvrd = document.createElement("h7");
//                 mrd.setAttribute("class", "card-title");
//                 mrd.textContent = "Date: " + release_date;
//                 let button = document.createElement("button");
//                 button.textContent = "view casts";
//
//                 button.className = "my-button";
//
//                 button.id = "my-button";
//
//                 let closeButton = document.createElement("button");
//                 closeButton.textContent = "Close Cast";
//                 closeButton.className = "close-button";
//                 closeButton.style.display = "none";
//
//                 button.addEventListener("click", function () {
//                     console.log("Button clicked!");
//                     const movieId = response.results[i].id;
//                     console.log(movieId);
//                     const currentCard = button.closest(".card");
//
//                     getCast(movieId, currentCard);
//                 });
//
//                 let overview = document.createElement("h7");
//                 overview.setAttribute("class", "card-title");
//                 overview.textContent = overview;
//
//                 card.append(img);
//                 card.append(mtitle);
//                 card.append(mrd);
//                 card.append(overview);
//                 card.append(button);
//                 container1.append(card);
//             }
//             // ///////////Gets for cast///////////////////////////
//             function getCast(movieId, currentCard) {
//                 const apiKey = "e9097b137e5e9bacd6efb85111071284";
//                 const castUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;
//                 fetch(castUrl)
//                     .then((response) => response.json())
//                     .then((data) => {
//                         console.log(data);
//                         const cast = data.cast;
//                         const castContainer = document.createElement("div");
//
//                         cast.forEach((actor) => {
//                             const name = actor.name;
//                             const character = actor.character;
//                             const actorInfo = document.createElement("p");
//                             actorInfo.textContent = `${name} as ${character}`;
//                             castContainer.appendChild(actorInfo);
//                         });
//
//                         // Append the cast container to the card or any desired HTML element
//                         currentCard.appendChild(castContainer);
//                     })
//                     .catch((error) => {
//                         console.error("Error:", error);
//                     });
//             }
//         })
//         .catch((err) => console.error(err));
// }
// ////// End of Failed Attempt to add cards and functionality////////////////


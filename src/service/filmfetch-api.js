const BASE_URL = 'https://api.themoviedb.org/3';
const KEY_API = '85b22a0287382b9d858c092aa3356cbd';

async function fetchWithErrorHandling(
    url = '',
    config = {},
) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

export function fecthTrending() {
    return fetchWithErrorHandling(
        `${BASE_URL}/trending/movie/day?api_key=${KEY_API}`,
    );
}

export function fetchFilmName(query) {
    return fetchWithErrorHandling(
        `${BASE_URL}/search/movie?api_key=${KEY_API}&language=en-US&query=${query}&page=1&include_adult=false`,
    );
}

export function fetchFilmDetails(filmId) {
    return fetchWithErrorHandling(
        `${BASE_URL}/movie/${filmId}?api_key=${KEY_API}&language=en-US`,
    );
}

export function fetchFilmActors(filmId) {
    return fetchWithErrorHandling(
        `${BASE_URL}/movie/${filmId}/credits?api_key=${KEY_API}&language=en-US`,
    );
}

export function fetchFilmReviews(filmId) {
    return fetchWithErrorHandling(
        `${BASE_URL}/movie/${filmId}/reviews?api_key=${KEY_API}&language=en-US`,
    );
}

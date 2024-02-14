import { API_KEY,apiBaseUrl } from "../constants/constants"

export const originals = `${ apiBaseUrl }/discover/tv?api_key=${ API_KEY }&with_networks=213`
export const action = `${ apiBaseUrl }/discover/movie?api_key=${ API_KEY }&with_genres=28`


export const comedyMovies= `${ apiBaseUrl }/discover/movie?api_key=${API_KEY}&with_genres=35`

export const horrorMovies= `${ apiBaseUrl }/discover/movie?api_key=${API_KEY}&with_genres=27`


export const romanceMovies= `${ apiBaseUrl }/discover/movie?api_key=${API_KEY}&with_genres=10749`

export const documentaries= `${ apiBaseUrl }/discover/movie?api_key=${API_KEY}&with_genres=99`




export const getUrl = (id) => `${apiBaseUrl}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;

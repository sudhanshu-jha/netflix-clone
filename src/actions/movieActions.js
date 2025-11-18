import constants from "../constants";
import { API } from "../utils";

export default {
  fetchTheMovie: movieId => async dispatch => {
    const response = await API.fetchMovieData(`/movie/${movieId}?`);
    dispatch({
      type: constants.FETCH_THEMOVIE,
      payload: response
    });
  },
  fetchCast: movieId => async dispatch => {
    const response = await API.fetchMovieData(`/movie/${movieId}/credits?`);
    dispatch({
      type: constants.FETCH_CASTLIST,
      payload: response
    });
  },
  fetchSearch: searchText => async dispatch => {
    try {
      const response = await API.fetchMovieData(
        `/search/movie?`,
        `&query=${encodeURIComponent(searchText)}&page=1&include_adult=false`
      );
      dispatch({
        type: constants.FETCH_SEARCH,
        payload: response
      });
    } catch (error) {
      console.error('Search failed:', error);
      dispatch({
        type: constants.FETCH_ERROR,
        payload: error
      });
    }
  }
};

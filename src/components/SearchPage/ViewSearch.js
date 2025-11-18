import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { SearchItem } from "./presentations";
import { movieActions } from "../../actions";

const ViewSearch = ({ searchResult, fetchTheMovie, fetchCast }) => (
  <div id="result-container">
    <ul>
      {searchResult && searchResult.length > 0 ? (
        searchResult.map(movie => (
          <SearchItem
            key={movie.id}
            movie={movie}
            fetchTheMovie={fetchTheMovie}
            fetchCast={fetchCast}
          />
        ))
      ) : (
        <li style={{ textAlign: 'center', padding: '50px', fontSize: '18px' }}>
          {searchResult && searchResult.length === 0 ? 'No movies found. Try a different search term.' : 'Enter a movie title to search...'}
        </li>
      )}
    </ul>
  </div>
);

ViewSearch.propTypes = {
  fetchTheMovie: Proptypes.func,
  fetchCast: Proptypes.func,
  searchResult: Proptypes.array
};

const stateToProps = state => ({
  searchResult: state.searchReducer.searchResult
});

const dispatchToProps = dispatch => ({
  fetchTheMovie: movieId => {
    dispatch(movieActions.fetchTheMovie(movieId));
  },
  fetchCast: movieId => {
    dispatch(movieActions.fetchCast(movieId));
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(ViewSearch);

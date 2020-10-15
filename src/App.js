import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import updateMovies from './store/action/updateMovies';
function App(props) {
  console.log("i am here",props)
return (
    <div className="App">
    <h3>REDUX MOVIELIST APP</h3>
<br/>
<span
style={{color:'green'}}
>YOUR CURRENT MOVIE IS: </span>{props.movies.name}
<br/>
<button onClick={props.updateMovies}>SELECT NEW MOVIE</button>
</div>
);
};
const MapStateToProps = (state) => {
    return {
    movies: state.movies
};
};
const MapDispatchToProps = (dispatch) => {
return {
updateMovies: ()=> dispatch(updateMovies)
}
};
export default connect(MapStateToProps, MapDispatchToProps)(App);

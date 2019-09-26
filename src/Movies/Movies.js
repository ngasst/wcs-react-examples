import React from 'react';
import {Movie} from './Movie';
import axios from 'axios';

const url = 'http://www.omdbapi.com/?apikey=cc5375c9&s=Big'


export class Movies extends React.Component {

    state = {
        movies: []
    }
    componentDidMount() {
        axios.get(url).then(res => {
            const data = res.data;
            this.setState({movies: data.Search});
        })
        .catch(err => {
            alert(err.toString());
        })
    }
    render() {
        const movies = this.state.movies;
        return movies.map((movie, i) => {
            return (<Movie title={movie.Title} url={movie.Poster} key={i}/>)
        })
    }
}
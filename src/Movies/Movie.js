import React from 'react';
import './Movie.css';

export function Movie({title, url}){
    return (
        <div className="movie-container">
            <h1>{title}</h1>
            <img src={url} alt={title}/>
        </div>
    )
}
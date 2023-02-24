
import './AddMovie.css';
import { useState } from 'react';

function NewMovie() {
    return (
        <div className="Movie">
            
            <header>
                <h1>M.M.G.A</h1>
            </header>

            <form class="inputs" id="different">
                <input name="title" class="title" type="text" placeholder="Title"/>
                <input name="img" type="text" placeholder="Image Path..."/>
                <input name="crew" type="text" placeholder="Crew..."/>
                <input name="studio" type="text" placeholder="Studio..."/>
                <input name="genre" type="text" placeholder="Genre..."/>
                <div class="three">
                    <input name="videos" type="text" placeholder="Trailer..."/>
                    <input name="rated" type="text" placeholder="Rated..."/>
                </div>
                <div class="three">
                    <input name="duraiton" type="text" placeholder="Duration..."/>
                    <input name="release-date" type="text" placeholder="Release Date..."/>
                </div>
                <textarea class="cast" name="cast" id="cast" cols="30" rows="5" placeholder="Cast"></textarea>
                <textarea name="description" id="description" cols="30" rows="5" placeholder="Description..."></textarea>
                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
}

export default NewMovie;

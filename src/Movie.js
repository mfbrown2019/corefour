
import './Movie.css';
import { useState } from 'react';

function Movie() {
  return (
    <div className="Movie">
      
        <header>
            <h1>M.M.G.A.</h1>
        </header>

        <h1 class="movieTitle" id="movieTitleID"> </h1>

        <div class="mainTwo">
            <div class="trailer box-fitting" id="trailer"></div>
            <div class="info1 box-fitting" id="info1">

            </div>
            <div class="info2 box-fitting">
                <div class="ratingTitle">
                    <h3 class="rating" id="rating"></h3>
                    <h3 class="userrating" id="userrating"></h3>
                </div>  

            </div>
            <div class="matt box-fitting" id="matt"></div>
            <div class="nick box-fitting" id="nick"></div>
            <div class="brad box-fitting" id="brad"></div>
            <div class="sherm box-fitting" id="sherm"></div>
            <div class="reviews box-fitting" id="reviews"></div>
        </div>
    </div>
  );
}

export default Movie;

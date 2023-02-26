import React from 'react';
import './Movie.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Movie(props) {
    let location = useLocation();
    let values = location.state?.data

    console.log(values)

    let corefourscore = 0;
    let coreReviewed = 0;

    if (values['coreReviews']['matt']['rating'] != -1) {
        corefourscore = corefourscore + values['coreReviews']['matt']['rating'];
        coreReviewed = coreReviewed + 1;
    }
    console.log(corefourscore)
    if (values['coreReviews']['nick']['rating'] != -1) {
        corefourscore = corefourscore + values['coreReviews']['nick']['rating'];
        coreReviewed = coreReviewed + 1;
    }
    console.log(corefourscore)
    if (values['coreReviews']['brad']['rating'] != -1) {
        corefourscore = corefourscore + values['coreReviews']['brad']['rating'];
        coreReviewed = coreReviewed + 1;
    }
    console.log(corefourscore)
    if (values['coreReviews']['sherm']['rating'] != -1) {
        corefourscore = corefourscore + values['coreReviews']['sherm']['rating'];
        coreReviewed = coreReviewed + 1;
    }
    if (corefourscore == 0) {
        corefourscore = "N/R"
    } else {
        corefourscore = (corefourscore / coreReviewed).toFixed(1);
    }
    


    return (
        <div className="Movie">
        
            <header>
                <h1>Core Four</h1>
                <div className='filterbar'>
                    <input type='text'></input>
                    <input type='submit'></input>
                </div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/ToRate">To Rate</Link>
                    <Link to="/NewMovie">Add Movie</Link>
                </div>
            </header>

            <h1 className="movieTitle" id="movieTitleID">{values['title']}</h1>

            <div className="mainTwo">
                <div className="trailer box-fitting" id="trailer">
                    <iframe src={"https://www.youtube.com/embed/" + values['videos']} allowFullScreen ></iframe>
                </div>
                <div className="info1 box-fitting" id="info1">
                    <p><b>Duration:</b> {values["duration"]}</p>
                    <p><b>Release Date:</b> {values["releasedate"]}</p>
                    <p><b>Rated:</b> {values["rated"]}</p>
                    <p><b>Description:</b> {values["description"]}</p>
                    <p><b>Staring: </b>{values['cast']}</p>
                    <p><b>Genre:</b> {values["genre"]}</p>
                </div>
                <div className="info2 box-fitting">
                    <div className="ratingTitle">
                        <h3 className="rating" id="rating">{corefourscore}</h3>
                        <h3 className="userrating" id="userrating">N/R</h3>
                    </div>  
                </div>
                <div className="matt box-fitting" id="matt">
                    <div>
                        <h3 className="smallrating">Matt</h3>
                        <h3 className="smallrating">{values['coreReviews']['matt']['rating'] != -1 ? values['coreReviews']['matt']['rating'] : 'N/R'}</h3>
                    </div>
                    <p>{values["coreReviews"]["matt"]["why"]}</p>
                </div>
                <div className="nick box-fitting" id="nick">
                    <div>
                        <h3 className="smallrating">Nick</h3>
                        <h3 className="smallrating">{values['coreReviews']['nick']['rating'] != -1 ? values['coreReviews']['nick']['rating'] : 'N/R'}</h3>
                    </div>
                    <p>{values["coreReviews"]["nick"]["why"]}</p>
                </div>
                <div className="brad box-fitting" id="brad">
                    <div>
                        <h3 className="smallrating">Brad</h3>
                        <h3 className="smallrating">{values['coreReviews']['brad']['rating'] != -1 ? values['coreReviews']['brad']['rating'] : 'N/R'}</h3>
                    </div>
                    <p>{values["coreReviews"]["brad"]["why"]}</p>
                </div>
                <div className="sherm box-fitting" id="sherm">
                    <div>
                        <h3 className="smallrating">Sherm</h3>
                        <h3 className="smallrating">{values['coreReviews']['sherm']['rating'] != -1 ? values['coreReviews']['sherm']['rating'] : 'N/R'}</h3>
                    </div>
                    <p>{values["coreReviews"]["sherm"]["why"]}</p>
                </div>
                <div className="reviews box-fitting" id="reviews"></div>
            </div>
            <footer>
                &copy; 2023 Core Four
            </footer>
        </div>
    );
}

export default Movie;

import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import NewHope from './images/anewhope.jpg';
import { Link } from 'react-router-dom';

import * as images from './images'; 

function App() {

    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/all')
        .then(res => {
            return res.json();
        }).then(data => {
            // console.log(data);
            setdata(data)
        })
    }, []);


    const images = require.context('./images', false, /\.(png|jpe?g|svg)$/);
    const imagesArray = images.keys().map(images);

    return (
        <div className="App">
            <header>  
                <h1>Core Four</h1>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/NewMovie">Add Movie</Link>
                </div>
            </header>

            <article>
                <div className="searchContent"></div>
                <div className="reviewCards" id="movieCards">
                    {
                        data.map((obj, index) => (
                            <div className="card" key={obj + index.toString()}>
                                <img src={images.modifiedText} />
                                <div className="cardBody backgroundInfo">
                                    <h1>{obj["title"]}</h1>
                                    <p>{obj["description"]}</p>
                                    <div className="moreinfocenter">
                                        <Link to="/Movie" state={{ data: obj }}>More Information
                                        </Link>
                                    </div>
                                </div>
                                <div className="rating backgroundInfo">
                                    <h2>{obj['coreReviews']['matt']['rating'] + obj['coreReviews']['nick']['rating'] + obj['coreReviews']['brad']['rating'] + obj['coreReviews']['sherm']['rating'] != -4 ? ((obj['coreReviews']['matt']['rating'] + obj['coreReviews']['nick']['rating'] + obj['coreReviews']['brad']['rating'] + obj['coreReviews']['sherm']['rating']) / 4).toFixed(1) : "N/R"}</h2>
                                </div>
                                <div className="userrating backgroundInfo">
                                    <h2>{'N/R'}</h2>
                                </div>
                            </div>
                        ) 
                    
                    )}
                    
                </div>
            </article>

            <footer>
                &copy; 2023 Core Four
            </footer>
        </div>
    );
}

export default App;
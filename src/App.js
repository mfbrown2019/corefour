import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import NewHope from './images/anewhope.jpg';
import { Link } from 'react-router-dom';

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

    var core = []
    

    data.map((obj, index) => {

        let corefourscore = 0;
        let coreReviewed = 0;
        
        if (obj['coreReviews']['matt']['rating'] != -1) {
            corefourscore = corefourscore + obj['coreReviews']['matt']['rating'];
            coreReviewed = coreReviewed + 1;
        }
        console.log(corefourscore)
        if (obj['coreReviews']['nick']['rating'] != -1) {
            corefourscore = corefourscore + obj['coreReviews']['nick']['rating'];
            coreReviewed = coreReviewed + 1;
        }
        console.log(corefourscore)
        if (obj['coreReviews']['brad']['rating'] != -1) {
            corefourscore = corefourscore + obj['coreReviews']['brad']['rating'];
            coreReviewed = coreReviewed + 1;
        }
        console.log(corefourscore)
        if (obj['coreReviews']['sherm']['rating'] != -1) {
            corefourscore = corefourscore + obj['coreReviews']['sherm']['rating'];
            coreReviewed = coreReviewed + 1;
        }
        if (corefourscore == 0) {
            core.push("N/R")
        } else {
            core.push((corefourscore / coreReviewed).toFixed(1));
        }
        
    })
    console.log(core)


    const items = [];
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => {
            images[item.replace("./", "")] = r(item);
            return images;
        });
        return images;
    }

    const images = importAll(
        require.context("./images", false, /\.(png|jpe?g|svg)$/)
    );
    for (const [, [, value]] of Object.entries(Object.entries(images))) {
        items.push(value);
    }

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
                                <img src={'./' + obj['img'].default} />
                                <div className="cardBody backgroundInfo">
                                    <h1>{obj["title"]}</h1>
                                    <p>{obj["description"]}</p>
                                    <div className="moreinfocenter">
                                        <Link to="/Movie" state={{ data: obj }}>More Information
                                        </Link>
                                    </div>
                                </div>
                                <div className="rating backgroundInfo">
                                    <h2>{core[index]}</h2>
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
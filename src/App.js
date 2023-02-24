import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

    const [values, setValues] = useState([]);
    const [eddited, setEddited] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/all')
        .then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            setValues(data)
        })
    }, []);







    return (
        <div className="App">
            <header>  
                <h1>Core Four</h1>
                <div className="searchDiv">
                    <input className="headerInput" type="text" placeholder="Filter..."/>
                </div>
                <div className="submitDiv">
                    <button>Filter</button>
                </div>
                <form action="pages/addmovie.html">
                    <button>Add Movie</button>
                </form>
            </header>

            <article>
                <div className="searchContent"></div>
                <div className="reviewCards" id="movieCards">
                    {/* {
                        values.map((obj) => (
                            <div className="card">
                                <img src={obj[0]['img']} />
                                <div className="cardBody backgroundInfo">
                                    <h1>{obj[0]["title"]}</h1>
                                    <p>{obj[0]["description"]}</p>
                                    <div className="moreinfocenter">
                                        <a href={obj[0]['page']}>More Information</a>
                                    </div>
                                </div>
                                <div className="rating backgroundInfo">
                                    <h2>{4}</h2>
                                </div>
                                <div className="userrating backgroundInfo">
                                    <h2>{4}</h2>
                                </div>
                            </div>
                        ) 
                    
                    )} */}
                    
                </div>
            </article>

            <footer>
                &#169 2023 M.M.G.A.
            </footer>
        </div>
    );
}

export default App;
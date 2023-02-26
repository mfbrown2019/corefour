
import './ToRate.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ToRate() {

    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/all')
        .then(res => {
            return res.json();
        }).then(data => {
            // console.log(data);
            setdata(data)
        })
    }, []);

    var mattaverage = 0
    var nickaverage = 0
    var bradaverage = 0
    var shermaverage = 0

    var mattamount = 0
    var nickamount = 0
    var bradamount = 0
    var shermamount = 0

    var mattrate = []
    var nickrate = []
    var bradrate = []
    var shermrate = []

    var mattwhy = []
    var nickwhy = []
    var bradwhy = []
    var shermwhy = []

    data.map((obj, index) => {
        if (obj['coreReviews']['matt']['rating'] == -1){
            mattrate.push([obj['title'], data[index]]);
        } else {
            mattaverage = mattaverage + obj['coreReviews']['matt']['rating'];
            mattamount = mattamount + 1
        }
        if (obj['coreReviews']['matt']['why'] == ""){
            mattwhy.push([obj['title'], data[index]]);
        }
        if (obj['coreReviews']['nick']['rating'] == -1){
            nickrate.push([obj['title'], data[index]]);
        } else {
            nickaverage = nickaverage + obj['coreReviews']['nick']['rating'];
            nickamount = nickamount + 1
        }
        if (obj['coreReviews']['nick']['why'] == ""){
            nickwhy.push([obj['title'], data[index]]);
        }
        if (obj['coreReviews']['brad']['rating'] == -1){
            bradrate.push([obj['title'], data[index]]);
        } else {
            bradaverage = bradaverage + obj['coreReviews']['brad']['rating'];
            bradamount = bradamount + 1
        }
        if (obj['coreReviews']['brad']['why'] == ""){
            bradwhy.push([obj['title'], data[index]]);
        }
        if (obj['coreReviews']['sherm']['rating'] == -1){
            shermrate.push([obj['title'], data[index]]);
        } else {
            shermaverage = shermaverage + obj['coreReviews']['sherm']['rating'];
            shermamount = shermamount + 1
        }
        if (obj['coreReviews']['sherm']['why'] == ""){
            shermwhy.push([obj['title'], data[index]]);
        }

        
    })

    var mattaverage = (mattaverage / mattamount).toFixed(1)
    var nickaverage = (nickaverage / nickamount).toFixed(1)
    var bradaverage = (bradaverage / bradamount).toFixed(1)
    var shermaverage = (shermaverage / shermamount).toFixed(1)


    return (
        <div>
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


            <div className='CoreFour'>
                <div className='mattToRate'>
                    <div className='top'>
                        <h3 className='rating'>Matt</h3>
                        <h3 className='rating'>{mattaverage}</h3>
                    </div>
                    <div className='torate'>
                        {
                            mattrate.map((obj, index) => {
                                return <div key={index}>
                                    <Link className='link' to="/Movie" state={{ data: obj[1] }}>{obj[0]}</Link>
                                </div>
                            })
                        }
                    </div>
                    <div className='line'></div>
                    <div className='torate'>
                    {
                        mattwhy.map((obj, index) => {
                            return <div key={index}>
                                <Link className='link' to="/Movie" state={{ data: obj[1] }}>{obj[0]}</Link>
                            </div>
                        })
                    }
                    </div>
                </div>
                <div className='nickToRate'>
                <div className='top'>
                        <h3 className='rating'>Nick</h3>
                        <h3 className='rating'>{nickaverage}</h3>
                    </div>
                    <div className='torate'>
                    {
                        nickrate.map((obj, index) => {
                            return <div key={index}>
                                <Link className='link' to="/Movie" state={{ data: obj[1] }}>{obj[0]}</Link>
                            </div>
                        })
                    }
                    </div>
                    <div className='line'></div>
                    <div className='torate'>
                    {
                        nickwhy.map((obj, index) => {
                            return <div key={index}>
                                <Link className='link' to="/Movie" state={{ data: obj[1] }}>{obj[0]}</Link>
                            </div>
                        })
                    }
                    </div>
                </div>
                <div className='bradToRate'>
                    <div className='top'>
                        <h3 className='rating'>Brad</h3>
                        <h3 className='rating'>{bradaverage}</h3>
                    </div>
                    <div className='torate'>
                    {
                        bradrate.map((obj, index) => {
                            return <div key={index}>
                                <Link className='link' to="/Movie" state={{ data: obj[1] }}>{obj[0]}</Link>
                            </div>
                        })
                    }
                    </div>
                    <div className='line'></div>
                    <div className='torate'>
                    {
                        bradwhy.map((obj, index) => {
                            return <div key={index}>
                                <Link className='link' to="/Movie" state={{ data: obj[1] }}>{obj[0]}</Link>
                            </div>
                        })
                    }
                    </div>
                </div>
                <div className='shermToRate'>
                <div className='top'>
                        <h3 className='rating'>Sherm</h3>
                        <h3 className='rating'>{shermaverage}</h3>
                    </div>
                    <div className='torate'>
                    {
                        shermrate.map((obj, index) => {
                            return <div key={index}>
                                <Link className='link' to="/Movie" state={{ data: obj[1] }}>{obj[0]}</Link>
                            </div>
                        })
                    }
                    </div>
                    <div className='line'></div>
                    <div className='torate'>
                    {
                        shermwhy.map((obj, index) => {
                            return <div key={index}>
                                <Link className='link' to="/Movie" state={{ data: obj[1] }}>{obj[0]}</Link>
                            </div>
                        })
                    }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ToRate;

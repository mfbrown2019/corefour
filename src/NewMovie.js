
import './AddMovie.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NewMovie() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [videos, setVideos] = useState("");
    const [cast, setCast] = useState("");
    const [crew, setCrew] = useState("");
    const [studio, setStudio] = useState("");
    const [duration, setDuration] = useState("");
    const [rated, setRated] = useState("");
    const [releaseData, setReleaseData] = useState("");
    const [genre, setGenre] = useState("");
    const [lowerTitle, setLowerTitle] = useState("");


   



    const handleSubmit = (event) => {
        event.preventDefault();

        if (title == "" || description == "" || videos == "" || cast == "" || studio == "" || duration == "" || rated == "" || releaseData == "" || genre == ""){
            return
        }



        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: Math.random(),
                title: title,
                coreReviews: {
                    matt : {
                        rating: -1,
                        why: ""
                    },
                    nick: {
                        rating: -1,
                        why: ""
                    },
                    brad: {
                        rating: -1,
                        why: ""
                    },
                    sherm: {
                        rating: -1,
                        why: ""
                    }
                },
                description: description,
                img: `img/${lowerTitle}.jpg`,
                videos: videos,
                cast: cast,
                crew: crew,
                studio: studio,
                duration: duration,
                rated: rated,
                releasedate: releaseData,
                genre: genre,
                userReviews: [
                    {
                        name: "",
                        rating: -1,
                        why: ""
                    }
                ]
            }),
        };
        
        fetch("http://localhost:3001/all", requestOptions)


        setTitle("")
        setDescription("")
        setVideos("")
        setCast("")
        setCrew("")
        setStudio("")
        setDuration("")
        setRated("")
        setReleaseData("")
        setGenre("")
        setLowerTitle("")
     
    };

   

    

    return (
        <div className="Movie">
            
            <header>
                <h1>Core Four</h1>

                <div>
                    <Link to="/">Home</Link>
                    <Link to="/ToRate">To Rate</Link>
                    <Link to="/NewMovie">Add Movie</Link>
                </div>
            </header>

            <form className="inputs" onSubmit={handleSubmit}>
                <input value={title} name="title" className="title" type="text" placeholder="Title" onChange={(event) => {
                    setTitle(event.target.value);
                    setLowerTitle(title.trim().toLowerCase().replace(/\s/g, ""));

                    console.log(lowerTitle, 'hi');
                }
                }/>
                <input value={crew} name="crew" type="text" placeholder="Director..."  onChange={(event) =>
                    setCrew(event.target.value)
                }/>
                <input value={studio} name="studio" type="text" placeholder="Studio..."  onChange={(event) =>
                    setStudio(event.target.value)
                }/>
                <input value={genre} name="genre" type="text" placeholder="Genre..."  onChange={(event) =>
                    setGenre(event.target.value)
                }/>
                <div className="three">
                    <input value={videos} name="videos" type="text" placeholder="Trailer..." autoComplete='off' onChange={(event) =>
                        setVideos(event.target.value)
                    }/>
                    <input value={rated} name="rated" type="text" placeholder="Rated..."  onChange={(event) =>
                        setRated(event.target.value)
                    }/>
                </div>
                <div className="three">
                    <input value={duration} autoComplete='off' name="duraiton" type="text" placeholder="Duration..."  onChange={(event) =>
                        setDuration(event.target.value)
                    }/>
                    <input value={releaseData} autoComplete='off' name="release-date" type="text" placeholder="Release Date..."  onChange={(event) =>
                        setReleaseData(event.target.value)
                    }/>
                </div>
                <textarea value={cast} className="cast" name="cast" id="cast" cols="30" rows="5" placeholder="Cast"  onChange={(event) =>
                    setCast(event.target.value)
                }></textarea>
                <textarea value={description} maxLength="300" name="description" id="description" cols="30" rows="5" placeholder="Description..."  onChange={(event) =>
                    setDescription(event.target.value)
                }></textarea>
                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
}

export default NewMovie;

import React,{useState,useEffect} from 'react'
import YouTube from "react-youtube"
import MovieTrailer from "movie-trailer"
import "../App.css"
function Video() {
    const [movieURL, setmovieURL] = useState("")
    const [movie,setMovie]=useState("")
    useEffect(() => {
       
    }, [movieURL])
    const Search=()=>{
        //console.log(movie)
        if(movie===""){
            alert("You need to search by title name")
        }
        else{
            MovieTrailer(movie)
            .then((url)=>{
                // console.log(url)
                // console.log(url.indexOf("?"))
                // console.log(url.charAt(url.indexOf("?")))
                // console.log(url.slice(url.indexOf("?")+3))
                setmovieURL(url.slice(url.indexOf("?")+3))
            })
            .catch((e)=>{
                alert("Cannot fint your request Sorry try somthing else")
                console.log(e)
            })
        }
       
        
    }
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    return (
        <div className="container text-center my-3 p-3 pb-5" id="box">
            <h1>MYtube Movie trailer</h1>
            <input type="text" className="mx-4 my-3" placeholder="search" id="input_f" onChange={e=>setMovie(e.target.value)} />
            <button className="btn btn-danger my-2" onClick={()=>Search()}>Search</button>
            <div>
            <YouTube videoId={movieURL} opts={opts} />
            </div>
        </div>
    )
}

export default Video

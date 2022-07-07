import {useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import NavBar from "./components/NavBar";
import AddMovie from "./components//AddMovie";
import MovieList from "./components/MovieList";


function App() {
    const [word, setWord] = useState("")
    const [rating, setRating] = useState(1)
    const [movies, setMovies] = useState( [{
    id:1,
    title: "Mr. Robot",
    posterUrl: "//https://fr.web.img3.acsta.net/pictures/15/05/06/16/13/020977.jpg",
    rate: 4,
    description:
        "Elliot Alderson is a young computer scientist living in New York, who works as a computer security engineer for Allsafe Security. This one constantly fighting against a disorder of social anxiety and depression.",
    trailer: "https://www.youtube.com/watch?v=xIBiJ_SzJTA",
},
{id:2,
    title: "The good doctor",
    posterUrl: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
    rate: 4.2,
    description:
        "Shaun Murphy, a young surgeon with autism and Savant syndrome, is recruited into the surgical unit of a prestigious hospital.",
    trailer: "https://www.youtube.com/embed/msJggy8xtmI",
},
{id:3,
    title: "Game of thrones",
    posterUrl:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F11%2Fjs20-20tease.jpeg",
    rate: 2.7,
    description:
        "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    trailer: "https://www.youtube.com/embed/gcTkNV5Vg1E",
},

{id:4,
    title: "Breaking bad",
    posterUrl:
        "https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    rate: 3.5,
    description:
        "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    trailer: "https://www.youtube.com/embed/lrcqbavlbyQ",
},
{id:5,
    title: "Prison Break",
    posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/5/54/Prison-break-season-4-dvd.jpg",
    rate: 1.2,
    description:
        "Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside.",
    trailer: "https://www.youtube.com/embed/AL9zLctDJaU",
},
{id:6,
    title: "Elite",
    posterUrl:
        "https://fr.web.img6.acsta.net/c_310_420/pictures/21/05/24/17/52/1035233.jpg",
    rate: 4.1,
    description:
        "When three middle-class teenagers find themselves admitted to a prestigious private school in Spain, tensions between them and the students quickly escalate and end in murder.",
    trailer: "https://www.youtube.com/watch?v=QNwhAdrdwp0",
}])

    const handleAdd = (newMovie) => {
    setMovies([...movies,newMovie]);
    }
    const getData=(keyword)=>{
    setWord(keyword)
    }
    const dataRate=(rate)=>{
    setRating(rate)
    }
    
    

return ( 
    <div>
    <NavBar getData={getData} dataRate={dataRate} />
    <AddMovie handleAdd={handleAdd} />
    <MovieList movies={movies.filter((movie) => movie.rate>=rating && movie.title.toLowerCase().includes(word.trim().toLowerCase()) )}/>
   
</div>
    
);
}
export default App;
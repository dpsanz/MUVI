import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";


function PaginaFilme(){

    const {id} = useParams();

    const [filme, setFilme] = useState([])

    const apiKey='api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w1280/'

    useEffect( () => {
        fetch(`${urlBase}${id}?${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilme(response))
        .catch(erro => console.log(erro))
    },[id])

    return(
        <>
        <main className="h-screen w-full bg-cover" style={{ backgroundImage: `url(${urlImg}${filme.backdrop_path})` }}>

        
        <div className="flex flex-col h-screen w-full justify-center backdrop-blur-lg">
        <h1 className="text-white text-4xl text-center" >{filme.title}</h1>
        <img className="self-center hover:h-96 transition-all h-80 m-10" src={`${urlImg}${filme.poster_path}`} alt={filme.title} />
            <p className="text-white text-xl text-justify px-40 drop-shadow-2xl"> {filme.overview}</p>
        </div>
        </main>
        </>
        

    )
}

export default PaginaFilme
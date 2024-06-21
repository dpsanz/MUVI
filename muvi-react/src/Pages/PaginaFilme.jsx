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
        <div className="flex flex-col">
            <img className="" src= {`${urlImg}${filme.backdrop_path}`} alt="" />
            <h1 className="text-white text-center" >{filme.title}</h1>
            <p className="text-white text-center"> {filme.overview}</p>
        </div>
        </>
        

    )
}

export default PaginaFilme
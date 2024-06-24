// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Filmes() {
    const [filmes, setFilmes] = useState([]);
    const [page] = useState(1);

    const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e';
    const urlBase = 'https://api.themoviedb.org/3/movie/';
    const urlImg = 'https://image.tmdb.org/t/p/w342/';

    const fetchMovies = (pageNum) => {
    console.log(`Fetching page ${pageNum}`);
    fetch(`${urlBase}popular?${apiKey}&page=${pageNum}`)
        .then(response => response.json())
        .then(response => {
            console.log('Fetched movies:', response.results);
            setFilmes(prevFilmes => [...prevFilmes, ...response.results]);
        })
        .catch(erro => console.log(erro));
};

    useEffect(() => {
        fetchMovies(page);
    }, [page]);


    return (
        <>
            <main className="bg-black">
                <div className='flex flex-col items-center'>
                    <h1 className='text-3xl mt-3 mb-3 tracking-tight text-teal-500 font-bold bg-clip-text'>
                        FILMES
                    </h1>
                    
                    <div className='w-full flex justify-center'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mx-10">
                            {filmes.slice(0,20).map(filme => (
                                <div className="card-filme flex flex-col items-center" key={filme.id}>
                                    <Link to={`${filme.id}`} className="text-teal-800 mt-1 hover:tracking-widest transition-all font-bold">
                                        <img className="self-center opacity-60 hover:opacity-100 transition-all" src={`${urlImg}${filme.poster_path}`} alt={filme.title} />
                                    </Link>
                                    <h1 className="text-white text-center mt-2 font-bold text-2xl">{filme.title}</h1>
                                    <Link to={`${filme.id}`} className="text-teal-800 mt-1 hover:tracking-widest transition-all font-bold">Ver Mais</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Filmes;

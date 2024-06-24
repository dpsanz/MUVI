// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Filmes() {
    const [filmesPopulares, setFilmesPopulares, ] = useState([]);
    const [filmesEmCartaz, setFilmesEmCartaz, ] = useState([]);
    const [proximosLancamentos, setProximosLancamentos] = useState([])
    const [page] = useState(1);

    const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e';
    const urlBase = 'https://api.themoviedb.org/3/movie/';
    const urlImg = 'https://image.tmdb.org/t/p/w342/';

    const fetchPopularMovies = (pageNum) => {
        fetch(`${urlBase}popular?${apiKey}&page=${pageNum}`)
            .then(response => response.json())
            .then(response => {
                setFilmesPopulares(prevFilmes => [...prevFilmes, ...response.results]);
            })
            .catch(erro => console.log(erro));
    };

    const fetchNowPlayingMovies = (pageNum) => {
        fetch(`${urlBase}now_playing?${apiKey}&page=${pageNum}`)
            .then(response => response.json())
            .then(response => {
                setFilmesEmCartaz(prevFilmes => [...prevFilmes, ...response.results]);
            })
            .catch(erro => console.log(erro));
    };

    const fetchProximosLancamentos = (pageNum) => {
        fetch(`${urlBase}upcoming?${apiKey}&page=${pageNum}`)
            .then(response => response.json())
            .then(response => {
                setProximosLancamentos(prevFilmes => [...prevFilmes, ...response.results]);
            })
            .catch(erro => console.log(erro));
    };

    useEffect(() => {
        fetchPopularMovies(page);
        fetchNowPlayingMovies(page);
        fetchProximosLancamentos(page);
    }, [page]);

    return (
        <>
            <main className="bg-black">
                <div className='flex flex-col items-center'>
                    <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-100 mb-8">FILMES POPULARES</h1>
                    
                    <div className='w-full flex justify-center'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mx-10">
                            {filmesPopulares.slice(0,15).map(filme => (
                                <div className="card-filme flex flex-col items-center" key={filme.id}>
                                    <Link to={`${filme.id}`} className="text-teal-800 mt-1 hover:tracking-widest transition-all font-bold">
                                        <img className="self-center opacity-70 hover:opacity-100 transition-all" src={`${urlImg}${filme.poster_path}`} alt={filme.title} />
                                    </Link>
                                    <h1 className="text-white text-center mt-2 font-bold text-2xl">{filme.title}</h1>
                                    <Link to={`${filme.id}`} className="text-teal-800 mt-1 hover:tracking-widest transition-all font-bold">Ver Mais</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-100 my-8">
                        FILMES EM CARTAZ
                    </h1>
                    
                    <div className='w-full flex justify-center'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mx-10">
                            {filmesEmCartaz.slice(0,8).map(filme => (
                                <div className="card-filme flex flex-col items-center" key={filme.id}>
                                    <Link to={`${filme.id}`} className="text-teal-800 mt-1 hover:tracking-widest transition-all font-bold">
                                        <img className="self-center opacity-70 hover:opacity-100 transition-all" src={`${urlImg}${filme.poster_path}`} alt={filme.title} />
                                    </Link> 
                                    <h1 className="text-white text-center mt-2 font-bold text-2xl">{filme.title}</h1>
                                    <Link to={`${filme.id}`} className="text-teal-800 mt-1 hover:tracking-widest transition-all font-bold">Ver Mais</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center mt-8'>
                    <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-100 mb-8">
                        PRÓXIMOS LANÇAMENTOS
                    </h1>
                    
                    <div className='w-full flex justify-center mb-5'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mx-10">
                            {proximosLancamentos.slice(0,15).map(filme => (
                                <div className="card-filme flex flex-col items-center" key={filme.id}>
                                    <Link to={`${filme.id}`} className="text-teal-800 mt-1 hover:tracking-widest transition-all font-bold">
                                        <img className="self-center opacity-70 hover:opacity-100 transition-all" src={`${urlImg}${filme.poster_path}`} alt={filme.title} />
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

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Filmes() {
    const [filmes, setFilmes] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e';
    const urlBase = 'https://api.themoviedb.org/3/movie/';
    const urlImg = 'https://image.tmdb.org/t/p/w342/';

    const fetchMovies = (pageNum) => {
        fetch(`${urlBase}popular?${apiKey}&page=${pageNum}`)
            .then(response => response.json())
            .then(response => {
                setFilmes(prevFilmes => [...prevFilmes, ...response.results]);
                setHasMore(response.page < response.total_pages);
            })
            .catch(erro => console.log(erro));
    };

    useEffect(() => {
        fetchMovies(page);
    }, [page]);

    const loadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <>
            <main className="bg-black">
                <div className='flex flex-col items-center'>
                    <h1 className='text-3xl mt-3 mb-3 tracking-tight text-white bg-clip-text'>
                        FILMES
                    </h1>
                    <div className='w-full flex justify-center'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 ">
                            {filmes.map(filme => (
                                <div className="card-filme flex flex-col items-center" key={filme.id}>
                                    <img className="self-center" src={`${urlImg}${filme.poster_path}`} alt={filme.title} />
                                    <h1 className="text-white text-center mt-2">{filme.title}</h1>
                                    <Link to={`${filme.id}`} className="text-purple-800 mt-1">Ver Mais</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    {hasMore && (
                        <button 
                            onClick={loadMore} 
                            className="mt-4 py-2 px-4 text-white hover:underline"
                        >
                            Carregar Mais
                        </button>
                    )}
                </div>
            </main>
        </>
    );
}

export default Filmes;

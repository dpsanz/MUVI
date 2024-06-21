// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Carrossel from '../Componentes/Carrossel/Carrossel';

function Home() {
    const [filmes, setFilmes] = useState([]);
    const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e';
    const urlBase = 'https://api.themoviedb.org/3/movie/';
    const urlBackdrop = 'https://image.tmdb.org/t/p/w1280/';
    const urlPoster = 'https://image.tmdb.org/t/p/w342/';

    useEffect(() => {
        fetch(`${urlBase}upcoming?${apiKey}`)
            .then(response => response.json())
            .then(response => setFilmes(response.results))
            .catch(erro => console.log(erro));
    }, []);

    return (
        <main className="bg-black min-h-screen">
            <div className="flex justify-center items-center bg-black">
                <Carrossel autoSlide={true}>
                    {filmes.slice(0, 5).map((filme, index) => (
                        <img key={index} src={`${urlBackdrop}${filme.backdrop_path}`} alt={filme.title} className="object-cover w-full h-100" />
                    ))}
                </Carrossel>
            </div>


            <div className='flex flex-col items-center mt-10'>
                <div className='w-full flex justify-center'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                        {filmes.slice(0, 3).map(filme => (
                            <div className="card-filme flex flex-col items-center p-3" key={filme.id}>
                                <img className="self-center" src={`${urlPoster}${filme.poster_path}`} alt={filme.title} />
                                <h1 className="text-xl font-bold text-white text-center mt-2">{filme.title}</h1>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;

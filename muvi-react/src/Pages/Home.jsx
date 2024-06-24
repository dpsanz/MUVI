// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Componentes/Banner/Banner';

function Home() {
    const [filmes, setFilmes] = useState([]);
    const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e';
    const urlBase = 'https://api.themoviedb.org/3/movie/';
    const urlImg = 'https://image.tmdb.org/t/p/w342/';
    
    // eslint-disable-next-line no-unused-vars
    const urlBackdrop = 'https://image.tmdb.org/t/p/w1280/';

    useEffect(() => {
        fetch(`${urlBase}upcoming?${apiKey}`)
            .then(response => response.json())
            .then(response => setFilmes(response.results))
            .catch(erro => console.log(erro));
    }, []);

    return (
        <main className="bg-black min-h-screen">

{filmes.length > 0 && <Banner id={filmes[0].id.toString()} />}
            <div className='flex flex-col items-center'>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-100 mb-8">FILMES POPULARES</h1>
                <div className='w-full flex justify-center'>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mx-10">

                        {filmes.slice(0, 20).map(filme => (
                            <div className="card-filme flex flex-col items-center" key={filme.id}>

                                <Link to={`filmes/${filme.id}`} className="text-teal-800 mt-1 hover:tracking-widest transition-all font-bold">
                                <img className="self-center opacity-70 hover:opacity-100 transition-all" src={`${urlImg}${filme.poster_path}`} alt={filme.title} />
                                </Link>
                                <h1 className="text-xl font-bold text-white text-center mt-2 mb-5">{filme.title}</h1>
                            </div>
                            
                        ))}
                        
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;

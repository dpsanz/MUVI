/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Filmes() {
    const [filmesPopulares, setFilmesPopulares] = useState([]);
    const [filmesEmCartaz, setFilmesEmCartaz] = useState([]);
    const [proximosLancamentos, setProximosLancamentos] = useState([]);
    const [page] = useState(1);

    const [searchInput, setSearchInput] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);

    const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e';
    const urlBase = 'https://api.themoviedb.org/3/movie/';
    const urlImg = 'https://image.tmdb.org/t/p/w342/';

    useEffect(() => {
        fetchPopularMovies(page);
        fetchNowPlayingMovies(page);
        fetchProximosLancamentos(page);
    }, [page]);

    useEffect(() => {
        filterMovies();
    }, [filmesPopulares, filmesEmCartaz, proximosLancamentos, searchInput]);

    const fetchPopularMovies = (pageNum) => {
        fetch(`${urlBase}popular?${apiKey}&page=${pageNum}`)
            .then(response => response.json())
            .then(response => {
                setFilmesPopulares(response.results);
            })
            .catch(erro => console.log(erro));
    };

    const fetchNowPlayingMovies = (pageNum) => {
        fetch(`${urlBase}now_playing?${apiKey}&page=${pageNum}`)
            .then(response => response.json())
            .then(response => {
                setFilmesEmCartaz(response.results);
            })
            .catch(erro => console.log(erro));
    };

    const fetchProximosLancamentos = (pageNum) => {
        fetch(`${urlBase}upcoming?${apiKey}&page=${pageNum}`)
            .then(response => response.json())
            .then(response => {
                setProximosLancamentos(response.results);
            })
            .catch(erro => console.log(erro));
    };

    const filterMovies = () => {
        if (searchInput.trim() === '') {
            setFilteredMovies([]);
            return;
        }

        const lowerCaseInput = searchInput.toLowerCase();

        const todosFilmes = [
            ...filmesPopulares,
            ...filmesEmCartaz,
            ...proximosLancamentos
        ];

        const SoloFilmes = Array.from(new Set(todosFilmes.map(filme => filme.id)))
            .map(id => todosFilmes.find(filme => filme.id === id));

        const filtered = SoloFilmes.filter(filme => {
            const title = filme.title.toLowerCase();
            return title.startsWith(lowerCaseInput) || title.includes(lowerCaseInput);
        });

        setFilteredMovies(filtered);
    };

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <>
            <main className="bg-black">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-100 mb-8">
                        FILMES
                    </h1>
                    
                    <input
                        type="text"
                        value={searchInput}
                        onChange={handleInputChange}
                        placeholder="Pesquisar filmes..."
                        className="mb-6 p-2 rounded border border-gray-300"
                    />

                    {searchInput && (
                        <h1 className="text-xl text-white mb-6">
                            Resultados para: {searchInput}
                        </h1>
                    )}

                    <div className="w-full flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mx-10">
                            {(filteredMovies.length > 0 ? filteredMovies : filmesPopulares.slice(0, 15)).map(filme => (
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

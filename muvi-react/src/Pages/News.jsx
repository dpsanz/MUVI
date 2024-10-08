// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import noticiasData from '../../noticias.json';

const Noticias = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredArticles, setFilteredArticles] = useState(noticiasData);

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);

        const filteredResults = noticiasData.filter((noticia) =>
            noticia.titulo.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredArticles(filteredResults);
    };

    return (
        <main className='bg-black'>
            <div className="flex flex-col items-center bg-black">
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-100 mb-8">
                    NOTÍCIAS
                </h1>

                <input
                    type="text"
                    value={searchInput}
                    onChange={handleInputChange}
                    placeholder="Pesquisar notícias..."
                    className="mb-6 p-2 rounded border border-gray-300"
                />

                <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-10 px-10">
                    {filteredArticles.slice(0, 5).map((noticia, index) => (
                        <div key={noticia.id} className="p-4 shadow-md relative"
                            style={{
                                backgroundImage: `url(/public/${index + 1}.png)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                color: 'white',
                                borderRadius: '8px',
                                marginBottom: '1rem',
                                height: '400px',
                            }}
                        >
                            <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>
                            <div className="flex flex-col items-center justify-center h-full relative z-10">
                                <h2 className="text-lg font-bold mb-2">{noticia.titulo}</h2>
                                <p className="text-gray-400">{noticia.descricao}</p>
                                <p className="text-gray-400 text-sm mt-2">Publicado em: {formatarData(noticia.dataPublicacao)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

// Função auxiliar para formatar a data
function formatarData(dataString) {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default Noticias;

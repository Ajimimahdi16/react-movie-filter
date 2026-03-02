import { useState, useEffect } from 'react'

  const move=[
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]
function App() { 
  const [mouves, setMouves] = useState(move); // Stato per i film
  const [search, setSearch] = useState(''); // Stato per la ricerca


  const [filteredMovies, setFilteredMovies] = useState(move); // Stato per i film filtrati
  const [searchMuove, setSearchMuove] = useState(''); // Stato per il filtro di genere
  
// Funzione per cercare i film
  function cercaFilm(e){ 
    e.preventDefault();
  setMouves([...move,search.trim()]);
  setSearch('');


  }


  return (
    <>
    <h1>Lista dei Film</h1>
    <div>
      <input 
        type="text" 
        placeholder="Cerca per genere" 
        value={searchMuove}
        onChange={(e) => setSearchMuove(e.target.value)}
      />
      <button>cerca il genere</button>
    </div>
    <section className='lista-film'>
      <ul>
        {mouves.map((move, index) => (
          <li key={index}>{move.title}</li>
        ))}
      </ul>
    </section>
    <form onSubmit={cercaFilm}>
      <input 
        type="text" 
        name="search"  
        placeholder="Cerca film" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Cerca</button>
    </form>

      
    </>
  )
}

export default App

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../services/api";
import "./filme.css";

const API_KEY = 'bf74bdfa989ad758eb544fbbde7650e4';
const language = 'pt-BR';

function Film() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true); 

        const response = await api.get(`/movie/${id}`, {
          params: {
            api_key: API_KEY,
            language: language
          }
        });

        setMovie(response.data);
        setIsLoading(false);
      } catch(e) {
        console.error(e);
      }
    };

    if(!movie && !isLoading) {
      fetchMovieDetails();
    };
  
  }, [id, movie, isLoading]);

  if(isLoading) {
    console.log("Carregando...");
    return <div>Carregando...</div>
  };

  if(!movie) {
    console.log("Filme não encontrado.");
    return <h2>Filme não encontrado.</h2>
  };


  const data = new Date(movie.release_date).toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo'
  });

  return (
    <div className="filme-container">
      <article key={movie.id} className="filme-card">
        <strong>{movie.title}</strong>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
        <p>{movie.overview}</p>
        <strong>Data de lançamento: {data}</strong>
        <strong>Avaliação {movie.vote_average}</strong>
      </article>
    </div>
  );
}

export default Film;

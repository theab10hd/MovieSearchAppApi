// Home.tsx
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import MovieBox from "../components/MovieBox";
import Footer from "../components/Footer";
import type { Movie, SelectedMovie } from "../types";

const apiKey = "c6ddc0150b79e8525ead7398f143394b";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<SelectedMovie | null>(
    null
  );
  const [query, setQuery] = useState("");

  const fetchMovies = async () => {
    try {
      let url: string;
      if (query.trim() === "") {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
      } else {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
          query
        )}`;
      }

      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch movies");
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch full movie details by id
  const fetchMovieDetails = async (id: number) => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch movie details");
      const data: SelectedMovie = await response.json();
      setSelectedMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      setSelectedMovie(null); // clear when modal closes
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[var(--dark)] to-[var(--light-dark)] overflow-x-hidden">
      {isOpen && selectedMovie && (
        <div className="fixed z-50">
          <MovieBox
            setIsOpen={setIsOpen}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
        </div>
      )}
      <section className="sm:min-h-100 mt-16 md:mt-0 flex justify-center items-center flex-col">
        <Hero />
        <section className="min-h-10 w-screen flex flex-col md:flex-row justify-center items-center gap-2 sm:gap-4 p-5 md:px-20 md:py-2 mx-auto">
          <input
            type="text"
            placeholder="Search movies here..."
            value={query}
            className="bg-gray-300 px-4 py-3 sm:px-6 sm:py-4 rounded-md w-full md:w-100 lg:w-150 outline-none"
            onChange={(e) => setQuery(e.target.value)}
          />
        </section>
      </section>
      <h1 className="text-gray-300 text-xl text-center mb-4 tracking-wider">
        {query
          ? movies.length === 0
            ? "No Results Found"
            : "Search Results"
          : "Latest movies"}
      </h1>
      <div className="p-5 md:px-20 md:py-2 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            movie={movie}
            setIsOpen={setIsOpen}
            onSelectMovie={fetchMovieDetails}
          />
        ))}
      </div>
      <div className="sticky top-full left-0">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

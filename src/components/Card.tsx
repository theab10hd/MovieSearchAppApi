import type { Movie } from "../types";

interface CardProps {
  movie: Movie;
  setIsOpen: (open: boolean) => void;
  onSelectMovie: (id: number) => void;
}

const Card = ({ movie, setIsOpen, onSelectMovie }: CardProps) => {
  if (!movie.poster_path) return null;

  return (
    <div
      className="h-full w-full rounded-2xl bg-gradient-to-b from-gray-100 to-gray-400 outline-2 outline-[var(--blue)] overflow-hidden duration-300 ease-in-out hover:scale-102 hover:shadow-lg shadow-black cursor-pointer"
      onClick={() => {
        setIsOpen(true);
        onSelectMovie(movie.id);
      }}
    >
      <div className="relative w-full h-full">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          className="object-center object-cover rounded-2xl w-full h-full"
        />
        <div className="absolute top-0 left-0 bg-gradient-to-b from-black/0 to-black w-full h-full">
          <div className="absolute bottom-0 sm:left-1/2 sm:bottom-1/12 sm:-translate-x-1/2 w-full p-2 flex flex-col justify-center items-center text-center">
            <h1 className="text-white font-medium text-pretty uppercase text-xl sm:text-2xl md:text-3xl">
              {movie.title}
            </h1>
            <p className="text-yellow-400 text-sm">
              <i className="fa-solid fa-star me-2"></i>
              {Math.round(movie.vote_average)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import type { SelectedMovie } from "../types";

interface Props {
  setIsOpen: (open: boolean) => void;
  selectedMovie: SelectedMovie | null;
  setSelectedMovie: (movie: SelectedMovie | null) => void;
}

const MovieBox = ({ setIsOpen, selectedMovie, setSelectedMovie }: Props) => {
  if (!selectedMovie) return null;

  useGSAP(() => {
    gsap.from("#dar-box", {
      opacity: 0,
      duration: 0.3,
      ease: "power3.inOut",
    });

    gsap.from("#box", {
      opacity: 0,
      duration: 0.2,
      y: 50,
      ease: "power3.inOut",
    });

    gsap.from("#text", {
      opacity: 0,
      duration: 1,
      x: 100,
      ease: "power3.inOut",
    });
  });

  return (
    <div
      id="dark-box"
      className="flex justify-center items-center w-screen h-screen bg-black/80"
    >
      <div
        id="box"
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl outline-2 outline-[var(--blue)]
      inset-0 z-50 w-[calc(100%-2rem)] h-[calc(100%-2rem)] sm:w-[calc(100%-10rem)] sm:h-[calc(100%-10rem)] md:bg-gradient-to-b from-[var(--dark)] to-[var(--light-dark)] overflow-hidden"
      >
        <button
          className="absolute right-0 top-0 text-white p-4 cursor-pointer z-60"
          onClick={() => {
            setIsOpen(false);
            setSelectedMovie(null);
          }}
        >
          <i className="fa-solid fa-xmark fa-2xl text-white"></i>
        </button>
        {selectedMovie.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`}
            alt={selectedMovie.title}
            className="w-full h-full object-cover object-center"
          />
        ) : null}
        <div className="absolute h-full w-full top-0 left-0 p-5 lg:p-20 !bg-gradient-to-t sm:!bg-gradient-to-r from-black via-black/50 to-transparent">
          <div
            id="text"
            className="flex h-full w-full flex-col justify-end items-start gap-2"
          >
            <h1 className="text-2xl sm:text-4xl lg:text-6xl text-white font-bold">
              {selectedMovie.title}
            </h1>
            <p className="text-gray-200 xl:max-w-2/3 text-pretty text-sm md:text-md 2xl:text-lg">
              {selectedMovie.overview}
            </p>
            <div className="text-gray-200 ">
              <p className="text-yellow-400 text-sm md:text-lg">
                <i className="fa-solid fa-star me-2"></i>
                {selectedMovie.vote_average} / {selectedMovie.vote_count}
              </p>
              <p className="text-sm md:text-lg">
                <i className="fa-solid fa-calendar-days me-2 "></i>
                {selectedMovie.release_date}
              </p>
              <p className="text-sm md:text-lg">
                <i className="fa-solid fa-globe me-2"></i>
                {selectedMovie.original_language}
              </p>
              <p className="text-sm md:text-lg">
                {selectedMovie.adult ? "18+" : "No Restrictions"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;

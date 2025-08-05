import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.5,
      defaults: {
        duration: 1.5,
        ease: "power1.inOut",
        opacity: 0,
      },
    });

    tl.from("#text-1", { x: -200 }).from("#paragraph", {}); // opacity and duration are taken from defaults
  }, []);

  return (
    <div className="flex gap-5 flex-col justify-center items-center text-center p-5">
      <h1
        id="text-1"
        className="text-white font-bold text-4xl md:text-6xl uppercase"
      >
        Find Your{" "}
        <span
          id="text-2"
          className="text-[var(--blue)] font-bold tracking-wider"
        >
          Next
        </span>{" "}
        Favorite Movie
      </h1>
      <p id="paragraph" className="text-gray-300 text-sm md:text-md">
        Search thousands of movies, discover new releases, and explore top-rated
        films all in one place.
        <br />
        Start your movie adventure now!
      </p>
    </div>
  );
};

export default Hero;

const Footer = () => {
  return (
    <div>
      <div className="min-w-screen bg-[var(--dark)] mt-10 p-4 md:px-20 md:py-2">
        <div className="text-gray-300 text-center ">
          <h2 className="text-[var(--blue)] text-2xl font-bold">NEXT Movies</h2>
          <p className=" text-sm lg:text-md ">
            Search thousands of movies, discover new releases, and explore
            top-rated films all in one place.
          </p>
        </div>
      </div>
      <p className="bg-black text-center text-gray-400 text-sm py-4">
        Designed by Abhijith Gaganan
      </p>
    </div>
  );
};

export default Footer;

const Footer = () => {
  return (
    <div>
      <div className="min-h-60 min-w-screen bg-[var(--dark)] mt-10 p-5 md:px-20 md:py-2 mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="text-gray-300 text-center md:text-start ">
          <h2 className="text-[var(--blue)] text-2xl font-bold">NEXT Movies</h2>
          <p className="md:max-w-1/2 text-sm lg:text-md">
            Search thousands of movies, discover new releases, and explore
            top-rated films all in one place.
          </p>
        </div>
        <div className="text-gray-300 text-center md:text-end">
          <h3 className="text-white font-medium ">Help Links</h3>

          <ul className="text-center md:text-end mt-3">
            <li>Home</li>
            <li>API</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <p className="bg-black text-center text-gray-400 text-sm pb-4">
        Designed by Abhijith Gaganan
      </p>
    </div>
  );
};

export default Footer;

const Banner = () => {
  return (
    <div className="container mt-16 lg:mt-32">
      <div className="grid lg:grid-cols-[66%,34%] gap-6">
        {/* Left Banner */}
        <div className="relative h-[200px] md:h-[260px] bg-[url('/book-banner-1.jpg')] bg-cover bg-center rounded-xl p-8 md:p-16 shadow-lg hover:shadow-2xl transition duration-300">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 rounded-xl" />
          <div className="relative z-10">
            <p className="text-white text-lg md:text-xl font-medium">
              Up to 30% Off All Fiction Books
            </p>
            <h2 className="text-white font-extrabold text-xl sm:text-3xl max-w-[240px] leading-tight">
              Discover the Best Stories of 2023
            </h2>
            <a
              className="inline-block mt-6 text-white font-medium hover:text-accent transition"
              href="#"
            >
              Browse Collection
            </a>
          </div>
        </div>

        {/* Right Banner */}
        <div className="relative h-[260px] bg-[url('/book-banner-2.jpg')] bg-cover bg-center rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent rounded-xl" />
          <div className="absolute bottom-6 left-6 z-10">
            <h3 className="text-white text-xl font-bold">
              New Arrivals: Bestselling Authors
            </h3>
            <a
              className="mt-3 inline-block text-white font-medium hover:text-accent transition"
              href="#"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

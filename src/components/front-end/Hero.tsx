const Hero = () => {
  return (
    <div className="bg-[#E3EDF6] mt-4">
      <div className="container grid md:grid-cols-2 py-8">
        {/* Konten Kiri */}
        <div className="flex items-center">
          <div className="max-w-[450px] space-y-4">
            <p className="text-topHeadingSecondary">
              Starting at <span className="font-bold">$9.99</span>
            </p>

            <h1 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
              The Best Book Collection of 2025
            </h1>

            <h3 className="text-2xl font-['Oregano',cursive]">
              Exclusive offer <span className="text-red-600">-20%</span> off 
              on bestsellers this week
            </h3>

            <a
              className="inline-block bg-white rounded-md px-6 py-3 hover:bg-accent hover:text-white"
              href="#"
            >
              Browse Collection
            </a>
          </div>
        </div>

        {/* Gambar Kanan */}
        <div>
          <img className="ml-auto" src="/book-hero.png" alt="Books Collection" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

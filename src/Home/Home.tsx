import { cover } from "@/assets/images";

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen text-white relative overflow-hidden mt-16 md:mt-10">
      {/* Decorative elements */}
      <div className="absolute top-2 left-96 w-32 h-32 rounded-full bg-green-800/60 blur-md"></div>
      <div className="absolute top-20 right-80 w-3 h-3 bg-emerald-400 rotate-45 animate-bounce hidden md:block"></div>
      <div className="absolute top-60 right-60 w-4 h-4 bg-orange-500 rotate-45 animate-spin hidden md:block"></div>
      <div className="absolute bottom-60 right-20 w-5 h-5 bg-purple-500 rotate-45 hidden md:block"></div>

      <main className="container mx-auto px-6 py-12 md:py-20">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Creative Digital Marketing Agency
            </h1>
            <p className="text-gray-400 mb-8 max-w-lg">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
              sadipscing elitr
            </p>
            <button className="bg-emerald-400 hover:bg-emerald-500 text-black font-medium py-3 px-8 rounded-full transition-colors">
              Contact us
            </button>
          </div>

          <div className="lg:w-1/2 relative">
            <img
              src={cover}
              alt="Marketing Professional"
              width={500}
              height={600}
              loading="lazy"
              className="relative z-10"
            />

            {/* Social media icons */}
          </div>
        </div>

        {/* Featured Section */}
        <div className="mt-20 md:mt-32">
          <div className="flex flex-col md:flex-row items-center mb-8 space-y-4 md:space-y-0">
            <h2 className="text-xl font-semibold">Featured in</h2>
            <div className="md:h-6 md:w-px md:bg-gray-700 md:mx-6"></div>
            <h2 className="text-xl text-gray-500">Our Certification</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-gray-900 rounded-lg p-6 flex items-center justify-center">
              <span className="text-blue-500 font-bold text-xl">ASUS</span>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 flex items-center justify-center">
              <span className="text-blue-500 font-bold text-xl">Allianz</span>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 flex items-center justify-center">
              <span className="text-white font-bold text-xl">CHASE</span>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 flex items-center justify-center">
              <span className="text-white font-bold text-xl italic">
                The New York Times
              </span>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 flex items-center justify-center">
              <span className="text-blue-500 font-bold text-xl">LinkedIn</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

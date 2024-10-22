export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image Frame */}
          <div className="relative">
            <div className="rounded-lg h-[400px] relative overflow-hidden">
              <img 
                src="/profile-image.jpg" 
                alt="Profile" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
            {/* Blue Frame */}
            <div className="absolute -bottom-8 -right-4 w-full h-full border-[10px] border-[#4E85F0] rounded-lg z-[-1]"></div>
          </div>

          {/* Content */}
          <div className="p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-8">ABOUT ME</h2>
            <p className="text-gray-400 text-base mb-6 leading-relaxed">
              Lorem ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <div className="flex gap-4 mt-4">
              <button className="bg-gradient-to-r from-[#4E85F0] to-[#6464ED] text-white text-sm font-medium px-8 py-3 rounded hover:opacity-90 transition duration-300">
                HIRE ME
              </button>
              <button className="border border-[#4E85F0] text-[#4E85F0] text-sm font-medium px-8 py-3 rounded hover:bg-[#4E85F0] hover:text-white transition duration-300">
                RESUME
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
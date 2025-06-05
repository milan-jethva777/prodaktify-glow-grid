
const AboutUs = () => {
  return (
    <section className="relative z-10 py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-green-400 to-emerald-500 bg-clip-text text-transparent mb-6">
            About Prodaktify
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing image generation with cutting-edge AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-green-400">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              At Prodaktify, we believe in democratizing creativity through AI. Our platform empowers users to transform ordinary images into extraordinary visual experiences using state-of-the-art artificial intelligence.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether you're a designer, marketer, or creative enthusiast, our tools are designed to enhance your workflow and unlock new possibilities in visual content creation.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-green-400 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Advanced AI algorithms</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Lightning-fast processing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Professional quality results</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>User-friendly interface</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

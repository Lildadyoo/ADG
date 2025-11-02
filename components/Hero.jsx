import Link from 'next/link';
import Image from 'next/image';
import heroData from '../data/hero.json';

export default function Hero() {
  // Get hero images from JSON - Just drop images into /public/images/hero/ folder!
  const backgroundImage = heroData.backgroundImage.url;
  const backgroundFallback = heroData.backgroundImage.fallback;
  const featuredImage = heroData.featuredImage.url;
  const featuredFallback = heroData.featuredImage.fallback;

  return (
    <section className="relative bg-gradient-to-br from-adg-blue via-adg-blue to-adg-green text-white py-20 md:py-32 overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={heroData.backgroundImage.alt}
          fill
          className="object-cover opacity-20"
          priority
          unoptimized
          onError={(e) => {
            // Fallback to placeholder if local image doesn't exist
            if (e.target.src !== backgroundFallback) {
              e.target.src = backgroundFallback;
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-adg-blue/90 via-adg-blue/80 to-adg-green/90"></div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-adg-green opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* Animated Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white opacity-60 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white opacity-40 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-white opacity-50 rounded-full animate-ping delay-1500"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
              <span className="text-sm font-semibold">Transforming Lives Since [YEAR]</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Empowering</span>
              <span className="block text-adg-green">Communities</span>
              <span className="block">for a Better Future</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Join us in creating lasting positive change across Uganda through education, health, and sustainable community development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link 
                href="/get-involved" 
                className="group relative bg-white text-adg-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
              >
                <span>Donate Now</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
              <Link 
                href="/about" 
                className="group relative bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-adg-blue transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <span>Learn More</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
            </div>

            {/* Impact Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white border-opacity-20">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-adg-green mb-1">10K+</div>
                <div className="text-sm text-gray-200">Lives Impacted</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-gray-200">Communities</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-adg-green mb-1">5</div>
                <div className="text-sm text-gray-200">Programs</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Hero Image on Desktop */}
              <div className="relative mb-6 rounded-2xl overflow-hidden border-4 border-white border-opacity-30 shadow-2xl">
                <Image
                  src={featuredImage}
                  alt={heroData.featuredImage.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                  unoptimized
                  onError={(e) => {
                    // Fallback to placeholder if local image doesn't exist
                    if (e.target.src !== featuredFallback) {
                      e.target.src = featuredFallback;
                    }
                  }}
                />
              </div>
              
              {/* Icon Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-20">
                  <div className="text-5xl mb-3">👥</div>
                  <h3 className="font-semibold mb-2">Community</h3>
                  <p className="text-sm text-gray-200">Empowerment</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-20">
                  <div className="text-5xl mb-3">💧</div>
                  <h3 className="font-semibold mb-2">WASH</h3>
                  <p className="text-sm text-gray-200">Water Access</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-20">
                  <div className="text-5xl mb-3">📚</div>
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p className="text-sm text-gray-200">Learning</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-20">
                  <div className="text-5xl mb-3">🌟</div>
                  <h3 className="font-semibold mb-2">Empowerment</h3>
                  <p className="text-sm text-gray-200">Women & Youth</p>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-adg-green opacity-30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white opacity-20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm mb-2 text-gray-200">Scroll to explore</span>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}


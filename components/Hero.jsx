import Link from 'next/link';
import Image from 'next/image';
import heroData from '../data/hero.json';
import contentData from '../data/content.json';

export default function Hero() {
  // Get hero images from JSON - Just drop images into /public/images/hero/ folder!
  const backgroundImage = heroData.backgroundImage.url;
  const backgroundFallback = heroData.backgroundImage.fallback;

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Full-Width Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={heroData.backgroundImage.alt}
          fill
          className="object-cover"
          priority
          unoptimized
          onError={(e) => {
            // Fallback to placeholder if local image doesn't exist
            if (e.target.src !== backgroundFallback) {
              e.target.src = backgroundFallback;
            }
          }}
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>
      </div>

      {/* Main Content - Left Aligned */}
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Primary Headline - Elegant Serif Style */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white mb-6 leading-tight">
            Empowering Communities
            <span className="block mt-2 text-adg-green">Since {contentData.organization.foundedYear || '[YEAR]'}</span>
          </h1>
          
          {/* Secondary Headline / Call to Action - Bold Accent */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-adg-green mb-6 leading-tight">
            Join Hands And Be A Hero
          </h2>
          
          {/* Descriptive Text */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-10 leading-relaxed max-w-2xl">
            {contentData.organization.slogan ? 
              contentData.organization.slogan : 
              'Participate in our community development mission and help us continue creating a better tomorrow for our communities.'}
          </p>
          
          {/* Primary CTA Button with Icon */}
          <Link 
            href="/get-involved" 
            className="group inline-flex items-center gap-3 bg-adg-green text-white px-8 py-4 md:px-10 md:py-5 rounded-lg font-bold text-lg md:text-xl hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>SEE ALL PROGRAMS</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}


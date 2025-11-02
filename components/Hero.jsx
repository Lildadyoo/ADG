import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-adg-blue to-adg-green text-white py-20 md:py-32">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Empowering Communities for a Better Future
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100">
          Join us in creating lasting positive change across Uganda
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/about" className="btn-primary bg-white text-adg-blue hover:bg-gray-100">
            Learn More
          </Link>
          <Link href="/get-involved" className="btn-secondary bg-adg-green text-white hover:bg-opacity-90">
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
}


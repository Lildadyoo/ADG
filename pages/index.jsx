import Hero from '../components/Hero';
import ProgramCard from '../components/ProgramCard';
import programsData from '../data/programs.json';

export default function Home() {
  return (
    <main>
      <Hero />
      
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-adg-blue">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programsData.programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


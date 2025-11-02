import ProgramCard from '../components/ProgramCard';
import programsData from '../data/programs.json';

export default function Programs() {
  return (
    <main className="py-8 md:py-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-adg-blue mb-4">Our Programs</h1>
          <p className="text-xl text-gray-600">Transforming communities through targeted interventions</p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.programs.map((program) => (
            <div key={program.id} id={`program-${program.id}`}>
              <ProgramCard program={program} showButton={false} />
              <div className="card mt-4">
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}


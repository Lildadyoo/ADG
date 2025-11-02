import contentData from '../data/content.json';
import teamData from '../data/team.json';
import Image from 'next/image';

export default function About() {
  return (
    <main className="py-8 md:py-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-adg-blue mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Working together for sustainable development</p>
        </div>

        {/* Mission, Vision, Values Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Mission */}
            <div className="card">
              <h2 className="text-2xl font-bold text-adg-blue mb-4">Our Mission</h2>
              <p className="text-gray-600">{contentData.mission.statement}</p>
            </div>

            {/* Vision */}
            <div className="card">
              <h2 className="text-2xl font-bold text-adg-green mb-4">Our Vision</h2>
              <p className="text-gray-600">{contentData.vision.statement}</p>
            </div>

            {/* Values */}
            <div className="card">
              <h2 className="text-2xl font-bold text-adg-blue mb-4">Our Values</h2>
              <ul className="space-y-3">
                {contentData.values.map((value, index) => (
                  <li key={index}>
                    <h3 className="font-semibold text-adg-green">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="mb-16">
          <div className="card">
            <h2 className="text-3xl font-bold text-adg-blue mb-6">Our History</h2>
            <p className="text-gray-600 leading-relaxed">{contentData.history}</p>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-adg-blue mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamData.team.map((member) => (
              <div key={member.id} className="card text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-bold text-adg-blue mb-2">{member.name}</h3>
                <p className="text-adg-green font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}


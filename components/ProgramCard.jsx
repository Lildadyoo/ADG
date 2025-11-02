import Link from 'next/link';

export default function ProgramCard({ program, showButton = true }) {
  const iconMap = {
    community: '👥',
    child: '👶',
    water: '💧',
    education: '📚',
    empowerment: '🌟'
  };

  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="text-4xl mr-3">{iconMap[program.icon] || '📋'}</div>
        <h3 className="text-xl font-bold text-adg-blue">{program.title}</h3>
      </div>
      <p className="text-gray-600 mb-4 line-clamp-4">
        {program.description}
      </p>
      {showButton && (
        <Link href={`/programs#program-${program.id}`} className="text-adg-blue font-semibold hover:underline">
          Read More →
        </Link>
      )}
    </div>
  );
}


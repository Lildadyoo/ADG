import Link from 'next/link';
import Image from 'next/image';

export default function NewsCard({ article }) {
  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-200">
        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-adg-green font-semibold">{article.category}</span>
        <span className="text-xs text-gray-500">{new Date(article.date).toLocaleDateString()}</span>
      </div>
      <h3 className="text-xl font-bold text-adg-blue mb-2">{article.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
      <Link href={`/news/${article.id}`} className="text-adg-blue font-semibold hover:underline">
        Read More →
      </Link>
    </div>
  );
}


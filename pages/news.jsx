import NewsCard from '../components/NewsCard';
import newsData from '../data/news.json';

export default function News() {
  return (
    <main className="py-8 md:py-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-adg-blue mb-4">News & Updates</h1>
          <p className="text-xl text-gray-600">Stay informed about our latest activities and impact</p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.news.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </main>
  );
}


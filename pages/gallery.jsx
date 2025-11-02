import GalleryGrid from '../components/GalleryGrid';
import NewsCard from '../components/NewsCard';
import newsData from '../data/news.json';

export default function Gallery() {
  // Show latest 3 news items
  const latestNews = newsData.news.slice(0, 3);

  return (
    <main className="py-8 md:py-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-adg-blue mb-4">Gallery</h1>
          <p className="text-xl text-gray-600">A glimpse into our work and impact</p>
        </div>

        {/* Gallery Grid */}
        <section className="mb-16">
          <GalleryGrid />
        </section>

        {/* Latest News Section */}
        <section>
          <h2 className="text-3xl font-bold text-adg-blue mb-8 text-center">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}


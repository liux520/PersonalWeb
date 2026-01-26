import Link from 'next/link'

interface NewsItem {
  date: string
  title: string
  description: string
  type: 'publication' | 'talk' | 'award' | 'grant'
}

const news: NewsItem[] = [
  {
    date: 'January 2025',
    title: 'Paper accepted at CVPR 2025',
    description: 'Our work on interpretable computer vision will be presented at CVPR 2025.',
    type: 'publication',
  },
  {
    date: 'December 2024',
    title: 'Invited talk at AI Research Symposium',
    description: 'Presented advances in robust neural architecture design.',
    type: 'talk',
  },
  {
    date: 'November 2024',
    title: 'Best Paper Award at NeurIPS Workshop',
    description: 'Recognized for efficient transformer architectures.',
    type: 'award',
  },
  {
    date: 'October 2024',
    title: 'New research grant awarded',
    description: 'Funding secured for interpretable machine learning systems.',
    type: 'grant',
  },
  {
    date: 'September 2024',
    title: 'Paper published in JMLR',
    description: 'Continual learning paper published in the Journal of Machine Learning Research.',
    type: 'publication',
  },
]

const newsByYear = news.reduce((acc, item) => {
  const year = item.date.split(' ')[1]
  if (!acc[year]) {
    acc[year] = []
  }
  acc[year].push(item)
  return acc
}, {} as Record<string, NewsItem[]>)

const typeLabels: Record<NewsItem['type'], string> = {
  publication: 'Publication',
  talk: 'Talk',
  award: 'Award',
  grant: 'Grant',
}

export default function NewsPage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="content-wrap">
          <div className="flex flex-col gap-3 py-5 md:flex-row md:items-center md:justify-between">
            <Link href="/" className="nav-link">
              ← Back to Home
            </Link>
            <div className="text-right">
              <p className="eyebrow">Updates</p>
              <h1 className="text-xl font-semibold">News</h1>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="content-wrap">
          <div className="mb-10">
            <p className="eyebrow">Timeline</p>
            <h2 className="section-title">Latest News</h2>
            <p className="lead mt-3 reading-wrap">
              Publications, invited talks, awards, and funding updates, organized chronologically.
            </p>
          </div>

          <div className="space-y-10">
            {Object.entries(newsByYear)
              .sort(([a], [b]) => parseInt(b) - parseInt(a))
              .map(([year, items]) => (
                <section key={year}>
                  <div className="flex items-center gap-3">
                    <span className="tag">{year}</span>
                    <span className="meta">{items.length} updates</span>
                  </div>
                  <div className="mt-4 card">
                    {items.map((item) => (
                      <div key={item.title} className="list-item">
                        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="tag">{typeLabels[item.type]}</span>
                              <span className="meta">{item.date}</span>
                            </div>
                            <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                            <p className="meta">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}

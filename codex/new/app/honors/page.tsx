import Link from 'next/link'

interface Honor {
  title: string
  organization: string
  year: string
  category: 'award' | 'fellowship' | 'grant' | 'service'
  description: string
}

const honors: Honor[] = [
  {
    title: 'Outstanding Researcher Award',
    organization: 'National Science Foundation',
    year: '2024',
    category: 'award',
    description: 'Recognized for contributions to interpretable AI systems.',
  },
  {
    title: 'Best PhD Thesis Award',
    organization: 'University Academic Committee',
    year: '2023',
    category: 'award',
    description: 'Awarded for doctoral dissertation on interpretable AI.',
  },
  {
    title: 'Graduate Research Fellowship',
    organization: 'Institute of Technology',
    year: '2022',
    category: 'fellowship',
    description: 'Competitive fellowship supporting AI research.',
  },
  {
    title: 'Innovation Research Grant',
    organization: 'Tech Industry Partnership',
    year: '2023',
    category: 'grant',
    description: 'Major grant for self-supervised learning in medical imaging.',
  },
  {
    title: 'Outstanding Reviewer Award',
    organization: 'ICML Program Committee',
    year: '2023',
    category: 'service',
    description: 'Recognized for exceptional quality and timeliness of reviews.',
  },
]

const honorsByYear = honors.reduce((acc, honor) => {
  if (!acc[honor.year]) {
    acc[honor.year] = []
  }
  acc[honor.year].push(honor)
  return acc
}, {} as Record<string, Honor[]>)

const categoryLabels: Record<Honor['category'], string> = {
  award: 'Award',
  fellowship: 'Fellowship',
  grant: 'Grant',
  service: 'Service',
}

export default function HonorsPage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="content-wrap">
          <div className="flex flex-col gap-3 py-5 md:flex-row md:items-center md:justify-between">
            <Link href="/" className="nav-link">
              ← Back to Home
            </Link>
            <div className="text-right">
              <p className="eyebrow">Recognition</p>
              <h1 className="text-xl font-semibold">Honors & Awards</h1>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="content-wrap">
          <div className="mb-10">
            <p className="eyebrow">Highlights</p>
            <h2 className="section-title">Honors & Awards</h2>
            <p className="lead mt-3 reading-wrap">
              Recognition for research impact, teaching, and service contributions.
            </p>
          </div>

          <div className="space-y-10">
            {Object.entries(honorsByYear)
              .sort(([a], [b]) => parseInt(b) - parseInt(a))
              .map(([year, items]) => (
                <section key={year}>
                  <div className="flex items-center gap-3">
                    <span className="tag">{year}</span>
                    <span className="meta">{items.length} honors</span>
                  </div>
                  <div className="mt-4 card">
                    {items.map((honor) => (
                      <div key={honor.title} className="list-item">
                        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="tag">{categoryLabels[honor.category]}</span>
                              <span className="meta">{honor.organization}</span>
                            </div>
                            <h3 className="mt-2 text-lg font-semibold">{honor.title}</h3>
                            <p className="meta">{honor.description}</p>
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

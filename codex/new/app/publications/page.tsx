import Link from 'next/link'

interface Publication {
  title: string
  authors: string
  venue: string
  year: string
  type: 'journal' | 'conference'
  award?: string
  abstract?: string
  links?: {
    pdf?: string
    code?: string
    project?: string
  }
}

const publications: Publication[] = [
  {
    title: 'Advances in Deep Learning for Computer Vision: A Comprehensive Survey',
    authors: 'Your Name, Coauthor One, Coauthor Two',
    venue: 'IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)',
    year: '2024',
    type: 'journal',
    award: 'Most Cited Paper 2024',
    abstract: 'A comprehensive survey covering architectures, training strategies, and real-world applications.',
    links: { pdf: '#', code: '#', project: '#' },
  },
  {
    title: 'Efficient Transformer Architectures for Long-Range Dependencies',
    authors: 'Your Name, Coauthor One, Coauthor Two, Coauthor Three',
    venue: 'Conference on Neural Information Processing Systems (NeurIPS)',
    year: '2024',
    type: 'conference',
    award: 'Best Paper Award',
    abstract: 'Novel transformer designs reducing computational complexity while improving performance.',
    links: { pdf: '#', code: '#', project: '#' },
  },
  {
    title: 'Self-Supervised Learning for Medical Image Analysis',
    authors: 'Your Name, Coauthor One',
    venue: 'Medical Image Computing and Computer Assisted Intervention (MICCAI)',
    year: '2024',
    type: 'conference',
    abstract: 'A self-supervised framework that achieves strong results with limited labels.',
    links: { pdf: '#', code: '#', project: '#' },
  },
  {
    title: 'Robust Federated Learning with Privacy Preservation',
    authors: 'Your Name, Coauthor One, Coauthor Two',
    venue: 'International Conference on Machine Learning (ICML)',
    year: '2023',
    type: 'conference',
    abstract: 'A privacy-preserving federated learning approach robust to adversarial clients.',
    links: { pdf: '#', code: '#' },
  },
  {
    title: 'Interpretable Attention Mechanisms for Visual Question Answering',
    authors: 'Your Name, Coauthor One, Coauthor Two',
    venue: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR)',
    year: '2023',
    type: 'conference',
    award: 'Best Paper Honorable Mention',
    abstract: 'An interpretable attention mechanism that provides clear visual explanations.',
    links: { pdf: '#', code: '#', project: '#' },
  },
  {
    title: 'Graph Neural Networks for Drug Discovery',
    authors: 'Your Name, Coauthor One',
    venue: 'Nature Machine Intelligence',
    year: '2023',
    type: 'journal',
    abstract: 'A GNN architecture for molecular property prediction with strong benchmark results.',
    links: { pdf: '#', code: '#' },
  },
  {
    title: 'Continual Learning without Forgetting',
    authors: 'Your Name, Coauthor One, Coauthor Two',
    venue: 'International Conference on Learning Representations (ICLR)',
    year: '2022',
    type: 'conference',
    abstract: 'A continual learning approach mitigating catastrophic forgetting via replay.',
    links: { pdf: '#', code: '#' },
  },
  {
    title: 'Multi-Modal Fusion for Emotion Recognition',
    authors: 'Your Name, Coauthor One',
    venue: 'ACM International Conference on Multimodal Interaction',
    year: '2022',
    type: 'conference',
    abstract: 'A multi-modal fusion framework combining audio, video, and text features.',
    links: { pdf: '#', code: '#' },
  },
]

const publicationsByYear = publications.reduce((acc, pub) => {
  if (!acc[pub.year]) {
    acc[pub.year] = []
  }
  acc[pub.year].push(pub)
  return acc
}, {} as Record<string, Publication[]>)

export default function PublicationsPage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="content-wrap">
          <div className="flex flex-col gap-3 py-5 md:flex-row md:items-center md:justify-between">
            <Link href="/" className="nav-link">
              ← Back to Home
            </Link>
            <div className="text-right">
              <p className="eyebrow">Research Output</p>
              <h1 className="text-xl font-semibold">All Publications</h1>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="content-wrap">
          <div className="mb-10">
            <p className="eyebrow">Archive</p>
            <h2 className="section-title">Publications</h2>
            <p className="lead mt-3 reading-wrap">
              A curated archive of peer-reviewed journal and conference papers, ordered by year.
            </p>
          </div>

          <div className="space-y-10">
            {Object.entries(publicationsByYear)
              .sort(([a], [b]) => parseInt(b) - parseInt(a))
              .map(([year, items]) => (
                <section key={year}>
                  <div className="flex items-center gap-3">
                    <span className="tag">{year}</span>
                    <span className="meta">{items.length} publications</span>
                  </div>
                  <div className="mt-4 space-y-4">
                    {items.map((pub) => (
                      <article key={pub.title} className="card">
                        <div className="flex flex-wrap items-center gap-2 text-sm">
                          <span className="tag">{pub.type === 'journal' ? 'Journal' : 'Conference'}</span>
                          {pub.award && <span className="tag tag-accent">{pub.award}</span>}
                        </div>
                        <h3 className="mt-3 text-xl font-semibold">{pub.title}</h3>
                        <p className="meta mt-2">{pub.authors}</p>
                        <p className="meta mt-1">{pub.venue}</p>
                        {pub.abstract && <p className="lead mt-3">{pub.abstract}</p>}
                        {pub.links && (
                          <div className="mt-4 flex flex-wrap gap-3 text-sm">
                            {pub.links.pdf && <a className="btn btn-ghost" href={pub.links.pdf}>PDF</a>}
                            {pub.links.code && <a className="btn btn-ghost" href={pub.links.code}>Code</a>}
                            {pub.links.project && <a className="btn btn-ghost" href={pub.links.project}>Project</a>}
                          </div>
                        )}
                      </article>
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

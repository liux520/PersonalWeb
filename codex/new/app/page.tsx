const navItems = [
  { label: 'Publications', href: '#publications' },
  { label: 'News', href: '#news' },
  { label: 'Honors', href: '#honors' },
  { label: 'Education', href: '#education' },
  { label: 'Service', href: '#service' },
]

const researchAreas = [
  'Interpretable Machine Learning',
  'Computer Vision',
  'Self-Supervised Learning',
  'Robust and Federated Learning',
]

const publications = [
  {
    title: 'Advances in Deep Learning for Computer Vision: A Comprehensive Survey',
    authors: 'Your Name, Coauthor One, Coauthor Two',
    venue: 'IEEE TPAMI',
    year: '2024',
    award: 'Most Cited Paper',
    links: { pdf: '#', code: '#', project: '#' },
  },
  {
    title: 'Efficient Transformer Architectures for Long-Range Dependencies',
    authors: 'Your Name, Coauthor One, Coauthor Two, Coauthor Three',
    venue: 'NeurIPS',
    year: '2024',
    award: 'Best Paper',
    links: { pdf: '#', code: '#', project: '#' },
  },
  {
    title: 'Self-Supervised Learning for Medical Image Analysis',
    authors: 'Your Name, Coauthor One',
    venue: 'MICCAI',
    year: '2024',
    links: { pdf: '#', code: '#', project: '#' },
  },
  {
    title: 'Robust Federated Learning with Privacy Preservation',
    authors: 'Your Name, Coauthor One, Coauthor Two',
    venue: 'ICML',
    year: '2023',
    links: { pdf: '#', code: '#' },
  },
]

const news = [
  {
    date: 'Jan 2025',
    title: 'Paper accepted at CVPR 2025',
    description: 'Deep learning for computer vision with interpretable signals.',
  },
  {
    date: 'Dec 2024',
    title: 'Invited talk at AI Research Symposium',
    description: 'Recent advances in neural architecture design.',
  },
  {
    date: 'Nov 2024',
    title: 'Best Paper Award at NeurIPS Workshop',
    description: 'Efficient transformer architectures for long-range tasks.',
  },
]

const honors = [
  {
    title: 'Outstanding Researcher Award',
    organization: 'National Science Foundation',
    year: '2024',
  },
  {
    title: 'Best PhD Thesis Award',
    organization: 'University Academic Committee',
    year: '2023',
  },
  {
    title: 'Graduate Research Fellowship',
    organization: 'Institute of Technology',
    year: '2022',
  },
]

const education = [
  {
    degree: 'Ph.D. in Computer Science',
    institution: 'University of Technology',
    period: '2020 - 2024',
    advisor: 'Prof. Advisor Name',
  },
  {
    degree: 'M.S. in Computer Science',
    institution: 'State University',
    period: '2018 - 2020',
  },
]

const service = [
  {
    role: 'Program Committee Member',
    venue: 'NeurIPS, ICML, ICLR',
    period: '2024 - 2025',
  },
  {
    role: 'Guest Editor',
    venue: 'Special Issue on Interpretable AI (JMLR)',
    period: '2024',
  },
  {
    role: 'Invited Speaker',
    venue: 'AI Research Seminar Series',
    period: '2024',
  },
]

export default function Home() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="content-wrap">
          <div className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="eyebrow">PhD Researcher</p>
              <a href="#" className="text-xl font-semibold text-[var(--color-text)]">
                Dr. Your Name
              </a>
            </div>
            <nav className="flex flex-wrap gap-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <section id="profile" className="section">
        <div className="content-wrap">
          <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
            <div>
              <p className="eyebrow">Research Focus</p>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Interpretable and Robust Learning for Real-World Vision Systems
              </h1>
              <p className="lead mt-5 max-w-2xl">
                I design machine learning systems that are transparent, reliable, and data-efficient.
                My work spans interpretable deep learning, medical imaging, and robust AI at scale.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary" href="#">
                  Download CV
                </a>
                <a className="btn" href="mailto:your.email@university.edu">
                  Email
                </a>
                <a className="btn btn-ghost" href="https://scholar.google.com/yourid">
                  Google Scholar
                </a>
                <a className="btn btn-ghost" href="https://github.com/yourusername">
                  GitHub
                </a>
              </div>
            </div>
            <aside className="card">
              <p className="eyebrow">Affiliation</p>
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-[var(--color-text)]">Department of Computer Science</p>
                  <p className="meta">University of Technology</p>
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-text)]">Lab</p>
                  <p className="meta">Vision & Learning Group</p>
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-text)]">Location</p>
                  <p className="meta">City, Country</p>
                </div>
              </div>
              <div className="rule" />
              <p className="eyebrow">Research Areas</p>
              <ul className="mt-4 space-y-2 text-sm">
                {researchAreas.map((area) => (
                  <li key={area} className="meta">
                    {area}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section id="publications" className="section-tight">
        <div className="content-wrap">
          <div className="mb-10">
            <p className="eyebrow">Selected Work</p>
            <h2 className="section-title">Publications</h2>
            <p className="lead mt-3 reading-wrap">
              Peer-reviewed articles from top-tier venues with emphasis on interpretability and robust learning.
            </p>
          </div>
          <div className="space-y-5">
            {publications.map((pub) => (
              <article key={pub.title} className="card">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="tag">{pub.year}</span>
                  <span className="tag">{pub.venue}</span>
                  {pub.award && <span className="tag tag-accent">{pub.award}</span>}
                </div>
                <h3 className="mt-3 text-xl font-semibold">{pub.title}</h3>
                <p className="meta mt-2">{pub.authors}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  {pub.links.pdf && <a className="btn btn-ghost" href={pub.links.pdf}>PDF</a>}
                  {pub.links.code && <a className="btn btn-ghost" href={pub.links.code}>Code</a>}
                  {pub.links.project && <a className="btn btn-ghost" href={pub.links.project}>Project</a>}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6">
            <a className="btn" href="/publications">
              View all publications
            </a>
          </div>
        </div>
      </section>

      <section id="news" className="section-tight">
        <div className="content-wrap">
          <div className="mb-8">
            <p className="eyebrow">Updates</p>
            <h2 className="section-title">News</h2>
          </div>
          <div className="card">
            {news.map((item) => (
              <div key={item.title} className="list-item">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="meta">{item.description}</p>
                  </div>
                  <span className="tag">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a className="btn" href="/news">
              View all news
            </a>
          </div>
        </div>
      </section>

      <section id="honors" className="section-tight">
        <div className="content-wrap">
          <div className="mb-8">
            <p className="eyebrow">Recognition</p>
            <h2 className="section-title">Honors & Awards</h2>
          </div>
          <div className="card">
            {honors.map((honor) => (
              <div key={honor.title} className="list-item">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{honor.title}</h3>
                    <p className="meta">{honor.organization}</p>
                  </div>
                  <span className="tag">{honor.year}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a className="btn" href="/honors">
              View all honors
            </a>
          </div>
        </div>
      </section>

      <section id="education" className="section-tight">
        <div className="content-wrap">
          <div className="mb-8">
            <p className="eyebrow">Background</p>
            <h2 className="section-title">Education</h2>
          </div>
          <div className="card">
            {education.map((item) => (
              <div key={item.degree} className="list-item">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{item.degree}</h3>
                    <p className="meta">{item.institution}</p>
                    {item.advisor && <p className="meta">Advisor: {item.advisor}</p>}
                  </div>
                  <span className="tag">{item.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="service" className="section-tight">
        <div className="content-wrap">
          <div className="mb-8">
            <p className="eyebrow">Community</p>
            <h2 className="section-title">Academic Service</h2>
          </div>
          <div className="card">
            {service.map((item) => (
              <div key={item.role} className="list-item">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <p className="meta">{item.venue}</p>
                  </div>
                  <span className="tag">{item.period}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a className="btn" href="/service">
              View full service
            </a>
          </div>
        </div>
      </section>

      <footer className="section-tight">
        <div className="content-wrap">
          <div className="card">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-semibold">Dr. Your Name</p>
                <p className="meta">Department of Computer Science, University of Technology</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a className="btn btn-ghost" href="mailto:your.email@university.edu">Email</a>
                <a className="btn btn-ghost" href="https://scholar.google.com/yourid">Scholar</a>
                <a className="btn btn-ghost" href="https://github.com/yourusername">GitHub</a>
              </div>
            </div>
          </div>
          <p className="meta mt-6 text-sm">© {new Date().getFullYear()} Dr. Your Name</p>
        </div>
      </footer>
    </main>
  )
}

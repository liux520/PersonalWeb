import Link from 'next/link'

interface Service {
  role: string
  venue?: string
  institution?: string
  year?: string
  type: 'program' | 'editorial' | 'organizing' | 'speaking' | 'reviewing' | 'mentoring'
  description: string
}

const services: Service[] = [
  {
    role: 'Program Committee Member',
    venue: 'NeurIPS, ICML, ICLR',
    year: '2024-2025',
    type: 'program',
    description: 'Reviewed submissions and contributed to technical program decisions.',
  },
  {
    role: 'Guest Editor',
    venue: 'Special Issue on Interpretable AI (JMLR)',
    year: '2024',
    type: 'editorial',
    description: 'Oversaw review process and coordinated special issue publication.',
  },
  {
    role: 'Invited Speaker',
    institution: 'Stanford University, MIT, UC Berkeley',
    year: '2024',
    type: 'speaking',
    description: 'Delivered invited talks on interpretable machine learning.',
  },
  {
    role: 'Workshop Co-organizer',
    venue: 'NeurIPS Workshop on Robust AI',
    year: '2023-2024',
    type: 'organizing',
    description: 'Managed submissions, review, and session moderation.',
  },
  {
    role: 'Reviewer',
    venue: 'JMLR, TMLR, CVPR, ICCV',
    year: '2020-present',
    type: 'reviewing',
    description: 'Provided detailed reviews for journals and conferences.',
  },
  {
    role: 'Research Mentor',
    institution: 'AI Research Mentoring Program',
    year: '2022-present',
    type: 'mentoring',
    description: 'Mentored undergraduate and graduate researchers.',
  },
]

const servicesByType = services.reduce((acc, service) => {
  if (!acc[service.type]) {
    acc[service.type] = []
  }
  acc[service.type].push(service)
  return acc
}, {} as Record<string, Service[]>)

const typeLabels: Record<Service['type'], string> = {
  program: 'Program Committee',
  editorial: 'Editorial',
  organizing: 'Organizing',
  speaking: 'Invited Talks',
  reviewing: 'Reviewing',
  mentoring: 'Mentoring',
}

export default function ServicePage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="content-wrap">
          <div className="flex flex-col gap-3 py-5 md:flex-row md:items-center md:justify-between">
            <Link href="/" className="nav-link">
              ← Back to Home
            </Link>
            <div className="text-right">
              <p className="eyebrow">Community</p>
              <h1 className="text-xl font-semibold">Academic Service</h1>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="content-wrap">
          <div className="mb-10">
            <p className="eyebrow">Leadership</p>
            <h2 className="section-title">Academic Service</h2>
            <p className="lead mt-3 reading-wrap">
              Service contributions across editorial roles, program committees, and mentoring initiatives.
            </p>
          </div>

          <div className="space-y-10">
            {Object.entries(servicesByType).map(([type, items]) => (
              <section key={type}>
                <div className="flex items-center gap-3">
                  <span className="tag">{typeLabels[type as Service['type']]}</span>
                  <span className="meta">{items.length} roles</span>
                </div>
                <div className="mt-4 card">
                  {items.map((service) => (
                    <div key={service.role} className="list-item">
                      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">{service.role}</h3>
                          {(service.venue || service.institution) && (
                            <p className="meta">{service.venue || service.institution}</p>
                          )}
                          <p className="meta">{service.description}</p>
                        </div>
                        {service.year && <span className="tag">{service.year}</span>}
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

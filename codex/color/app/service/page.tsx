'use client'

import { motion } from 'framer-motion'
import { Users, ArrowLeft, Calendar, Briefcase } from 'lucide-react'
import Link from 'next/link'

interface Service {
  role: string
  venue?: string
  journal?: string
  institution?: string
  conference?: string
  description: string
  year?: string
  type: 'pc' | 'editor' | 'organizer' | 'speaker' | 'reviewer' | 'committee'
}

const allServices: Service[] = [
  {
    role: 'Program Committee Member',
    venue: 'NeurIPS 2024, ICML 2024, ICLR 2025',
    description: 'Reviewed submissions for top-tier machine learning conferences, providing detailed feedback and contributing to the selection process.',
    year: '2024-2025',
    type: 'pc',
  },
  {
    role: 'Guest Editor',
    venue: 'Special Issue on Interpretable AI',
    journal: 'Journal of Machine Learning Research (JMLR)',
    description: 'Organizing special issue on interpretability in machine learning, overseeing the review process and paper selection.',
    year: '2024',
    type: 'editor',
  },
  {
    role: 'Invited Speaker',
    venue: 'AI Research Seminar Series',
    institution: 'Stanford University, MIT, UC Berkeley',
    description: 'Delivered talks at various universities and research labs on recent advances in interpretable machine learning.',
    year: '2024',
    type: 'speaker',
  },
  {
    role: 'Conference Co-organizer',
    venue: 'Workshop on Robust AI',
    conference: 'NeurIPS 2023, 2024',
    description: 'Co-organized workshop focusing on robustness in AI systems, including paper selection, scheduling, and moderating sessions.',
    year: '2023-2024',
    type: 'organizer',
  },
  {
    role: 'Associate Editor',
    journal: 'IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)',
    description: 'Handling the review process for submissions in computer vision and machine learning.',
    year: '2023-present',
    type: 'editor',
  },
  {
    role: 'Reviewer',
    venue: 'Multiple journals and conferences',
    journal: 'JMLR, TMLR, ICML, NeurIPS, ICLR, CVPR, ICCV, ACL',
    description: 'Regularly review papers for top-tier journals and conferences in machine learning and computer vision.',
    year: '2020-present',
    type: 'reviewer',
  },
  {
    role: 'Workshop Organizer',
    venue: 'Doctoral Consortium at ICML 2024',
    conference: 'International Conference on Machine Learning',
    description: 'Organized the doctoral consortium, mentoring PhD students and facilitating networking opportunities.',
    year: '2024',
    type: 'organizer',
  },
  {
    role: 'Panelist',
    venue: 'AI Ethics and Safety Panel',
    conference: 'AAAI 2024',
    description: 'Participated as a panelist discussing ethical considerations in AI research and deployment.',
    year: '2024',
    type: 'speaker',
  },
  {
    role: 'Program Committee Chair',
    venue: 'Student Workshop at ICML 2023',
    description: 'Led the program committee for the student workshop, overseeing paper selection and workshop organization.',
    year: '2023',
    type: 'organizer',
  },
  {
    role: 'Mentor',
    venue: 'AI Research Mentoring Program',
    institution: 'Multiple Universities',
    description: 'Mentored undergraduate and graduate students from underrepresented groups in STEM, providing research guidance and career advice.',
    year: '2022-present',
    type: 'committee',
  },
  {
    role: 'Grant Reviewer',
    institution: 'National Science Foundation (NSF)',
    description: 'Reviewed research proposals for funding in machine learning and AI.',
    year: '2023-2024',
    type: 'reviewer',
  },
  {
    role: 'Conference Session Chair',
    venue: 'NeurIPS 2023',
    conference: 'Advances in Neural Information Processing Systems',
    description: 'Chaired technical sessions on interpretability and robustness in deep learning.',
    year: '2023',
    type: 'organizer',
  },
]

const typeConfig = {
  pc: { label: 'Program Committee', color: 'from-blue-400 to-cyan-500', icon: Briefcase },
  editor: { label: 'Editorial', color: 'from-purple-400 to-pink-500', icon: Users },
  organizer: { label: 'Organizer', color: 'from-emerald-400 to-teal-500', icon: Briefcase },
  speaker: { label: 'Speaker', color: 'from-amber-400 to-orange-500', icon: Users },
  reviewer: { label: 'Reviewer', color: 'from-slate-400 to-slate-500', icon: Briefcase },
  committee: { label: 'Committee', color: 'from-rose-400 to-red-500', icon: Users },
}

export default function ServicePage() {
  // Group by type
  const servicesByType = allServices.reduce((acc, service) => {
    if (!acc[service.type]) {
      acc[service.type] = []
    }
    acc[service.type].push(service)
    return acc
  }, {} as Record<string, Service[]>)

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-xl font-bold text-gradient">Academic Service & Communications</h1>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">
            Academic Service & Communications
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Contributions to the research community through conference organization, editorial work, mentoring, and service.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
        >
          {Object.entries(typeConfig).map(([type, config]) => {
            const count = allServices.filter(s => s.type === type).length
            const Icon = config.icon
            return (
              <div key={type} className="bg-white dark:bg-slate-800 rounded-xl p-4 text-center shadow-lg">
                <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${config.color} flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-1">
                  {count}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">{config.label}</div>
              </div>
            )
          })}
        </motion.div>

        {/* Service by Type */}
        <div className="space-y-12">
          {Object.entries(servicesByType).map(([type, typeServices], typeIndex) => {
            const config = typeConfig[type as keyof typeof typeConfig]
            return (
              <motion.section
                key={type}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: typeIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center shadow-lg`}>
                    <config.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">{config.label}</h3>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium">
                    {typeServices.length} {typeServices.length === 1 ? 'item' : 'items'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {typeServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: typeIndex * 0.1 + index * 0.05 }}
                      className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center shadow-lg`}>
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">
                            {service.role}
                          </h4>
                          {service.venue && (
                            <p className="text-teal-700 dark:text-teal-300 font-medium text-sm mb-1">
                              {service.venue}
                            </p>
                          )}
                          {service.journal && (
                            <p className="text-slate-700 dark:text-slate-300 text-sm font-medium mb-1">
                              {service.journal}
                            </p>
                          )}
                          {service.institution && (
                            <p className="text-slate-700 dark:text-slate-300 text-sm mb-1">
                              {service.institution}
                            </p>
                          )}
                          {service.conference && (
                            <p className="text-slate-700 dark:text-slate-300 text-sm mb-1">
                              {service.conference}
                            </p>
                          )}
                          {service.year && (
                            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-500 text-xs mb-2">
                              <Calendar className="w-3 h-3" />
                              {service.year}
                            </div>
                          )}
                          <p className="text-slate-600 dark:text-slate-400 text-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )
          })}
        </div>
      </main>
    </div>
  )
}

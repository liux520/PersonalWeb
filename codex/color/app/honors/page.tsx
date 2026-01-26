'use client'

import { motion } from 'framer-motion'
import { Award, ArrowLeft, Calendar, MapPin } from 'lucide-react'
import Link from 'next/link'

interface Honor {
  title: string
  organization: string
  year: string
  description: string
  category?: 'award' | 'fellowship' | 'grant' | 'service'
}

const allHonors: Honor[] = [
  {
    title: 'Outstanding Researcher Award',
    organization: 'National Science Foundation',
    year: '2024',
    description: 'Recognized for exceptional contributions to the field of machine learning, particularly in interpretable AI systems.',
    category: 'award',
  },
  {
    title: 'Best PhD Thesis Award',
    organization: 'University Academic Committee',
    year: '2023',
    description: 'Awarded for doctoral dissertation on interpretable AI systems and their applications in computer vision.',
    category: 'award',
  },
  {
    title: 'Graduate Research Fellowship',
    organization: 'Institute of Technology',
    year: '2022',
    description: 'Competitive fellowship supporting innovative research in artificial intelligence and machine learning.',
    category: 'fellowship',
  },
  {
    title: 'Excellence in Teaching Award',
    organization: 'Department of Computer Science',
    year: '2022',
    description: 'Recognized for outstanding teaching and student mentorship in advanced machine learning courses.',
    category: 'service',
  },
  {
    title: 'Best Paper Award at NeurIPS Workshop',
    organization: 'NeurIPS 2023 Workshop on Robust AI',
    year: '2023',
    description: 'Received the Best Paper Award for work on efficient transformer architectures.',
    category: 'award',
  },
  {
    title: 'Outstanding Reviewer Award',
    organization: 'ICML 2023 Program Committee',
    year: '2023',
    description: 'Recognized for exceptional quality and timeliness of paper reviews.',
    category: 'service',
  },
  {
    title: 'Innovation Research Grant',
    organization: 'Tech Industry Partnership',
    year: '2023',
    description: 'Major grant award for research on self-supervised learning in medical imaging.',
    category: 'grant',
  },
  {
    title: 'Early Career Research Excellence Award',
    organization: 'International Association for AI Research',
    year: '2024',
    description: 'Awarded to early-career researchers showing exceptional promise in AI research.',
    category: 'award',
  },
  {
    title: 'Distinguished Service Award',
    organization: 'ACM SIGAI',
    year: '2023',
    description: 'For dedicated service to the AI research community through conference organization and mentoring.',
    category: 'service',
  },
  {
    title: 'Most Cited Paper Award 2024',
    organization: 'IEEE TPAMI',
    year: '2024',
    description: 'Our survey paper on deep learning for computer vision was among the most cited in the journal.',
    category: 'award',
  },
  {
    title: 'Travel Grant Award',
    organization: 'Google Research',
    year: '2022',
    description: 'Travel grant to present research at CVPR 2022.',
    category: 'grant',
  },
  {
    title: 'Outstanding Student Paper Award',
    organization: 'CVPR 2021',
    year: '2021',
    description: 'Awarded for exceptional quality student paper on novel neural network architectures.',
    category: 'award',
  },
]

const categoryColors = {
  award: 'from-amber-400 to-orange-500',
  fellowship: 'from-blue-400 to-cyan-500',
  grant: 'from-emerald-400 to-teal-500',
  service: 'from-purple-400 to-pink-500',
}

const categoryLabels = {
  award: 'Award',
  fellowship: 'Fellowship',
  grant: 'Grant',
  service: 'Service',
}

export default function HonorsPage() {
  // Sort by year (newest first)
  const sortedHonors = [...allHonors].sort((a, b) => parseInt(b.year) - parseInt(a.year))

  // Group by year
  const honorsByYear = sortedHonors.reduce((acc, honor) => {
    if (!acc[honor.year]) {
      acc[honor.year] = []
    }
    acc[honor.year].push(honor)
    return acc
  }, {} as Record<string, Honor[]>)

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
          <h1 className="text-xl font-bold text-gradient">All Honors & Awards</h1>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">
            Honors & Awards
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Recognition for contributions to research, teaching, and service in the field of artificial intelligence.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-amber-500 mb-1">
              {allHonors.filter(h => h.category === 'award').length}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Awards</div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-500 mb-1">
              {allHonors.filter(h => h.category === 'fellowship').length}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Fellowships</div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-emerald-500 mb-1">
              {allHonors.filter(h => h.category === 'grant').length}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Grants</div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-500 mb-1">
              {allHonors.filter(h => h.category === 'service').length}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Service Awards</div>
          </div>
        </motion.div>

        {/* Timeline by Year */}
        <div className="space-y-12">
          {Object.entries(honorsByYear)
            .sort(([a], [b]) => parseInt(b) - parseInt(a))
            .map(([year, yearHonors], yearIndex) => (
              <motion.section
                key={year}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: yearIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-600 to-amber-500 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">{year}</h3>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium">
                    {yearHonors.length} {yearHonors.length === 1 ? 'honor' : 'honors'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {yearHonors.map((honor, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: yearIndex * 0.1 + index * 0.05 }}
                      className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${categoryColors[honor.category || 'award']} flex items-center justify-center shadow-lg`}>
                          <Award className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {honor.category && (
                              <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs rounded-full">
                                {categoryLabels[honor.category]}
                              </span>
                            )}
                          </div>
                          <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">
                            {honor.title}
                          </h4>
                          <p className="text-teal-700 dark:text-teal-300 font-medium text-sm mb-2">
                            {honor.organization}
                          </p>
                          <p className="text-slate-600 dark:text-slate-400 text-sm">
                            {honor.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
        </div>
      </main>
    </div>
  )
}

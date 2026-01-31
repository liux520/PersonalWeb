'use client'

import { motion } from 'framer-motion'
import { Award, ArrowLeft, Calendar } from 'lucide-react'
import Link from 'next/link'

interface Honor {
  title: string
  organization: string
  year: string
  description?: string
  category: 'award' | 'grant' | 'service'
}

const allHonors: Honor[] = [
  {
    title: 'Yanbao Scholarship',
    organization: 'Baofeng Group Co., Ltd.',
    year: '2025',
    description: 'Prestigious scholarship recognizing academic excellence and research potential.',
    category: 'award',
  },
  {
    title: 'Outstanding Graduate Student',
    organization: 'Sichuan University',
    year: '2024',
    description: 'Recognized as an outstanding graduate student for exceptional academic performance.',
    category: 'award',
  },
  {
    title: 'Outstanding Graduate Thesis',
    organization: 'Sichuan University',
    year: '2024',
    description: 'Awarded for outstanding master\'s thesis in Electronic Science and Technology.',
    category: 'award',
  },
  {
    title: 'Xiaomi Scholarship',
    organization: 'Xiaomi Technology Co., Ltd.',
    year: '2024',
    description: 'Competitive scholarship for excellence in research and innovation.',
    category: 'award',
  },
  {
    title: 'First Prize - ICDT HUAWEI Terminal New Display Technology Competition',
    organization: 'ICDT and HUAWEI',
    year: '2023',
    description: 'First Prize in the Mobile Display Enhancement Track.',
    category: 'award',
  },
]

const categoryConfig = {
  award: {
    label: 'Awards',
    color: 'text-award-500',
    bgGradient: 'from-award-400 to-award-500',
    bgLight: 'bg-award-50 dark:bg-award-950/40',
    textLight: 'text-award-600 dark:text-award-400',
    borderLight: 'border-award-200 dark:border-award-800/30',
  },
  grant: {
    label: 'Grants',
    color: 'text-success-500',
    bgGradient: 'from-success-400 to-success-500',
    bgLight: 'bg-success-50 dark:bg-success-950/40',
    textLight: 'text-success-600 dark:text-success-400',
    borderLight: 'border-success-200 dark:border-success-800/30',
  },
  service: {
    label: 'Service Awards',
    color: 'text-accent-500',
    bgGradient: 'from-accent-400 to-accent-500',
    bgLight: 'bg-accent-50 dark:bg-accent-950/40',
    textLight: 'text-accent-600 dark:text-accent-400',
    borderLight: 'border-accent-200 dark:border-accent-800/30',
  },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-white dark:from-slate-950 dark:via-indigo-950/30 dark:to-slate-950">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass sticky top-0 z-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-xl font-bold text-gradient-indigo">All Honors & Awards</h1>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4 font-display">
            Honors & Awards
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Recognition for academic excellence, research achievements, and scholarly contributions.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto"
        >
          <div className="bg-white/90 dark:bg-slate-800/80 backdrop-blur-md rounded-xl p-6 text-center shadow-card">
            <div className="text-3xl font-bold text-award-500 mb-1">
              {allHonors.filter(h => h.category === 'award').length}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Awards</div>
          </div>
          <div className="bg-white/90 dark:bg-slate-800/80 backdrop-blur-md rounded-xl p-6 text-center shadow-card">
            <div className="text-3xl font-bold text-success-500 mb-1">
              {allHonors.filter(h => h.category === 'grant').length}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Grants</div>
          </div>
          <div className="bg-white/90 dark:bg-slate-800/80 backdrop-blur-md rounded-xl p-6 text-center shadow-card">
            <div className="text-3xl font-bold text-accent-500 mb-1">
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-md">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 font-display">{year}</h3>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium">
                    {yearHonors.length} {yearHonors.length === 1 ? 'honor' : 'honors'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {yearHonors.map((honor, index) => {
                    const config = categoryConfig[honor.category]
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: yearIndex * 0.1 + index * 0.05 }}
                        className="bg-white/90 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 shadow-card hover:shadow-card-lg transition-all duration-400 ease-premium"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${config.bgGradient} flex items-center justify-center shadow-md`}>
                            <Award className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`px-2 py-0.5 ${config.bgLight} ${config.textLight} text-xs font-semibold rounded-md border ${config.borderLight}`}>
                                {config.label}
                              </span>
                            </div>
                            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">
                              {honor.title}
                            </h4>
                            <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-2">
                              {honor.organization}
                            </p>
                            {honor.description && (
                              <p className="text-slate-600 dark:text-slate-400 text-sm">
                                {honor.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.section>
            ))}
        </div>
      </main>
    </div>
  )
}

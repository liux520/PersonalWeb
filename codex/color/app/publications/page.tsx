'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, ArrowLeft, ExternalLink, Download, Code } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Publication {
  title: string
  authors: string
  venue: string
  year: string
  type: 'journal' | 'conference'
  award?: string
  image?: string
  abstract?: string
  links: {
    pdf?: string
    code?: string
    project?: string
  }
}

const allPublications: Publication[] = [
  {
    title: 'Advances in Deep Learning for Computer Vision: A Comprehensive Survey',
    authors: 'Your Name, Coauthor One, Coauthor Two',
    venue: 'IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)',
    year: '2024',
    type: 'journal',
    award: 'Most Cited Paper 2024',
    image: '/images/paper1.jpg',
    abstract: 'This paper provides a comprehensive survey of recent advances in deep learning for computer vision, covering architectural innovations, training strategies, and applications across various domains.',
    links: { pdf: '#', code: '#', project: '#' },
  },
  {
    title: 'Efficient Transformer Architectures for Long-Range Dependencies',
    authors: 'Your Name, Coauthor One, Coauthor Two, Coauthor Three',
    venue: 'Conference on Neural Information Processing Systems (NeurIPS)',
    year: '2024',
    type: 'conference',
    award: 'Best Paper Award',
    image: '/images/paper2.jpg',
    abstract: 'We propose novel transformer architectures that significantly reduce computational complexity while maintaining or improving performance on long-range dependency tasks.',
    links: { pdf: '#', code: '#', project: '#' },
  },
  {
    title: 'Self-Supervised Learning for Medical Image Analysis',
    authors: 'Your Name, Coauthor One',
    venue: 'Medical Image Computing and Computer Assisted Intervention (MICCAI)',
    year: '2024',
    type: 'conference',
    image: '/images/paper3.jpg',
    abstract: 'A self-supervised learning framework for medical image analysis that achieves state-of-the-art performance with limited labeled data.',
    links: { pdf: '#', code: '#', project: '#' },
  },
  {
    title: 'Robust Federated Learning with Privacy Preservation',
    authors: 'Your Name, Coauthor One, Coauthor Two',
    venue: 'International Conference on Machine Learning (ICML)',
    year: '2023',
    type: 'conference',
    image: '/images/paper4.jpg',
    abstract: 'We propose a robust federated learning framework that preserves privacy while maintaining model performance in the presence of malicious clients.',
    links: { pdf: '#', code: '#' },
  },
  {
    title: 'Interpretable Attention Mechanisms for Visual Question Answering',
    authors: 'Your Name, Coauthor One, Coauthor Two',
    venue: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR)',
    year: '2023',
    type: 'conference',
    award: 'Best Paper Honorable Mention',
    abstract: 'An interpretable attention mechanism for VQA that provides clear visual explanations of model decisions.',
    links: { pdf: '#', code: '#', project: '#' },
  },
  {
    title: 'Graph Neural Networks for Drug Discovery',
    authors: 'Your Name, Coauthor One',
    venue: 'Nature Machine Intelligence',
    year: '2023',
    type: 'journal',
    abstract: 'A novel GNN architecture for molecular property prediction that achieves state-of-the-art results on multiple benchmarks.',
    links: { pdf: '#', code: '#' },
  },
  {
    title: 'Continual Learning without Forgetting',
    authors: 'Your Name, Coauthor One, Coauthor Two',
    venue: 'International Conference on Learning Representations (ICLR)',
    year: '2022',
    type: 'conference',
    abstract: 'A continual learning approach that mitigates catastrophic forgetting through experience replay and architecture design.',
    links: { pdf: '#', code: '#' },
  },
  {
    title: 'Multi-Modal Fusion for Emotion Recognition',
    authors: 'Your Name, Coauthor One',
    venue: 'ACM International Conference on Multimodal Interaction',
    year: '2022',
    type: 'conference',
    abstract: 'A multi-modal fusion framework for emotion recognition that combines audio, video, and text features.',
    links: { pdf: '#', code: '#' },
  },
]

const DefaultPaperIcon = () => (
  <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-xl flex items-center justify-center">
    <BookOpen className="w-12 h-12 text-slate-400 dark:text-slate-500" />
  </div>
)

export default function PublicationsPage() {
  const [filter, setFilter] = useState<'all' | 'journal' | 'conference'>('all')

  const filteredPublications = allPublications.filter(
    (pub) => filter === 'all' || pub.type === filter
  )

  const journalCount = allPublications.filter(pub => pub.type === 'journal').length
  const conferenceCount = allPublications.filter(pub => pub.type === 'conference').length

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
          <h1 className="text-xl font-bold text-gradient">All Publications</h1>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">
            Publications
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of my research work published in leading journals and conferences.
            Topics include interpretable machine learning, computer vision, and neural network architectures.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto"
        >
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              {allPublications.length}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Total</div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-blue-500">
              {journalCount}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Journals</div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-purple-500">
              {conferenceCount}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Conferences</div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-3 mb-10"
        >
          {(['all', 'journal', 'conference'] as const).map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                filter === filterType
                  ? 'bg-gradient-to-r from-teal-600 to-amber-500 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-md'
              }`}
            >
              {filterType === 'all' && `All (${allPublications.length})`}
              {filterType === 'journal' && `Journal (${journalCount})`}
              {filterType === 'conference' && `Conference (${conferenceCount})`}
            </button>
          ))}
        </motion.div>

        {/* Publications List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {filteredPublications.map((pub, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex gap-6"
              >
                {/* Thumbnail */}
                <div className="flex-shrink-0 w-32 h-44 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700">
                  {pub.image ? (
                    <Image
                      src={pub.image}
                      alt={pub.title}
                      width={128}
                      height={176}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <DefaultPaperIcon />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Type Badge */}
                  <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full mb-3 ${
                    pub.type === 'journal'
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                      : 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200'
                  }`}>
                    {pub.type === 'journal' ? 'Journal' : 'Conference'}
                  </span>

                  {/* Award Badge */}
                  {pub.award && (
                    <span className="inline-block px-2 py-0.5 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-200 text-xs font-semibold rounded-full mb-3 ml-2">
                      {pub.award}
                    </span>
                  )}

                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">
                    {pub.authors}
                  </p>
                  <p className="text-teal-700 dark:text-teal-300 font-medium mb-1">
                    {pub.venue}
                  </p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm mb-3">
                    {pub.year}
                  </p>
                  {pub.abstract && (
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                      {pub.abstract}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {pub.links.pdf && (
                      <a
                        href={pub.links.pdf}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        PDF
                      </a>
                    )}
                    {pub.links.code && (
                      <a
                        href={pub.links.code}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                      >
                        <Code className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {pub.links.project && (
                      <a
                        href={pub.links.project}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-200 rounded-lg text-sm font-medium hover:bg-teal-200 dark:hover:bg-teal-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Project
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

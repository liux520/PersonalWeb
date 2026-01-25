'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User,
  Newspaper,
  BookOpen,
  Award,
  GraduationCap,
  Users,
  Mail,
  Github,
  MapPin,
  Calendar,
  ExternalLink,
  Download,
  ChevronRight,
  Sparkles,
  Code,
  Cpu,
  Brain,
  Zap,
  ChevronDown,
  Menu,
  X, Twitter, Globe,
} from 'lucide-react'
import Image from 'next/image'

// Google Scholar Icon Component
function GoogleScholarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 24C7.58172 24 4 20.4183 4 16C4 14.2019 4.6 12.4 5.7 10.9L12 18L18.3 10.9C19.4 12.4 20 14.2019 20 16C20 20.4183 16.4183 24 12 24Z"
        fill="#4285F4"
      />
      <path
        d="M5.7 10.9C4.6 12.4 4 14.2019 4 16C4 16.7 4.1 17.4 4.3 18L12 18L5.7 10.9Z"
        fill="#34A853"
      />
      <path
        d="M12 18L18.3 10.9C19.4 12.4 20 14.2019 20 16C20 16.7 19.9 17.4 19.7 18L12 18Z"
        fill="#FBBC05"
      />
      <path
        d="M12 2C8.5 2 5.4 3.6 3.4 6.1L12 16L20.6 6.1C18.6 3.6 15.5 2 12 2Z"
        fill="#EA4335"
      />
      <path
        d="M5.7 10.9L12 18L18.3 10.9C15.9 7.7 12 6.5 12 6.5C12 6.5 8.1 7.7 5.7 10.9Z"
        fill="white"
      />
      <path
        d="M12 6.5V16M3.4 6.1L12 16L20.6 6.1M5.7 10.9L12 18L18.3 10.9"
        stroke="#555555"
        strokeWidth="0.5"
      />
    </svg>
  )
}

const navItems = [
  { name: 'Profile', icon: User, href: '#profile' },
  { name: 'News', icon: Newspaper, href: '#news' },
  { name: 'Publications', icon: BookOpen, href: '#publications' },
  { name: 'Honors', icon: Award, href: '#honors' },
  { name: 'Education', icon: GraduationCap, href: '#education' },
  { name: 'Communications', icon: Users, href: '#communications' },
]

// Social media links configuration
const socialLinks = [
  { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub', color: 'hover:bg-gray-800' },
  { icon: GraduationCap, href: 'https://scholar.google.com/yourid', label: 'Google Scholar', color: 'hover:bg-blue-600' },
  { icon: Twitter, href: 'https://x.com/yourusername', label: 'X (Twitter)', color: 'hover:bg-black' },
  { icon: Mail, href: 'mailto:your.email@university.edu', label: 'Email', color: 'hover:bg-primary-500' },
]

const news = [
  {
    date: 'January 2025',
    title: 'Paper accepted at CVPR 2025',
    description: 'Our research on deep learning for computer vision has been accepted for presentation at CVPR 2025.',
    type: 'publication',
  },
  {
    date: 'December 2024',
    title: 'Invited talk at AI Research Symposium',
    description: 'Delivered an invited presentation on recent advances in neural architecture design.',
    type: 'talk',
  },
  {
    date: 'November 2024',
    title: 'Best Paper Award at NeurIPS Workshop',
    description: 'Received the Best Paper Award for our work on efficient transformer architectures.',
    type: 'award',
  },
  {
    date: 'October 2024',
    title: 'New research grant awarded',
    description: 'Secured funding for research on interpretable machine learning systems.',
    type: 'grant',
  },
]

interface Publication {
  title: string
  authors: string
  venue: string
  year: string
  type: 'journal' | 'conference'
  award?: string
  image?: string
  links: {
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
    image: '/images/paper1.jpg', // Add your paper thumbnail image
    links: { pdf: '#', code: '#', project: '#' },
  },
  {
    title: 'Efficient Transformer Architectures for Long-Range Dependencies',
    authors: 'Your Name, Coauthor One, Coauthor Two, Coauthor Three',
    venue: 'Conference on Neural Information Processing Systems (NeurIPS)',
    year: '2024',
    type: 'conference',
    award: 'Best Paper Award',
    image: '/images/paper2.jpg', // Add your paper thumbnail image
    links: { pdf: '#', code: '#', project: '#' },
  },
  {
    title: 'Self-Supervised Learning for Medical Image Analysis',
    authors: 'Your Name, Coauthor One',
    venue: 'Medical Image Computing and Computer Assisted Intervention (MICCAI)',
    year: '2024',
    type: 'conference',
    image: '/images/paper3.jpg', // Add your paper thumbnail image
    links: { pdf: '#', code: '#', project: '#' },
  },
  {
    title: 'Robust Federated Learning with Privacy Preservation',
    authors: 'Your Name, Coauthor One, Coauthor Two',
    venue: 'International Conference on Machine Learning (ICML)',
    year: '2023',
    type: 'conference',
    image: '/images/paper4.jpg', // Add your paper thumbnail image
    links: { pdf: '#', code: '#' },
  },
]

const honors = [
  {
    title: 'Outstanding Researcher Award',
    organization: 'National Science Foundation',
    year: '2024',
    description: 'Recognized for exceptional contributions to the field of machine learning.',
  },
  {
    title: 'Best PhD Thesis Award',
    organization: 'University Academic Committee',
    year: '2023',
    description: 'Awarded for doctoral dissertation on interpretable AI systems.',
  },
  {
    title: 'Graduate Research Fellowship',
    organization: 'Institute of Technology',
    year: '2022',
    description: 'Competitive fellowship supporting innovative research in AI.',
  },
  {
    title: 'Excellence in Teaching Award',
    organization: 'Department of Computer Science',
    year: '2022',
    description: 'Recognized for outstanding teaching and student mentorship.',
  },
]

const education = [
  {
    degree: 'Ph.D. in Computer Science',
    institution: 'University of Technology',
    location: 'City, Country',
    period: '2020 - 2024',
    advisor: 'Prof. Advisor Name',
    thesis: 'Title of Doctoral Dissertation',
    description: 'Research focused on interpretable machine learning and computer vision applications.',
  },
  {
    degree: 'M.S. in Computer Science',
    institution: 'State University',
    location: 'City, Country',
    period: '2018 - 2020',
    advisor: 'Prof. Advisor Name',
    thesis: 'Master Thesis Title',
    description: 'Specialized in deep learning and natural language processing.',
  },
  {
    degree: 'B.S. in Computer Science',
    institution: 'National University',
    location: 'City, Country',
    period: '2014 - 2018',
    description: 'Graduated with First Class Honors. Focus on algorithms and data structures.',
  },
]

const communications = [
  {
    role: 'Program Committee Member',
    venue: 'NeurIPS 2024, ICML 2024',
    description: 'Reviewed submissions for top-tier machine learning conferences.',
  },
  {
    role: 'Guest Editor',
    venue: 'Special Issue on Interpretable AI',
    journal: 'Journal of Machine Learning Research',
    description: 'Organizing special issue on interpretability in machine learning.',
  },
  {
    role: 'Invited Speaker',
    venue: 'AI Research Seminar Series',
    institution: 'Multiple Institutions',
    description: 'Delivered talks at various universities and research labs.',
  },
  {
    role: 'Conference Co-organizer',
    venue: 'Workshop on Robust AI',
    conference: 'NeurIPS 2023',
    description: 'Co-organized workshop focusing on robustness in AI systems.',
  },
]

const skills = [
  { category: 'Machine Learning', items: ['Deep Learning', 'Computer Vision', 'NLP', 'Reinforcement Learning'], icon: Brain },
  { category: 'Programming', items: ['Python', 'PyTorch', 'TensorFlow', 'C++', 'CUDA'], icon: Code },
  { category: 'Research Areas', items: ['Interpretable AI', 'Federated Learning', 'Self-Supervised Learning', 'Graph Neural Networks'], icon: Cpu },
  { category: 'Tools & Frameworks', items: ['Docker', 'Kubernetes', 'Git', 'CI/CD', 'Cloud Computing'], icon: Zap },
]

function useScrollSpy() {
  const [activeSection, setActiveSection] = useState('profile')

  useEffect(() => {
    const sections = navItems.map(item => item.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return activeSection
}

function Navbar({ activeSection }: { activeSection: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              className="text-xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary-500" />
                Research Portfolio
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeSection === item.href.slice(1)
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed inset-0 z-40 lg:hidden glass"
        >
          <div className="flex flex-col items-center justify-center h-full gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-6 py-3 rounded-full text-lg font-medium flex items-center gap-3 ${
                  activeSection === item.href.slice(1)
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                    : 'text-slate-700 dark:text-slate-300'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  )
}

// Tooltip component for social icons
function SocialTooltip({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="w-14 h-14 rounded-full bg-white/90 dark:bg-slate-800/90 shadow-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-110 relative z-20"
      >
        {children}
      </a>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 px-4 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm rounded-lg shadow-xl whitespace-nowrap z-30"
          >
            {href}
            {/* Arrow - positioned so tip points exactly to icon center */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-b-[5px] border-l-transparent border-r-transparent border-b-slate-900 dark:border-b-slate-100" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      {/* Gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-primary-400/30 to-accent-400/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-accent-400/30 to-primary-400/30 rounded-full blur-3xl"
      />

      {/* Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: (typeof window !== 'undefined' ? window.innerHeight : 1000) + 100,
            }}
            animate={{
              y: -100,
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: 'linear',
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary-400 via-accent-400 to-primary-600 p-1 shadow-2xl"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
              <User className="w-20 h-20 text-primary-500" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-gradient">Dr. Your Name</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-4"
          >
            Assistant Professor | Machine Learning Researcher
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto"
          >
            Department of Computer Science, University of Technology
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <a
              href="#publications"
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              View Publications
            </a>
            <a
              href="mailto:your.email@university.edu"
              className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 rounded-full font-medium hover:border-primary-500 hover:text-primary-500 transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
          </motion.div>

          {/* Social Icons with Tooltips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map((social) => (
              <SocialTooltip key={social.label} href={social.href} label={social.label}>
                <social.icon className="w-6 h-6" />
              </SocialTooltip>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function Profile() {
  return (
    <section id="profile" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gradient">About Me</h2>
          </div>

          {/* Light, clean background for About Me */}
          <div className="bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-slate-100/50 dark:border-slate-700/30 hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              I am an Assistant Professor in the Department of Computer Science at the University of Technology.
              My research focuses on developing interpretable and robust machine learning systems,
              with applications in computer vision, natural language processing, and healthcare.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Previously, I completed my Ph.D. at the University of Technology, where I worked on novel
              approaches for making deep neural networks more transparent and trustworthy. My work has
              been recognized with several awards, including the Best Paper Award at NeurIPS 2023 and
              the Outstanding Researcher Award from the National Science Foundation.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I am passionate about open science and actively contribute to the research community through
              open-source software, organized workshops, and mentorship programs for underrepresented
              groups in STEM.
            </p>

            {/* Research Interests */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                Research Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Interpretable Machine Learning',
                  'Computer Vision',
                  'Natural Language Processing',
                  'Federated Learning',
                  'Self-Supervised Learning',
                  'AI for Healthcare',
                  'Robust & Trustworthy AI',
                  'Graph Neural Networks',
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-slate-700 dark:text-slate-300 text-sm font-medium border border-blue-100 dark:border-blue-800/30"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills - Temporarily Commented Out */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gradient">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="glass rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <skillGroup.icon className="w-6 h-6 text-primary-500" />
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                    {skillGroup.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

function News() {
  const getTypeStyles = (type: string) => {
    const styles = {
      publication: 'from-blue-500 to-cyan-500',
      talk: 'from-purple-500 to-pink-500',
      award: 'from-amber-500 to-orange-500',
      grant: 'from-emerald-500 to-teal-500',
    }
    return styles[type as keyof typeof styles] || 'from-slate-500 to-slate-600'
  }

  return (
    <section id="news" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary-50/30 dark:to-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <Newspaper className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gradient">Latest News</h2>
          </div>

          <div className="space-y-6">
            {news.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${getTypeStyles(item.type)}`} />
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 px-4 py-2 rounded-xl bg-gradient-to-br ${getTypeStyles(item.type)} text-white text-sm font-semibold`}>
                    {item.date}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-primary-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium transition-colors"
            >
              View all news
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Publications() {
  const [filter, setFilter] = useState<'all' | 'journal' | 'conference'>('all')

  const filteredPublications = publications.filter(
    (pub) => filter === 'all' || pub.type === filter
  )

  // Default placeholder for papers without images
  const DefaultPaperIcon = () => (
    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-xl flex items-center justify-center">
      <BookOpen className="w-12 h-12 text-slate-400 dark:text-slate-500" />
    </div>
  )

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gradient">Publications</h2>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            {(['all', 'journal', 'conference'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === f
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:shadow-md'
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {filteredPublications.map((pub, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  <div className="flex gap-6">
                    {/* Paper Image - Left Side */}
                    <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40">
                      {pub.image ? (
                        <Image
                          src={pub.image}
                          alt={pub.title}
                          width={160}
                          height={160}
                          className="w-full h-full object-cover rounded-xl"
                          unoptimized
                        />
                      ) : (
                        <DefaultPaperIcon />
                      )}
                    </div>

                    {/* Paper Info - Right Side */}
                    <div className="flex-1 min-w-0">
                      {pub.award && (
                        <div className="mb-3">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold">
                            <Award className="w-3 h-3" />
                            {pub.award}
                          </span>
                        </div>
                      )}

                      <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-primary-500 transition-colors line-clamp-2">
                        {pub.title}
                      </h3>

                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        {pub.authors}
                      </p>

                      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">
                        {pub.venue} ({pub.year})
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {pub.links.pdf && (
                          <a
                            href={pub.links.pdf}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary-500 hover:text-white transition-all duration-300 text-xs font-medium"
                          >
                            <Download className="w-3.5 h-3.5" />
                            PDF
                          </a>
                        )}
                        {pub.links.code && (
                          <a
                            href={pub.links.code}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary-500 hover:text-white transition-all duration-300 text-xs font-medium"
                          >
                            <Code className="w-3.5 h-3.5" />
                            Code
                          </a>
                        )}
                        {pub.links.project && (
                          <a
                            href={pub.links.project}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary-500 hover:text-white transition-all duration-300 text-xs font-medium"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Project
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <BookOpen className="w-5 h-5" />
              View All Publications
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Honors() {
  return (
    <section id="honors" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-accent-50/30 dark:to-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gradient">Honors & Awards</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {honors.map((honor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">
                      {honor.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-2">
                      {honor.organization}
                    </p>
                    <p className="text-slate-500 dark:text-slate-500 text-sm mb-3 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {honor.year}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {honor.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gradient">Education</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 hidden sm:block" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-0 sm:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-4 border-white dark:border-slate-900 shadow-lg hidden sm:block" />

                  <div className="bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold">
                        {edu.period}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                      {edu.degree}
                    </h3>

                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                      {edu.institution}
                    </p>

                    {edu.advisor && (
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                        <span className="font-medium">Advisor:</span> {edu.advisor}
                      </p>
                    )}

                    {edu.thesis && (
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                        <span className="font-medium">Thesis:</span> {edu.thesis}
                      </p>
                    )}

                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Communications() {
  return (
    <section id="communications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary-50/30 dark:to-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gradient">Academic Service & Communications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communications.map((comm, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">
                      {comm.role}
                    </h3>
                    {comm.venue && (
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                        {comm.venue}
                      </p>
                    )}
                    {comm.journal && (
                      <p className="text-slate-500 dark:text-slate-500 text-sm mb-1">
                        {comm.journal}
                      </p>
                    )}
                    {comm.institution && (
                      <p className="text-slate-500 dark:text-slate-500 text-sm mb-1">
                        {comm.institution}
                      </p>
                    )}
                    {comm.conference && (
                      <p className="text-slate-500 dark:text-slate-500 text-sm mb-1">
                        {comm.conference}
                      </p>
                    )}
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                      {comm.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Dr. Your Name</h3>
            <p className="text-slate-400">
              Assistant Professor, Department of Computer Science
            </p>
            <p className="text-slate-400">
              University of Technology
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 text-slate-400 hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Your Name. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, Tailwind CSS, and Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  const activeSection = useScrollSpy()

  return (
    <main className="min-h-screen">
      <Navbar activeSection={activeSection} />
      <Hero />
      <Profile />
      <News />
      <Publications />
      <Honors />
      <Education />
      <Communications />
      <Footer />
    </main>
  )
}

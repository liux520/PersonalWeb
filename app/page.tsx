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
  X,
  Twitter,
} from 'lucide-react'
import Image from 'next/image'

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
    type: 'publication',
  },
  {
    date: 'October 2024',
    title: 'New research grant awarded',
    description: 'Secured funding for research on interpretable machine learning systems.',
    type: 'talk',
  },
  {
    date: 'October 2024',
    title: 'New research grant awarded',
    description: 'Secured funding for research on interpretable machine learning systems.',
    type: 'grant',
  }
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

// Skills - Temporarily Commented Out
// const skills = [
//   { category: 'Machine Learning', items: ['Deep Learning', 'Computer Vision', 'NLP', 'Reinforcement Learning'], icon: Brain },
//   { category: 'Programming', items: ['Python', 'PyTorch', 'TensorFlow', 'C++', 'CUDA'], icon: Code },
//   { category: 'Research Areas', items: ['Interpretable AI', 'Federated Learning', 'Self-Supervised Learning', 'Graph Neural Networks'], icon: Cpu },
//   { category: 'Tools & Frameworks', items: ['Docker', 'Kubernetes', 'Git', 'CI/CD', 'Cloud Computing'], icon: Zap },
// ]

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

// Hero Section with Background Image Carousel - Premium Redesign
function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Background images - Update these paths with your actual images
  const backgroundImages = [
    {
      url: '/images/scu-1.jpg',
      title: 'Campus'
    },
    {
      url: '/images/scu-4.jpg',
      title: 'Campus'
    },
    {
      url: '/images/scu-2.jpg',
      title: 'Campus'
    },
    {
      url: '/images/scu-3.jpg',
      title: 'Campus'
    },
    {
      url: '/images/my-1.jpg',
      title: 'Campus'
    },
    {
      url: '/images/my-2.jpg',
      title: 'Campus'
    },
    {
      url: '/images/my-3.jpg',
      title: 'Campus'
    },
    {
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
      title: 'AI Research Lab'
    }
  ]

  // Auto-rotate images every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [backgroundImages.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % backgroundImages.length)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 1.1,
            }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={image.url}
              alt={image.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Multi-layer gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/70 to-indigo-950/85" />
            {/* Radial vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
          </motion.div>
        ))}
      </div>

      {/* Decorative animated gradient orb */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"
      />

      {/* Noise texture overlay for premium feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
      }} />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 150, damping: 20 }}
            className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8"
          >
            {/* Animated ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full p-1"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-400" />
            </motion.div>

            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-700 dark:to-slate-900 flex items-center justify-center shadow-xl">
              <User className="w-16 h-16 sm:w-20 sm:h-20 text-slate-600 dark:text-slate-300" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight"
          >
            <span className="text-white drop-shadow-lg">Dr. Your Name</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base sm:text-lg text-slate-200 mb-2 tracking-wide font-medium"
          >
            Assistant Professor
            <span className="mx-2 text-slate-500">•</span>
            Machine Learning Researcher
          </motion.p>

          {/* Institution */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="text-sm sm:text-base text-slate-300 mb-8 tracking-wide"
          >
            Department of Computer Science
            <span className="mx-2 text-slate-500">|</span>
            University of Technology
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            {/* View Publications Button - Commented Out */}
            {/* <a
              href="#publications"
              className="group relative px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                View Publications
              </span>
            </a> */}
            {/* Contact Me Button - Commented Out */}
            {/* <a
              href="mailto:your.email@university.edu"
              className="px-6 py-3 bg-white/10 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a> */}
          </motion.div>

          {/* Social Icons with Tooltips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="inline-flex items-center gap-5"
          >
            {socialLinks.map((social, index) => {
              const [isHovered, setIsHovered] = useState(false)
              const [isTooltipHovered, setIsTooltipHovered] = useState(false)
              return (
                <div
                  key={social.label}
                  className="relative"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => {
                    setIsHovered(false)
                    setIsTooltipHovered(false)
                  }}
                >
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>

                  {/* Tooltip - positioned closer to icon */}
                  {(isHovered || isTooltipHovered) && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 z-30"
                      onMouseEnter={() => setIsTooltipHovered(true)}
                      onMouseLeave={() => setIsTooltipHovered(false)}
                    >
                      {/* Tooltip content - selectable */}
                      <div className="relative px-2.5 py-1 bg-slate-900 dark:bg-slate-800 text-white text-[10px] sm:text-xs rounded shadow-lg whitespace-nowrap select-text cursor-text">
                        {social.href}
                        {/* Arrow - tip points exactly to icon center */}
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-b-[4px] border-l-transparent border-r-transparent border-b-slate-900 dark:border-b-slate-800" />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Image Thumbnails - Bottom Right - Redesigned */}
      <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 z-20">
        <div className="flex flex-col gap-2 items-end">
          {/* Navigation arrows */}
          <div className="flex gap-1 p-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
            <button
              onClick={goToPrev}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
            </button>
            <button
              onClick={goToNext}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Thumbnails - aligned with arrows width */}
          <div className="flex flex-col gap-1.5">
            {backgroundImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-amber-400 scale-105 shadow-lg shadow-amber-400/30'
                    : 'border-white/20 opacity-50 hover:opacity-80 hover:border-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}: ${image.title}`}
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
                {/* Active indicator */}
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-amber-400/20"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {/* Slide number */}
                <div className="absolute bottom-1 left-1 px-1.5 py-0.5 bg-black/60 backdrop-blur-sm rounded text-white text-[10px] font-medium">
                  {index + 1}
                </div>
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-20 h-0.5 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-400 to-orange-400"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              key={currentIndex}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator - Bottom Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-8 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-white/10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-white/10" />
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

          {/* Scrollable news container */}
          <div className="max-h-[400px] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
            {news.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${getTypeStyles(item.type)}`} />
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 px-3 py-1.5 rounded-lg bg-gradient-to-br ${getTypeStyles(item.type)} text-white text-xs font-semibold`}>
                    {item.date}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-1 group-hover:text-primary-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
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
              href="/news"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Newspaper className="w-5 h-5" />
              View all news
              <ExternalLink className="w-4 h-4" />
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
              href="/publications"
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <a
              href="/honors"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Award className="w-5 h-5" />
              View More Honors & Awards
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <a
              href="/service"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Users className="w-5 h-5" />
              View More Academic Service & Communications
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
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

// Home page component
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
      <Communications />
      <Education />
      <Footer />
    </main>
  )
}

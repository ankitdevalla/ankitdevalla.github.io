'use client'

import Image from 'next/image'
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillFile,
} from 'react-icons/ai'
import avatar from '../public/avatar.jpg'
import ad from '../public/ad.png'
import openai from '../public/openai.png'
import nasa from '../public/nasa.png'
import argo from '../public/argo.png'
import mm from '../public/mm.webp'
import vet from '../public/vet.jpg'
import logo2 from '../public/logo2.webp'

const experiences = [
  {
    id: 'openai',
    company: 'OpenAI',
    role: 'Software Engineer',
    period: 'Current',
    logo: openai,
    highlight: 'Building reliable, human-centered systems.',
  },
  {
    id: 'jane',
    company: 'Jane Street',
    role: 'TDOE Intern',
    period: '2025',
    logo: '/js.jpeg',
    highlight: 'Low-latency data pipelines for live Bloomberg market data.',
  },
  {
    id: 'nasa',
    company: 'NASA + CACI',
    role: 'Software Engineering Intern',
    period: '2024',
    logo: nasa,
    highlight: 'Mission-critical web tooling for Lunar Gateway data models.',
  },
  {
    id: 'argo',
    company: 'Argo Data Resource Corporation',
    role: 'Software Engineering Intern',
    period: '2023',
    logo: argo,
    highlight: 'Full stack delivery for banking infrastructure and telemetry.',
  },
]

const projects = [
  {
    id: 'bracketbrain',
    title: 'BracketBrain',
    link: 'https://bracketbrain.streamlit.app',
    image: mm,
    summary: 'March Madness prediction platform blending live odds with ML-driven insights.',
  },
  {
    id: 'meal-planner',
    title: 'Smart Meal Planner',
    image: logo2,
    summary: 'Personalized recipes from your pantry, with fine-tuned generation.',
  },
  {
    id: 'vetassist',
    title: 'VetAssist',
    image: vet,
    summary: 'A resource hub for veterans with targeted filtering and secure access.',
  },
]

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0d10] text-[#e5e7eb]">
      <div className="ambient" />
      <main className="relative px-6 pb-24 pt-10 md:px-12 lg:px-20">
        <section className="fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9aa3b2]">ankitdevalla.com</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl leading-tight text-white md:text-6xl">
                Ankit Devalla
              </h1>
              <p className="text-lg text-[#9aa3b2] md:text-xl">
                UT Austin CS + Statistics student building full stack and ML systems.
              </p>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#232835] px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[#9aa3b2]">
                <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
                Currently at OpenAI
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:devalla.ankit@gmail.com"
                  className="rounded-full border border-[#232835] px-5 py-2 text-xs uppercase tracking-[0.3em] text-[#9aa3b2] transition hover:border-[#22c55e] hover:text-[#22c55e]"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/ankit-devalla/"
                  className="rounded-full border border-[#232835] px-5 py-2 text-xs uppercase tracking-[0.3em] text-[#9aa3b2] transition hover:border-[#22c55e] hover:text-[#22c55e]"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ankitdevalla"
                  className="rounded-full border border-[#232835] px-5 py-2 text-xs uppercase tracking-[0.3em] text-[#9aa3b2] transition hover:border-[#22c55e] hover:text-[#22c55e]"
                >
                  GitHub
                </a>
                <a
                  href="https://x.com/DevallaAnkit"
                  className="rounded-full border border-[#232835] px-5 py-2 text-xs uppercase tracking-[0.3em] text-[#9aa3b2] transition hover:border-[#22c55e] hover:text-[#22c55e]"
                >
                  X
                </a>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="relative h-60 w-60 overflow-hidden rounded-3xl border border-[#232835] float-slow">
                <Image
                  src={ad}
                  alt="Ankit Devalla"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-[#232835] bg-[#12151b] px-5 py-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-[#232835] bg-white">
                  <Image
                    src={openai}
                    alt="OpenAI"
                    fill
                    sizes="56px"
                    className="object-contain p-1.5"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#6b7280]">Now</p>
                  <p className="text-base text-white">OpenAI</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 fade-up" style={{ animationDelay: '120ms' }}>
          <h2 className="text-xs uppercase tracking-[0.3em] text-[#6b7280]">Experience</h2>
          <div className="mt-6 space-y-5">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="flex flex-wrap items-center justify-between gap-4 border-b border-[#232835] pb-4"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#6b7280]">{experience.period}</p>
                  <p className="mt-2 text-white">
                    {experience.company} · {experience.role}
                  </p>
                  <p className="mt-1 text-sm text-[#9aa3b2]">{experience.highlight}</p>
                </div>
                <div
                  className={`relative h-12 w-12 overflow-hidden rounded-xl border border-[#232835] ${
                    experience.id === 'openai' ? 'bg-white' : 'bg-[#0b0d10]'
                  }`}
                >
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    fill
                    sizes="48px"
                    className="object-contain p-1.5"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 fade-up" style={{ animationDelay: '220ms' }}>
          <h2 className="text-xs uppercase tracking-[0.3em] text-[#6b7280]">Projects</h2>
          <div className="mt-6 space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-wrap items-center justify-between gap-4 border-b border-[#232835] pb-4"
              >
                <p className="text-white">
                  {project.link ? (
                    <a href={project.link} className="transition hover:text-[#22c55e]">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </p>
                <p className="text-sm text-[#9aa3b2]">{project.summary}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

import {
  svgProjectBmg,
  svgProjectGlobo,
  svgProjectFindto,
  SvgMdn,
  SvgMicrosoft,
  svgProjectVarejoAqui,
  svgProjectTCMPA,
  svgProjectUFPA,
  svgProjectSuperia,
  SvgProjectNufen,
  SvgNaCuia,
  SvgCacba,
  SvgCheckTest,
  svgActDigital,
  svgTalito,
} from '../components/Svgs'

export interface IProjects {
  name: string
  url: string
  description: string
  tags: string[]
  icon: JSX.Element
  active: boolean
}

export const projects: IProjects[] = [
  {
    name: 'Banco Bmg',
    url: 'https://www.bancobmg.com.br/',
    description:
      'Web Application for a bank in Brazil, with 3.6 billion in Loans sales per year (4T24).',
    tags: [
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'GraphQL',
      'Storybook',
      'Microsoft Azure',
      'AWS',
    ],
    icon: svgProjectBmg,
    active: true,
  },
  {
    name: 'Globo',
    url: 'https://www.globo.com/',
    description:
      'Web Accessibility for the largest content portal in Brazil, with 1 billion accesses per month (4T23).',
    tags: [
      'JavaScript',
      'Preact',
      'Node.js',
      'Performance',
      'Accessibility',
      'Python',
      'Docker',
    ],
    icon: svgProjectGlobo,
    active: true,
  },
  {
    name: 'Findto',
    url: 'https://findto.app/',
    description:
      'Open source assistant of decentralized search on the Web and AI, as a Progressive Web App.',
    tags: [
      'Open Source',
      'PWA',
      'TypeScript',
      'React',
      'Next.js',
      'CSS',
      'APIs',
    ],
    icon: svgProjectFindto,
    active: true,
  },
  {
    name: 'MDN Web Docs',
    url: 'https://developer.mozilla.org/',
    description:
      'I contribute to the MDN Web Docs portuguese translations of JavaScript, Web APIs, and open standards.',
    tags: [
      'Open Source',
      'Translations',
      'Web APIs',
      'JavaScript',
      'HTML',
      'CSS',
      'Accessibility',
    ],
    icon: SvgMdn,
    active: true,
  },
  {
    name: 'Microsoft Open Source',
    url: 'https://learn.microsoft.com/',
    description:
      'I contribute to the Microsoft Open Source portuguese translations of AI an Web technologies.',
    tags: ['Open Source', 'Translations', 'AI', 'Web'],
    icon: SvgMicrosoft,
    active: true,
  },
  {
    name: 'act digital',
    url: 'https://actdigital.com/',
    description:
      'IT Consultant and Specialist in Frontend technologies for stand out companies.',
    tags: ['IT', 'Consultant', 'Specialist', 'Frontend'],
    icon: svgActDigital,
    active: true,
  },
  {
    name: 'CheckTest',
    url: 'https://checktest.dev/',
    description:
      'Ope source project for testing web apps with a11y, SEO, and performance tools.',
    tags: ['Open Source', 'Tests', 'Frontend', 'Web Apps'],
    icon: SvgCheckTest,
    active: true,
  },
  {
    name: 'Talito AI',
    url: 'https://talito.com.br/',
    description: 'AI finance information chatbot for Brazil consumers.',
    tags: ['AI', 'Frontend', 'React'],
    icon: svgTalito,
    active: true,
  },
  {
    name: 'Varejo Aqui',
    url: 'https://loja.varejoaqui.online/',
    description:
      'E-commerce Web Responsive and Mobile App with real-time payments APIs, like Pix and credit card, for Brazil retailers and industries.',
    tags: [
      'React',
      'React Native',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Android Studio',
    ],
    icon: svgProjectVarejoAqui,
    active: true,
  },
  {
    name: 'Municipalities Court of Accounts of Pará',
    url: 'https://www.tcm.pa.gov.br/servicos/sessoes/',
    description:
      'Website, Intranet, Web Apps, APIs, AWS S3 integration, Data Visualization, and Accessibility for a court.',
    tags: [
      'JavaScript',
      'PHP',
      'Node.js',
      'Java',
      'PostgreSQL',
      'SEO',
      'Accessibility',
      'AWS',
    ],
    icon: svgProjectTCMPA,
    active: true,
  },
  {
    name: 'Superia',
    url: 'https://linkedin.com/in/lucasmezs',
    description:
      'Web Application and Web Components for an international trading company.',
    tags: ['TypeScript', 'Vue.js', 'CSS', 'Atomic Design'],
    icon: svgProjectSuperia,
    active: true,
  },
  {
    name: 'Federal University of Pará',
    url: 'https://www.radio.ufpa.br/webdoc60/',
    description:
      'Live Audio and Video Streaming with Web Player, Websites, CMS, and Web Documentary for an university.',
    tags: ['JavaScript', 'PHP', 'Node.js', 'Python', 'MySQL', 'SEO', 'UI'],
    icon: svgProjectUFPA,
    active: true,
  },
  {
    name: 'Nufen',
    url: 'https://linkedin.com/in/lucasmezs',
    description: 'Website for mental health service with online therapy.',
    tags: ['JavaScript', 'CSS', 'PHP', 'WordPress', 'MySQL', 'SEO', 'UI', 'UX'],
    icon: SvgProjectNufen,
    active: true,
  },
  {
    name: 'Na Cuia',
    url: 'https://linkedin.com/in/lucasmezs',
    description:
      'Website for a cultural production company and magazine in the Amazon region.',
    tags: ['JavaScript', 'CSS', 'PHP', 'WordPress', 'MySQL', 'SEO'],
    icon: SvgNaCuia,
    active: true,
  },
  {
    name: 'CACBA',
    url: 'https://linkedin.com/in/lucasmezs',
    description:
      'Hacked Website recovered and redesigned for a non-profit organization of children and adolescents protection in the Amazon region.',
    tags: ['JavaScript', 'CSS', 'PHP', 'WordPress', 'MySQL', 'SEO'],
    icon: SvgCacba,
    active: true,
  },
]

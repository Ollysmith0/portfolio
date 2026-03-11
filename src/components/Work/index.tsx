import { Card, CardMedia, Typography, Box } from '@mui/material';
import { Group, Build } from '@mui/icons-material';
import { motion } from 'framer-motion';
import PropertyGuruVN from '@/assets/propertyguruvn.png';
import MoneyForwardVN from '@/assets/cloudfixedasset.png';
import PlanetTota from '@/assets/planettota.png';
import PatientPop from '@/assets/patientpop.png';
import FigEcommerceMobile from '@/assets/e-commerce-mobile.png';
import FigFinanceMobile from '@/assets/finance-app.png';
import FigFinanceCourse from '@/assets/web-finance.png';


const projects = [
  {
    title: 'Proptech Project',
    description:
      'This is a real estate platform providing services for users to buy, sell, and rent properties.',
    image: PropertyGuruVN,
    tools: [
      'HTML',
      'SCSS',
      'JavaScript',
      'React',
      'Dotnet Core',
      'C#',
      'Kafka',
      'Google Tag Manager',
      'Redux',
      'Eslint',
      'Figma',
      'Docker',
      '...',
    ],
    teamSize: 7,
    link: 'https://batdongsan.com.vn/',
  },
  {
    title: 'Block Chain Project',
    description:
      'This project is to provide a NFT marketplace for users to buy and sell NFTs. Also games, movies, shopping, and more.',
    image: PlanetTota,
    tools: [
      'React',
      'Node.js',
      'MongoDB',
      'ExpressJS',
      'Jest',
      'EtherJS',
      'Wagmi',
      'Styled-component',
      'Redux',
      'Redux-thunk',
      'Figma',
      'Docker',
      '...',
    ],
    teamSize: 8,
    link: 'https://planettota.com/',
  },
  {
    title: 'Cloud fixed asset Project',
    description:
      'This project is a cloud-based fixed asset management system for small and medium enterprises in Japan.',
    image: MoneyForwardVN,
    tools: [
      'React',
      'Golang',
      'MySQL',
      'Jest',
      'Redux',
      'Redux-saga',
      'Eslint',
      'Styled-component',
      'Jest',
      'Mocha',
      'React-testing-library',
      'Docker',
      'Figma',
      'Storybook',
      '...',
    ],
    teamSize: 7,
    link: 'https://biz.moneyforward.com/fixed-assets',
  },
  {
    title: 'Patient pop Project',
    description:
      'This project is a healthcare platform providing services for users to manage their health records and connect with doctors.',
    image: PatientPop,
    tools: ['React', 'C++', 'Redis', 'React Electron', 'Jest', 'Scss', '...'],
    teamSize: 9,
    link: 'https://get.patientpop.com/',
  },
];

const figmaProjects = [
  {
    title: 'Mobile E-commerce App',
    description:
      'This is a mobile e-commerce app design that provides a user-friendly interface for shopping.',
    image: FigEcommerceMobile,
    link: 'https://www.figma.com/design/ftc3dHBiZHX8w66p2Eix5h/Katus?node-id=0-1&p=f&t=B1kfyX6BvRITD7zQ-0',
  },
  {
    title: 'Mobile Financial Management App',
    description:
      'This is a mobile financial management app design that provides a user-friendly interface for financial management.',
    image: FigFinanceMobile,
    link: 'https://www.figma.com/design/7t7T2OqCpetLdhX8mAJrzb/stock?node-id=0-1&t=D2HP22jP0YV0vsJz-1',
  },
  {
    title: 'Web Finance Course',
    description:
      'This is a web financial course design that provides a user-friendly interface for course, learner.',
    image: FigFinanceCourse,
    link: 'https://www.figma.com/design/7t7T2OqCpetLdhX8mAJrzb/stock?node-id=148-3&t=D2HP22jP0YV0vsJz-1',
  },
];

const templateProjects = [
  {
    title: 'Velocity SaaS Landing',
    description:
      'Animated dark-mode SaaS landing page with hero section, feature grid, pricing cards, and scroll-triggered animations.',
    gradient: 'linear-gradient(135deg, #1a0533 0%, #4c1d95 50%, #0ea5e9 100%)',
    tools: ['React', 'Vite', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    link: 'https://1-saas-landing.vercel.app',
  },
  {
    title: 'Alex Morrow – Dev Portfolio',
    description:
      'Minimal dark developer portfolio template with typewriter effect, project showcase, skills grid, and contact form.',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #0e7490 100%)',
    tools: ['React', 'Vite', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    link: 'https://saas-portfolio-2.vercel.app',
  },
  {
    title: 'Aurora – Editorial Blog',
    description:
      'Warm editorial blog theme with serif typography, dark mode toggle, post grid, sidebar widgets, and newsletter signup.',
    gradient: 'linear-gradient(135deg, #fef3c7 0%, #dc2626 60%, #991b1b 100%)',
    tools: ['WordPress', 'PHP', 'SCSS', 'Gutenberg', 'Custom Theme'],
    link: 'https://aurora-blog-teal.vercel.app',
  },
  {
    title: 'Nexus – Corporate SaaS',
    description:
      'Professional dark-navy corporate landing page with animated stat counters, feature highlights, and team section.',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #3b82f6 100%)',
    tools: ['WordPress', 'PHP', 'SCSS', 'Elementor', 'Custom Theme'],
    link: 'https://nexus-corporate-one.vercel.app',
  },
  {
    title: 'Noir – Luxury Fashion Store',
    description:
      'High-fashion Shopify theme in black and gold with full-screen hero, editorial product grid, and slide-out cart drawer.',
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #3d2b00 50%, #d4af37 100%)',
    tools: ['Shopify', 'Liquid', 'SCSS', 'JavaScript', 'Custom Theme'],
    link: 'https://noir-fashion-tan.vercel.app',
  },
  {
    title: 'Bloom – Beauty & Skincare Store',
    description:
      'Pastel-rose beauty store theme with animated blob hero, product collections, and free-shipping progress bar in cart.',
    gradient: 'linear-gradient(135deg, #fdf2f8 0%, #f9a8d4 50%, #be185d 100%)',
    tools: ['Shopify', 'Liquid', 'SCSS', 'JavaScript', 'Custom Theme'],
    link: 'https://bloom-beauty-sand.vercel.app',
  },
];

const Project = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mt-6">
      <section id="project">
        <h3 className="text-2xl font-extrabold text-blue-200">
          My code projects
        </h3>
        <hr className="border-blue-200 my-2" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Card
                  className="bg-gray-800 text-white overflow-hidden"
                  style={{ height: '250px' }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={project.image}
                    alt={`${project.title} preview`}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sx={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-4">
                    <Typography
                      variant="h6"
                      className="font-bold text-white mb-2"
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="body2" className="text-gray-300 mb-2">
                      {project.description}
                    </Typography>
                    <Box className="flex items-center gap-2 my-1">
                      <Build fontSize="small" className="text-green-400" />
                      <Typography
                        variant="subtitle2"
                        className="font-semibold text-white"
                      >
                        Tools & Languages:
                      </Typography>
                    </Box>
                    <Typography variant="body2" className="text-gray-300 mb-2">
                      {project.tools.join(', ')}
                    </Typography>
                    <Box className="flex items-center gap-2">
                      <Group fontSize="small" className="text-blue-400" />
                      <Typography
                        variant="subtitle2"
                        className="font-semibold text-white"
                      >
                        Team Size:
                      </Typography>
                    </Box>
                    <Typography variant="body2" className="text-gray-300">
                      {project.teamSize}
                    </Typography>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
      <section id="figma-projects" className="mt-16">
        <h3 className="text-2xl font-extrabold text-pink-200">
          My Figma UI/UX Projects
        </h3>
        <hr className="border-pink-200 my-2" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {figmaProjects.map((project, i) => (
            <motion.div
              key={i}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Card
                  className="bg-gray-800 text-white overflow-hidden"
                  style={{ height: '250px' }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sx={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-4">
                    <Typography
                      variant="h6"
                      className="font-bold text-white mb-2"
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="body2" className="text-gray-300">
                      {project.description}
                    </Typography>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
      <section id="template-projects" className="mt-16">
        <h3 className="text-2xl font-extrabold text-emerald-200">
          My Template Projects
        </h3>
        <hr className="border-emerald-200 my-2" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {templateProjects.map((project, i) => (
            <motion.div
              key={i}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Card
                  className="bg-gray-800 text-white overflow-hidden"
                  style={{ height: '250px' }}
                >
                  <Box
                    sx={{
                      background: project.gradient,
                      height: '100%',
                      width: '100%',
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-4">
                    <Typography
                      variant="h6"
                      className="font-bold text-white mb-2"
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="body2" className="text-gray-300 mb-2">
                      {project.description}
                    </Typography>
                    <Box className="flex items-center gap-2 my-1">
                      <Build fontSize="small" className="text-green-400" />
                      <Typography
                        variant="subtitle2"
                        className="font-semibold text-white"
                      >
                        Tools & Languages:
                      </Typography>
                    </Box>
                    <Typography variant="body2" className="text-gray-300">
                      {project.tools.join(', ')}
                    </Typography>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;

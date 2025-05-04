import { Card, CardMedia, Typography, Box } from '@mui/material';
import { Group, Build } from '@mui/icons-material';
import { motion } from 'framer-motion';
import PropertyGuruVN from '@/assets/propertyguruvn.png';
import MoneyForwardVN from '@/assets/cloudfixedasset.png';
import PlanetTota from '@/assets/planettota.png';
import PatientPop from '@/assets/patientpop.png';

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

const Project = () => {
  return (
    <section id="project">
      <h3 className="text-2xl font-extrabold text-blue-200">
        My recent projects
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
  );
};

export default Project;

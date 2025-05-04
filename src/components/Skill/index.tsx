import { Code, Server, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  SiCss3,
  SiHtml5,
  SiGit,
  SiJavascript,
  SiSemanticuireact,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiMysql,
  SiFirebase,
  SiSass,
  SiJest,
  SiMocha,
  SiCypress,
} from '@icons-pack/react-simple-icons';

const Skill = () => {
  const skills = [
    {
      title: 'Front-End',
      experience: '5 years Experience',
      icon: <Code size={32} className="text-blue-400" />,
    },
    {
      title: 'Back-End',
      experience: '1 Year Experience',
      icon: <Server size={32} className="text-green-400" />,
    },
    {
      title: 'UI/UX Designer',
      experience: '1 Year Experience',
      icon: <PenTool size={32} className="text-pink-400" />,
    },
  ];

  const tools = [
    { name: 'HTML5', icon: <SiHtml5 size={32} className="text-orange-500" /> },
    { name: 'CSS3', icon: <SiCss3 size={32} className="text-blue-500" /> },
    {
      name: 'JavaScript',
      icon: <SiJavascript size={32} className="text-yellow-400" />,
    },
    {
      name: 'React',
      icon: <SiSemanticuireact size={32} className="text-blue-300" />,
    },
    {
      name: 'Node.js',
      icon: <SiNodedotjs size={32} className="text-green-500" />,
    },
    { name: 'Git', icon: <SiGit size={32} className="text-red-500" /> },
    {
      name: 'TypeScript',
      icon: <SiTypescript size={32} className="text-blue-600" />,
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss size={32} className="text-blue-400" />,
    },
    { name: 'Figma', icon: <SiFigma size={32} className="text-pink-500" /> },
    {
      name: 'NextJS',
      icon: <SiNextdotjs size={32} className="text-green-600" />,
    },
    { name: 'MySQL', icon: <SiMysql size={32} className="text-blue-500" /> },
    {
      name: 'Firebase',
      icon: <SiFirebase size={32} className="text-yellow-500" />,
    },
    {
      name: 'Scss',
      icon: <SiSass size={32} className="text-yellow-500" />,
    },
    {
      name: 'Jest',
      icon: <SiJest size={32} className="text-blue-500" />,
    },
    {
      name: 'Mocha',
      icon: <SiMocha size={32} className="text-green-500" />,
    },
    {
      name: 'Cypress',
      icon: <SiCypress size={32} className="text-blue-500" />,
    },
  ];

  return (
    <section id="skill" className="">
      <motion.h3
        className="text-3xl font-extrabold text-blue-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h3>
      <motion.hr
        className="border-blue-200 my-4"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.5 }}
      />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center justify-center mb-4">
              {skill.icon}
            </div>
            <h4 className="font-bold text-lg text-white text-center">
              {skill.title}
            </h4>
            <p className="text-xs text-gray-400 text-center">
              {skill.experience}
            </p>
          </motion.div>
        ))}
      </div>
      <motion.h3
        className="text-3xl font-extrabold text-blue-200 mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Languages & Tools
      </motion.h3>
      <motion.hr
        className="border-blue-200 my-4"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.5 }}
      />
      <div className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-6">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {tool.icon}
            <p className="text-xs text-gray-400 mt-2">{tool.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skill;

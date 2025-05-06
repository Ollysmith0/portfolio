import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Work from '../components/Work';
import Testimonial from '../components/Testimonial';

export default function SkillPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <Link to="/portfolio" className="text-2xl font-bold">
          <span className="text-white">Olly</span>
          <span className="text-gray-400">smith</span>
        </Link>
        <nav className="space-x-6 hidden md:block">
          <Link
            to="/skill"
            className="hover:text-teal-400 transition-colors duration-200"
          >
            My skills
          </Link>
          <Link
            to="/projects"
            className="hover:text-teal-400 transition-colors duration-200"
          >
            My recent projects
          </Link>
          <a
            onClick={() =>
              (window.location.href =
                'mailto:ollysmith0@gmail.com?subject=Schedule%20a%20Call&body=Hi,%20I%20would%20like%20to%20schedule%20a%20call.')
            }
            className="hover:text-teal-400 transition-colors duration-200 cursor-pointer"
          >
            Contact me
          </a>
        </nav>
        <a
          className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-teal-400 hover:text-white transition-colors duration-200 cursor-pointer"
          onClick={() =>
            (window.location.href =
              'mailto:ollysmith0@gmail.com?subject=Schedule%20a%20Call&body=Hi,%20I%20would%20like%20to%20schedule%20a%20call.')
          }
        >
          Schedule a call
        </a>
      </header>

      <motion.section
        className="flex flex-col lg:flex-row justify-center px-8 py-16 lg:py-24 gap-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Work />
      </motion.section>

      <motion.section className="px-8 pb-16">
        <Testimonial />
      </motion.section>
      <motion.section className="px-8 pb-16">
        <Footer />
      </motion.section>
    </div>
  );
}

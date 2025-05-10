import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Profile from './assets/profile.jpeg';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import useTypingEffect from './hooks/useTypingEffect';

export default function App2() {
  const textElement = useTypingEffect();
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <Link to="/portfolio" className="text-2xl font-bold">
          <span className="text-white mr-1">Olly</span>
          <span className="text-teal-400">smith</span>
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
            className="hover:text-teal-400 transition-colors duration-200 cursor-pointer"
            onClick={() =>
              (window.location.href =
                'mailto:ollysmith0@gmail.com?subject=Schedule%20a%20Call&body=Hi,%20I%20would%20like%20to%20schedule%20a%20call.')
            }
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

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row flex-start px-8 py-16 lg:py-24 gap-12">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={Profile}
            alt="Jessie portrait"
            className="rounded-xl w-full object-cover"
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400 text-lg">
            Welcome, it’s a pleasure to connect with you. My name is
          </p>
          <h1 className="text-5xl font-extrabold text-teal-400 my-4">
            <span className="mr-1">Olly</span>
            <span className="text-gray-400">smith</span>
          </h1>
          <h4 className="text-3xl font-bold text-white mb-4">{textElement}</h4>
        </motion.div>
      </section>

      <section className="px-8 pb-16">
        <Testimonial />
      </section>
      <section className="px-8 pb-16">
        <Footer />
      </section>
    </div>
  );
}

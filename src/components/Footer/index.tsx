import { Facebook, GitHub, LinkedIn, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="p-6 flex justify-between items-center">
      <h1 className="font-bold text-xl">
        <span className="text-white">Olly</span>
        <span className="text-gray-400">smith</span>
      </h1>
      <div className="flex space-x-4">
        <a
          href="https://github.com/Ollysmith0"
          aria-label="GitHub"
          className="transition-transform transform hover:scale-110 hover:text-green-400"
        >
          <GitHub className="text-white w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/huynh-tu-66422a195/"
          aria-label="LinkedIn"
          className="transition-transform transform hover:scale-110 hover:text-blue-400"
        >
          <LinkedIn className="text-white w-6 h-6" />
        </a>
        <a
          href="https://www.youtube.com/@OllySmithWhatIF"
          aria-label="YouTube"
          className="transition-transform transform hover:scale-110 hover:text-red-400"
        >
          <YouTube className="text-white w-6 h-6" />
        </a>
        <a
          href="https://www.facebook.com/tu.huynh.399"
          aria-label="Facebook"
          className="transition-transform transform hover:scale-110 hover:text-blue-600"
        >
          <Facebook className="text-white w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

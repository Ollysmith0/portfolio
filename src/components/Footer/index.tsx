import githubIcon from '@/assets/github-icon.svg';
import linkedinIcon from '@/assets/linkedin-icon.webp';
import facebookIcon from '@/assets/facebook-icon.png';
import { SOCIAL_LINKS } from '@/constants';

const SOCIAL_ITEMS = [
  { label: 'GitHub', url: SOCIAL_LINKS.github, icon: githubIcon },
  { label: 'LinkedIn', url: SOCIAL_LINKS.linkedin, icon: linkedinIcon },
  { label: 'Facebook', url: SOCIAL_LINKS.facebook, icon: facebookIcon },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] py-10 px-8 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-sm font-medium tracking-widest uppercase">
            <span className="text-[#6EE7B7]">Olly</span>
            <span className="text-[#F9FAFB]">smith</span>
            <span className="text-[#6EE7B7]">.</span>
          </span>
          <p className="text-xs text-[#6B7280]">
            &copy; {new Date().getFullYear()} Olly Smith. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {SOCIAL_ITEMS.map(({ label, url, icon }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full bg-[#161616] border border-[#2A2A2A] flex items-center justify-center hover:border-[#6EE7B7] hover:bg-[#6EE7B7]/10 transition-all duration-200 group"
            >
              <img src={icon} alt={label} className="w-4 h-4 object-contain opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
          <a
            href="mailto:ollysmith0@gmail.com"
            className="text-xs font-mono text-[#6B7280] hover:text-[#6EE7B7] transition-colors"
          >
            {SOCIAL_LINKS.email}
          </a>
        </div>
      </div>
    </footer>
  );
}

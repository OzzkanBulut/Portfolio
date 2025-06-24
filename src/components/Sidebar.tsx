// components/Sidebar.tsx
import React from 'react';
import {
  Mail, Phone, MapPin, Github, Linkedin, Instagram, User, Briefcase, Code, Mail as MailIcon
} from 'lucide-react';

const navigationItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'resume', label: 'Resume', icon: Briefcase },
  { id: 'portfolio', label: 'Portfolio', icon: Code },
  { id: 'contact', label: 'Contact', icon: MailIcon }
];

type Props = {
  activeSection: string;
  onSectionChange: (id: any) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (val: boolean) => void;
};

const Sidebar: React.FC<Props> = ({ activeSection, onSectionChange, isSidebarOpen }) => (
  <div
    className={`fixed left-0 top-0 h-screen w-72 bg-gradient-to-b from-gray-900 to-black border-r border-green-400/20 p-6 flex flex-col justify-between text-sm transition-transform duration-300 ease-out
      md:translate-x-0 md:opacity-100
      ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
    style={{ zIndex: 100 }}
  >
    <div>
      <div className="text-center mb-8">
        <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-green-600 p-1">
          <div className="w-full h-full rounded-full overflow-hidden transition-shadow duration-500 ease-in-out hover:shadow-lg hover:shadow-black/40">
            <img
              src="sadf.jpg"
              alt="Özkan Bulut"
              className="w-full h-full object-cover object-center rounded-full scale-105 transition-transform duration-500 ease-in-out hover:scale-125"
            />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white mb-1">Özkan Bulut</h1>
        <p className="text-green-400 font-mono text-sm">Java Developer</p>
      </div>

      <nav className="space-y-2 mb-6">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-md transition-all duration-300 text-gray-300 hover:text-white hover:bg-gray-800 ${
                activeSection === item.id
                  ? 'bg-green-400/20 text-green-400 border border-green-400/50'
                  : ''
              }`}
              style={{ fontSize: '1rem' }}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>

    <div className="space-y-4 text-xs text-gray-400">
      <div className="flex items-center space-x-2">
        <Mail className="w-4 h-4" />
        <span className="text-sm">ozkanb66@gmail.com</span>
      </div>
      <div className="flex items-center space-x-2">
        <Phone className="w-4 h-4" />
        <span className="text-sm">+90 (544) 680-0169</span>
      </div>
      <div className="flex items-center space-x-2">
        <MapPin className="w-4 h-4" />
        <span className="text-sm">Ankara, Turkey</span>
      </div>

      <div className="flex justify-center space-x-3 pt-2">
        {[ 
          { Icon: Github, href: 'https://github.com/OzzkanBulut' },
          { Icon: Linkedin, href: 'https://linkedin.com/in/ozkan-bulut' },
          { Icon: Instagram, href: 'https://instagram.com/ozkannbulut' }
        ].map(({ Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-green-400/20 transition-all duration-300 hover:scale-110"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Sidebar;

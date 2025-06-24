import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Bazaar E-Commerce Platform',
    description: 'Multi-vendor shopping platform with JWT-based auth, role-based access, and Stripe integration.',
    tech: ['Spring Boot', 'React', 'PostgreSql', 'JWT', 'Stripe'],
    image: 'bazaar.png',
    link: 'https://github.com/OzzkanBulut/Bazaar'
  },
  {
    title: 'School Management System ',
    description: 'Web-based system to manage teachers, students, grades, and classes with admin panel.',
    tech: ['Java', 'Spring Boot','Thymeleaf' , 'PostgreSQL'],
    image: 'school.png',
    link: 'https://github.com/OzzkanBulut/Amazing-School'
  },
  {
    title: 'Drag & Drop Form Builder',
    description: 'Dynamic form creator built with Angular and TypeScript, supporting custom fields and export.',
    tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    image: 'form.svg',
    link: 'https://github.com/MergenTech-Angular-Form-Tool/FrontEnd'
  }
];

const PortfolioSection = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 border border-green-400/20">
      <h2 className="text-3xl font-bold text-white mb-6">Portfolio</h2>
      <p className="text-gray-300">Here are some of my recent projects that showcase my skills and expertise.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <div key={i} className="bg-gradient-to-r from-gray-900 to-black rounded-xl border border-green-400/20 overflow-hidden hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, j) => (
                <span key={j} className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <span>View Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {project.title.startsWith('Bazaar') && (
                <a 
                  href="https://bazaar-front.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <span>Go to Live Site</span>
                  <Globe className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PortfolioSection;

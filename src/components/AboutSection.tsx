// components/AboutSection.tsx
import React from 'react';
import { Server, Code, Globe, Box } from 'lucide-react';

const services = [
  { icon: Server, title: 'Backend Development', description: 'Scalable backend services with Java and Spring Boot.' },
  { icon: Code, title: 'Frontend Development', description: 'Responsive UI development using React and TypeScript.' },
  { icon: Globe, title: 'API Development & Integration', description: 'Designing RESTful APIs and integrating external services.' },
  { icon: Box, title: 'DevOps & Deployment', description: 'Containerization and cloud deployment with Docker, Render, and Vercel.' }
];

const AboutSection = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 border border-green-400/20">
      <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        I'm Özkan Bulut, a passionate backend developer who loves crafting clean and efficient code, mainly using Java and Spring Boot. While I focus on backend, I'm always eager to learn new skills and adapt. Sometimes even dabbling in frontend with the help of AI tools when needed. Problem-solving and building scalable, reliable systems truly excite me. I believe in writing maintainable code that not only works well but also makes life easier for the team.
      </p>
      <p className="text-gray-300 leading-relaxed">
        If you're seeking a skilled developer to breathe life into your project, let's transform your vision into reality!
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, i) => {
        const Icon = service.icon;
        return (
          <div
            key={i}
            className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-6 border border-green-400/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-green-400/20 flex items-center justify-center">
                <Icon className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default AboutSection;

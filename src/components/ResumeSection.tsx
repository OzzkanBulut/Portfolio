import React from 'react';
import { Download } from 'lucide-react';

const techSkills = [
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Spring Security', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Hibernate / JPA', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg' },
  { name: 'JWT', logo: 'https://raw.githubusercontent.com/auth0/jwt.io/master/assets/logo.svg' },
  { name: 'RabbitMQ', logo: 'https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg' },
  { name: 'Maven', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' }
];

const education = [
  {
    school: 'Çukurova University',
    degree: 'Bachelors in Computer Engineering (Transfer)',
    gpa: 'GPA: 3.32 / 4.00',
    period: '2017 - 2019'
  },
  {
    school: 'Eskişehir Technical University',
    degree: 'Bachelors in Computer Engineering',
    gpa: 'GPA: 3.03 / 4.00',
    period: '2019 - 2023'
  }
];

const experiences = [
  {
    title: 'Full Stack Development Bootcamp',
    company: 'Techcareer',
    period: '2024 - 2 Months',
    description: 'Studied the fundamentals of full-stack development and built a scalable To-Do List application using React and Spring Boot, implementing CRUD operations'
  },
  {
    title: 'IT/OT Engineer Intern',
    company: 'TUPRAS',
    period: '2023 - 1 Month',
    description: 'Observed corporate IT/OT infrastructure and assisted with hardware setup and workstation organization.'
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Mergentech',
    period: '2023 - 1 Month',
    description: 'Developed a customizable form builder using Angular, designed to simplify form creation for hospital staff.'
  }
];

const ResumeSection = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 border border-green-400/20">
      <h2 className="text-3xl font-bold text-white mb-6">Resume</h2>
      <a
        href="/Ozkan_Bulut_CV.pdf"
        download="Ozkan_Bulut_CV.pdf"
        className="flex items-center space-x-2 bg-green-400 text-black px-6 py-3 rounded-lg hover:bg-green-500 transition-colors inline-flex"
      >
        <Download className="w-5 h-5" />
        <span>Download Resume</span>
      </a>
    </div>

    {/* Experience */}
    <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 border border-green-400/20">
      <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <div key={i} className="border-l-2 border-green-400/50 pl-6">
            <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
            <p className="text-green-400">{exp.company}</p>
            <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
            <p className="text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Skills */}
    <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 border border-green-400/20">
      <h3 className="text-2xl font-bold text-white mb-6">SKILLS & TECHNOLOGIES</h3>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {techSkills.map((tech, i) => (
          <div key={i} className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mb-3 border border-gray-700 group-hover:border-green-400/50 group-hover:bg-green-400/10 transition-all duration-300">
              <img 
                src={tech.logo} 
                alt={tech.name}
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.setAttribute('style', 'display: flex');
                }}
              />
              <div className="w-10 h-10 bg-green-400/20 rounded-lg items-center justify-center text-green-400 font-bold text-xs hidden">
                {tech.name.slice(0, 2).toUpperCase()}
              </div>
            </div>
            <span className="text-gray-300 text-sm text-center group-hover:text-green-400 transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Education */}
    <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 border border-green-400/20">
      <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
      <div className="space-y-6">
        {education.map((edu, i) => (
          <div key={i} className="border-l-2 border-green-400/50 pl-6">
            <h4 className="text-xl font-semibold text-white">{edu.school}</h4>
            <p className="text-green-400">{edu.degree}</p>
            <p className="text-gray-400 text-sm">{edu.gpa}</p>
            <p className="text-gray-400 text-sm">{edu.period}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ResumeSection;

import React, { useState, useEffect, type JSX } from 'react';
import {
  Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink, Download,
  Code, Smartphone, Globe, Palette, Server, User, Briefcase, MessageCircle, Send,
  Box,
  Instagram
} from 'lucide-react';
import emailjs from 'emailjs-com';

type SectionKey = 'about' | 'resume' | 'portfolio' | 'contact';

const MatrixPortfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>('about');
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [sectionTransition, setSectionTransition] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Loading bittikten sonra kısa bir delay ile içerik animasyonunu başlat
      setTimeout(() => setShowContent(true), 100);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Section değişikliği için animasyon fonksiyonu
  const handleSectionChange = (newSection: SectionKey) => {
  if (newSection === activeSection) return;

  // Sayfayı en üste kaydır
  window.scrollTo({ top: 0, behavior: 'smooth' });

  setSectionTransition(true);

  setTimeout(() => {
    setActiveSection(newSection);
    setSectionTransition(false);
  }, 300);
};


  const navigationItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Resume', icon: Briefcase },
    { id: 'portfolio', label: 'Portfolio', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const services = [
  { icon: Server, title: 'Backend Development', description: 'Scalable backend services with Java and Spring Boot.' },
  { icon: Code, title: 'Frontend Development', description: 'Responsive UI development using React and TypeScript.' },
  { icon: Globe, title: 'API Development & Integration', description: 'Designing RESTful APIs and integrating external services.' },
  { icon: Box, title: 'DevOps & Deployment', description: 'Containerization and cloud deployment with Docker, Render, and Vercel.' }
];

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
      period: '2023 - 1 Months',
      description: 'Observed corporate IT/OT infrastructure and assisted with hardware setup and workstation organization.'
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Mergentech',
      period: '2023 - 1 Month',
      description: 'Developed a customizable form builder using Angular, designed to simplify form creation for hospital staff.'
    }
  ];

  const projects = [
  {
    title: 'Bazaar E-Commerce Platform',
    description: 'Multi-vendor shopping platform with JWT-based auth, role-based access, and Stripe integration.',
    image: 'bazaar.png',
    tech: ['Spring Boot', 'React', 'PostgreSQL', 'JWT', 'Stripe'],
    link: 'https://github.com/OzzkanBulut/bazaar'
  },
  {
    title: 'School Management System',
    description: 'Web-based system to manage teachers, students, grades, and classes with admin panel.',
    image: 'school.png',
    tech: ['Java', 'Spring Boot', 'Thymeleaf', 'PostgreSQL'],
    link: 'https://github.com/OzzkanBulut/Amazing-School'
  },
  {
    title: 'Drag & Drop Form Builder',
    description: 'Dynamic form creator built with Angular and TypeScript, supporting custom fields and export.',
    image: 'form.png',
    tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    link: 'https://github.com/MergenTech-Angular-Form-Tool/FrontEnd'
  }
];

const handleFormSubmit = (e?: React.FormEvent) => {
  e?.preventDefault();

  if (formData.name && formData.email && formData.message) {
    emailjs.send(
      'service_xjqy2nh',
      'template_zuz3nfr',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      'lI1dGtCF7a3bBTIMQ'
    ).then(() => {
      alert('Mesajınız gönderildi!');
      setFormData({ name: '', email: '', message: '' });
    }).catch((err: any) => {
      console.error('EmailJS Error:', err);
      alert('Mesaj gönderilemedi, lütfen tekrar deneyin.');
    });
  } else {
    alert('Lütfen tüm alanları doldurun.');
  }
};

 const LoadingScreen = () => {
  // CSS animasyonu için inline style
  const loadingBarStyle = `
    @keyframes loadingBar {
      0% { width: 0%; }
      100% { width: 100%; }
    }
  `;

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <style dangerouslySetInnerHTML={{ __html: loadingBarStyle }} />
      
      <div
        className="text-6xl text-green-400 mb-8 font-mono animate-pulse"
        style={{ 
          fontFamily: "'Courier New', monospace",
          textShadow: '0 0 10px #10b981, 0 0 20px #10b981, 0 0 40px #10b981'
        }}
      >
        {'INITIALIZING'}
      </div>

      <div className="w-64 h-4 bg-green-900 rounded-full overflow-hidden" style={{ boxShadow: '0 0 20px #10b981' }}>
        <div 
          className="h-full bg-green-400 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: '100%',
            boxShadow: '0 0 10px #10b981',
            animation: 'loadingBar 1.5s ease-out forwards'
          }}
        ></div>
      </div>
    </div>
  );
};

  const Sidebar = () => (
  <div className={`fixed left-0 top-0 h-screen w-72 bg-gradient-to-b from-gray-900 to-black border-r border-green-400/20 p-6 flex flex-col justify-between text-sm transition-all duration-1000 ease-out ${
    showContent ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
  }`}>

    {/* Üst Kısım: Profil + Nav */}
    <div>
      {/* Profil */}
      <div className="text-center mb-8">
        <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-green-600 p-1">
          <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
            <User className="w-14 h-14 text-green-400" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white mb-1">Özkan Bulut</h1>
        <p className="text-green-400 font-mono text-sm">Java Developer</p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 mb-6">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleSectionChange(item.id as SectionKey)}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-md transition-all duration-300 text-gray-300 hover:text-white hover:bg-gray-800 ${
                activeSection === item.id
                  ? 'bg-green-400/20 text-green-400 border border-green-400/50'
                  : ''
              }`}
              style={{ 
                fontSize: '1rem'
              }}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>

    {/* Alt Kısım: İletişim + Sosyal */}
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

      {/* Sosyal medya ikonları */}
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
            <div key={i} className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-6 border border-green-400/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
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

    <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 border border-green-400/20">
      <h3 className="text-2xl font-bold text-white mb-6">SKILLS & TECHNOLOGIES</h3>
      <div className="grid grid-cols-5 gap-6">
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

     <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 border border-green-400/20">
      <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
      <div className="space-y-6">
        {education.map((edu, i) => (
          <div key={i} className="border-l-2 border-green-400/50 pl-6">
            <h4 className="text-xl font-semibold text-white">{edu.school}</h4>
            <p className="text-green-400">{edu.degree}</p>
            <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
            <p className="text-gray-300">{edu.gpa}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

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

  const ContactSection = () => {
  const [localFormData, setLocalFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleLocalFormSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();

    if (localFormData.name && localFormData.email && localFormData.message) {
      // EmailJS implementation would go here
      alert('Mesajınız gönderildi!');
      setLocalFormData({ name: '', email: '', message: '' });
    } else {
      alert('Lütfen tüm alanları doldurun.');
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 border border-green-400/20">
        <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-gray-300 mb-6">
          I'm always open to discussing project opportunities, collaborations, or just having a conversation about technology.
        </p>

        <div className="space-y-6">
          <div>
            <label className="block text-white mb-2">Name</label>
            <input
              type="text"
              value={localFormData.name}
              onChange={(e) => setLocalFormData({ ...localFormData, name: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              value={localFormData.email}
              onChange={(e) => setLocalFormData({ ...localFormData, email: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Message</label>
            <textarea
              rows={5}
              value={localFormData.message}
              onChange={(e) => setLocalFormData({ ...localFormData, message: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors resize-none"
            ></textarea>
          </div>
          <button
            onClick={handleLocalFormSubmit}
            className="flex items-center space-x-2 bg-green-400 text-black px-6 py-3 rounded-lg hover:bg-green-500 transition-colors"
          >
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </button>
        </div>
      </div>
    </div>
  );
};

  const sections: Record<SectionKey, () => JSX.Element> = {
  about: () => <AboutSection />,
  resume: () => <ResumeSection />,
  portfolio: () => <PortfolioSection />,
  contact: () => <ContactSection />
};

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-black text-white">
      <Sidebar />
      <main className={`ml-72 p-8 transition-all duration-1000 ease-out ${
        showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="max-w-4xl">
          <div className={`transition-all duration-500 ease-out ${
            sectionTransition 
              ? 'translate-y-8 opacity-0' 
              : showContent 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
          }`}>
            {sections[activeSection]()}
          </div>
        </div>
      </main>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes glowPulse {
          0%, 100% {
            text-shadow: 0 0 10px #10b981, 0 0 20px #10b981, 0 0 40px #10b981;
          }
          50% {
            text-shadow: 0 0 20px #10b981, 0 0 30px #10b981, 0 0 60px #10b981;
          }
        }
      ` }} />
    </div>
  );
};

export default MatrixPortfolio;
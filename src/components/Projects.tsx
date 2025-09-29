import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, payment processing, and admin dashboard.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    date: '2024',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vue.js', 'Express.js', 'Socket.io', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    date: '2023',
  },
  {
    title: 'Weather Dashboard',
    description: 'Responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
    image: 'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'TypeScript', 'Chart.js', 'Weather API'],
    liveUrl: '#',
    githubUrl: '#',
    date: '2023',
  },
  {
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media metrics with data visualization, automated reporting, and performance insights.',
    image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'D3.js', 'Python', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
    date: '2023',
  },
];

export default function Projects() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          A selection of projects that showcase my skills and experience in web development.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.liveUrl}
                  className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                >
                  <ExternalLink size={16} className="text-slate-700" />
                </a>
                <a
                  href={project.githubUrl}
                  className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                >
                  <Github size={16} className="text-slate-700" />
                </a>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-slate-800">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-1 text-slate-500">
                  <Calendar size={14} />
                  <span className="text-sm">{project.date}</span>
                </div>
              </div>
              
              <p className="text-slate-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { Download, MapPin, Calendar } from 'lucide-react';

export default function About() {
  return (
    <div className="animate-fade-in">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center mb-8">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center">
              <span className="text-4xl font-bold text-white">AC</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Full-Stack Developer
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-6">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>5+ years experience</span>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            I'm passionate about creating elegant, user-centered digital experiences. 
            With expertise in modern web technologies and a keen eye for design, I build 
            applications that are both beautiful and functional.
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            When I'm not coding, you'll find me exploring the latest tech trends, 
            contributing to open-source projects, or hiking the beautiful trails 
            around the Bay Area.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
              <Download size={16} />
              <span>Download Resume</span>
            </button>
            <button className="flex items-center space-x-2 border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-300">
              <span>View Work</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
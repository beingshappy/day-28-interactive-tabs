import React from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Vue.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'GraphQL', level: 70 },
    ],
  },
  {
    title: 'Tools & Cloud',
    skills: [
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 80 },
      { name: 'Git', level: 95 },
      { name: 'CI/CD', level: 75 },
      { name: 'Figma', level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
          Technical Skills
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Here's an overview of the technologies and tools I work with regularly.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.title}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <h3 className="text-xl font-bold text-slate-800 mb-6">
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-sm text-slate-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
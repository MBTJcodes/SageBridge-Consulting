import React from 'react';
import { GraduationCap, Database, Shield, Code, Users } from 'lucide-react';

const trainingPrograms = [
  {
    name: 'Product Management',
    description: 'Master product development lifecycle, strategy, and market analysis',
    icon: GraduationCap,
    duration: '12 weeks',
  },
  {
    name: 'Data Analytics',
    description: 'Learn data analysis techniques and tools for informed decision-making',
    icon: Database,
    duration: '8 weeks',
  },
  {
    name: 'Cybersecurity',
    description: 'Understand best practices and strategies for protecting business assets',
    icon: Shield,
    duration: '10 weeks',
  },
  {
    name: 'Web Development',
    description: 'Build and manage modern websites using latest technologies',
    icon: Code,
    duration: '16 weeks',
  },
  {
    name: 'Corporate Training',
    description: 'Customized training solutions for organizational development',
    icon: Users,
    duration: 'Flexible',
  },
];

const Training = () => {
  return (
    <div id="training" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Training Programs</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Enhance your skills with our comprehensive training programs
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {trainingPrograms.map((program) => (
            <div
              key={program.name}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <program.icon className="h-8 w-8 text-indigo-600" />
                    <h3 className="ml-2 text-xl font-semibold text-gray-900">{program.name}</h3>
                  </div>
                  <p className="mt-3 text-base text-gray-500">{program.description}</p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      {program.duration}
                    </span>
                  </div>
                  <div className="ml-auto">
                    <a
                      href="#"
                      className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;
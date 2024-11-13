import React from 'react';
import { BriefcaseIcon, LineChart, Users2Icon, MonitorIcon, HeartHandshakeIcon, GraduationCapIcon } from 'lucide-react';

const services = [
  {
    name: 'Product Management',
    description: 'Develop and optimize your products for market success with our expert guidance.',
    icon: BriefcaseIcon,
  },
  {
    name: 'Career Consulting',
    description: 'Navigate your career path with confidence through personalized strategies and mentoring.',
    icon: Users2Icon,
  },
  {
    name: 'SME Consulting',
    description: 'Tailored solutions to help small and medium enterprises achieve sustainable growth.',
    icon: LineChart,
  },
  {
    name: 'Tech Advisory',
    description: 'Navigate digital transformation and integrate cutting-edge tech solutions.',
    icon: MonitorIcon,
  },
  {
    name: 'Customer Experience',
    description: 'Enhance customer satisfaction through data-driven insights and strategies.',
    icon: HeartHandshakeIcon,
  },
  {
    name: 'Training Services',
    description: 'Comprehensive training programs in product management, data analytics, and more.',
    icon: GraduationCapIcon,
  },
];

const Services = () => {
  return (
    <div id="services" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive consulting solutions tailored to your business needs
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <a href="#" className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Services;
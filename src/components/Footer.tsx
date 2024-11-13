import React from 'react';
import { BrainCircuit, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center">
              <BrainCircuit className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold text-white">SageBridge</span>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Transforming businesses through expert consulting and comprehensive training solutions.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Product Management
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Career Consulting
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                      SME Consulting
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Tech Advisory
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Training</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Product Management
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Data Analytics
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Cybersecurity
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Web Development
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-400 mr-2" />
                    <a href="mailto:Michaeltijjani@gmail.com" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Michaeltijjani@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400 mr-2" />
                    <a href="tel:07038014991" className="text-sm leading-6 text-gray-300 hover:text-white">
                      07038014991
                    </a>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm leading-6 text-gray-300">
                      San Francisco, CA
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} SageBridge Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
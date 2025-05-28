import React from 'react';
import PartnerCard from '../components/PartnerCard';
import { partners } from '../data/partners';
import Button from '../components/ui/Button';

const PartnersSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="partners">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Industry Partners
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We collaborate with leading tech companies to ensure our curriculum meets industry needs and to provide job opportunities for our graduates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
        
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 md:p-12 shadow-md">
          <div className="flex flex-col md:flex-row items-center" data-aos="fade-up" data-aos-delay="200">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Become a Partner
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Join our network of industry partners and help shape the future of DevOps talent in Nigeria. We offer customized training programs for teams and access to top graduates.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Access to pool of trained DevOps professionals
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Custom training programs for your engineering teams
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Collaboration on projects and mentorship opportunities
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Button variant="primary" size="lg">
                Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
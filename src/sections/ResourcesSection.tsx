import React from 'react';
import ResourceCard from '../components/ResourceCard';
import { resources } from '../data/resources';

const ResourcesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800" id="resources">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Learning Resources
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Access our library of DevOps resources to supplement your learning and stay up-to-date with industry best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#"
            className="inline-flex items-center text-blue-900 dark:text-blue-400 font-medium hover:underline"
          >
            Browse all resources
            <svg 
              className="ml-1 w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
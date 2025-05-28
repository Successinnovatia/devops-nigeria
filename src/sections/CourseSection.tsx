import React from 'react';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

const CourseSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800" id="courses">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Specialized Courses
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            From foundational concepts to advanced techniques, our curriculum is designed to build practical skills that employers value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#"
            className="inline-flex items-center text-blue-900 dark:text-blue-400 font-medium hover:underline"
          >
            View all courses
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

export default CourseSection;
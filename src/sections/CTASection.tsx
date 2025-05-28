import React from 'react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-900 dark:bg-blue-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1_2)">
            <g opacity="0.5">
              <path 
                d="M-160 -10L520 -10L520 470L-160 470L-160 -10Z" 
                stroke="white" 
                strokeWidth="5"
              />
              <path 
                d="M-140 10L500 10L500 450L-140 450L-140 10Z" 
                stroke="white" 
                strokeWidth="5"
              />
              <path 
                d="M-120 30L480 30L480 430L-120 430L-120 30Z" 
                stroke="white" 
                strokeWidth="5"
              />
              <path 
                d="M-100 50L460 50L460 410L-100 410L-100 50Z" 
                stroke="white" 
                strokeWidth="5"
              />
              <path 
                d="M-80 70L440 70L440 390L-80 390L-80 70Z" 
                stroke="white" 
                strokeWidth="5"
              />
              <path 
                d="M-60 90L420 90L420 370L-60 370L-60 90Z" 
                stroke="white" 
                strokeWidth="5"
              />
              <path 
                d="M-40 110L400 110L400 350L-40 350L-40 110Z" 
                stroke="white" 
                strokeWidth="5"
              />
              <path 
                d="M-20 130L380 130L380 330L-20 330L-20 130Z" 
                stroke="white" 
                strokeWidth="5"
              />
              <path 
                d="M0 150L360 150L360 310L0 310L0 150Z" 
                stroke="white" 
                strokeWidth="5"
              />
              <path 
                d="M20 170L340 170L340 290L20 290L20 170Z" 
                stroke="white" 
                strokeWidth="5"
              />
              <path 
                d="M40 190L320 190L320 270L40 270L40 190Z" 
                stroke="white" 
                strokeWidth="5"
              />
              <path 
                d="M60 210L300 210L300 250L60 250L60 210Z" 
                stroke="white" 
                strokeWidth="5"
              />
              <path 
                d="M80 230L280 230L280 230L80 230L80 230Z" 
                stroke="white" 
                strokeWidth="5"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1_2">
              <rect width="100%" height="100%" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center"  data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Your DevOps Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join hundreds of successful graduates who have transformed their careers through our industry-focused DevOps training. No prior experience required.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">

            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg font-medium"
            >
              Enroll Now
            </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg font-medium bg-transparent border-white text-white hover:bg-white/10"
            >
              Download Curriculum
            </Button>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center">
              <svg className="h-6 w-6 text-teal-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white">No experience required</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 text-teal-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white">Flexible learning options</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 text-teal-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-white">Job placement assistance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
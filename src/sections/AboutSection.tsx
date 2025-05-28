import React from 'react';
import { Users, Target, Award, BookOpen } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="pb-10 bg-white dark:bg-gray-800" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About DevOpsNigeria
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              We're on a mission to bridge the DevOps talent gap in Nigeria by providing accessible, 
              high-quality training and creating pathways to tech careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                DevOpsNigeria was founded in 2023 with a clear vision: to empower Nigerian tech talent 
                with the skills needed to excel in modern DevOps roles. We believe that by providing 
                accessible, practical training, we can help bridge the skills gap and create opportunities 
                for aspiring tech professionals.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Our program is designed to take students from zero experience to job-ready DevOps engineers 
                through hands-on projects, mentorship, and real-world applications.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6" >
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <div className="text-blue-900 dark:text-blue-400 mb-4">
                  <Users size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">750+</h4>
                <p className="text-gray-700 dark:text-gray-300">Students Trained</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <div className="text-blue-900 dark:text-blue-400 mb-4">
                  <Target size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">85%</h4>
                <p className="text-gray-700 dark:text-gray-300">Job Placement Rate</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <div className="text-blue-900 dark:text-blue-400 mb-4">
                  <Award size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">25+</h4>
                <p className="text-gray-700 dark:text-gray-300">Partner Companies</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <div className="text-blue-900 dark:text-blue-400 mb-4">
                  <BookOpen size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">12</h4>
                <p className="text-gray-700 dark:text-gray-300">Training Programs</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 md:p-12" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Our Approach
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Practical Learning
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Our curriculum focuses on hands-on experience with real-world projects and industry-standard tools.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Industry Mentorship
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Students work directly with experienced DevOps professionals from leading tech companies.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Career Support
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  We provide job placement assistance, interview preparation, and ongoing career guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Our Leadership Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="/images/ceo-img.jpg" 
                    alt=" Ridwan Ademola" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Ridwan Ademola
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Founder & CEO</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  DevOps Lead at CDCare
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://img.freepik.com/free-photo/medium-shot-woman-working-as-lawyer_23-2151202449.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_hybrid&w=740" 
                    alt="Amina Ibrahim" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Amina Ibrahim
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Head of Education</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  10+ years in Tech Education
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://img.freepik.com/free-photo/front-view-handsome-african-american-man-looking_74855-5064.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_hybrid&w=740" 
                    alt="Chidi Okafor" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Chidi Okafor
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Technical Director</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Senior SRE at Google
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
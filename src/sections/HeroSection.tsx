import React from "react";
import Button from "../components/ui/Button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center pt-10 pb-12 md:pt-10 md:pb-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-blue-950 " />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2 xl:pr-16" data-aos="slide-right">
            <div className="text-center lg:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-6">
                Launch Your DevOps Career
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Building Nigeria's Next-Gen{" "}
                <span className="text-blue-900 dark:text-blue-400">DevOps</span>{" "}
                Talent
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Start your journey in DevOps with practical training designed
                for beginners. No prior experience required — just bring your
                determination.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/register">
                  <Button variant="primary" size="lg" className="group">
                    Get Started
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a href="#resources" >
                  <Button variant="outline" size="lg" >
                    Explore Courses
                  </Button>
                </a>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 ">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-900 dark:text-blue-400">
                  750+
                </p>
                <p className="text-gray-700 dark:text-gray-400">Graduates</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-900 dark:text-blue-400">
                  85%
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  Job Placement
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-900 dark:text-blue-400">
                  25+
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  Partner Companies
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0" data-aos="slide-left">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform lg:translate-x-6 lg:translate-y-6">
                <div className="p-6 flex flex-col">
                  <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Upcoming Free Workshop
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Introduction to CI/CD Pipelines
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <svg
                        className="w-5 h-5 text-blue-900 dark:text-blue-400 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        October 15, 2025
                      </span>
                    </div>
                    <div className="flex items-center mb-4">
                      <svg
                        className="w-5 h-5 text-blue-900 dark:text-blue-400 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        6:00 PM - 8:00 PM WAT
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-blue-900 dark:text-blue-400 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        Online (Zoom)
                      </span>
                    </div>
                  </div>

                  <Link to="register" className="mt-auto">
                    <Button variant="primary" className="w-full">
                      Register for Free
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-teal-600 dark:bg-teal-800 rounded-2xl -z-10" />
              <div className="absolute -bottom-12 -right-12 w-full h-full bg-blue-900 dark:bg-blue-900/50 rounded-2xl -z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

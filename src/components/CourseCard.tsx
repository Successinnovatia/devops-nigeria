import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from './ui/Card';
import Button from './ui/Button';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const levelColor = {
    Beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    Intermediate: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    Advanced: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  }[course.level];

  return (
    <Card className="h-full flex flex-col transition-transform duration-300 hover:translate-y-[-4px]">
      <div className="relative h-48 overflow-hidden" data-aos="fade-up" data-aos-delay="100">
        <img 
          src={course.imageUrl} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${levelColor}`}>
            {course.level}
          </span>
        </div>
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{course.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Duration: {course.duration}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700 dark:text-gray-300 mb-4">{course.description}</p>
        <div className="mt-2">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Topics covered:</h4>
          <div className="flex flex-wrap gap-2">
            {course.topics.map((topic, index) => (
              <span 
                key={index} 
                className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-xs"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-900 dark:text-white">Free Access</span>
        <Button variant="primary" size="sm">Enroll Now</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
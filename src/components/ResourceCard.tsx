import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from './ui/Card';
import Button from './ui/Button';
import { Resource } from '../types';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const typeColors = {
    Documentation: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    Tutorial: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    Video: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    Exercise: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  }[resource.type];

  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl"> 
      <div className="h-40 overflow-hidden"  data-aos="fade-up" data-aos-delay="100">
        <img 
          src={resource.imageUrl} 
          alt={resource.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{resource.title}</h3>
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${typeColors}`}>
            {resource.type}
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700 dark:text-gray-300">{resource.description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Access Resource
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
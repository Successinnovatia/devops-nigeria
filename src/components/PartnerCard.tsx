import React from 'react';
import { Card, CardContent } from './ui/Card';
import { Partner } from '../types';

interface PartnerCardProps {
  partner: Partner;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg" >
      <CardContent className="flex flex-col items-center p-6 space-y-4 pt-4"  data-aos="fade-up" data-aos-delay="100">
        <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 p-2 flex items-center justify-center" >
          <img 
            src={partner.logoUrl} 
            alt={partner.name} 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{partner.name}</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">{partner.description}</p>
        </div>
        <a 
          href={partner.website} 
          className="text-blue-900 dark:text-blue-400 hover:underline text-sm font-medium"
        >
          Visit website
        </a>
      </CardContent>
    </Card>
  );
};

export default PartnerCard;
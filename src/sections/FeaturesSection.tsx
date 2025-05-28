import React from 'react';
import { Code, Cloud, Terminal, Server, Layers, GitBranch, Cpu, Database } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]" data-aos="fade-right">
      <div className="rounded-full w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Terminal size={24} />,
      title: 'Practical Learning',
      description: 'Hands-on projects that mirror real-world DevOps scenarios and challenges faced in actual tech companies.'
    },
    {
      icon: <Cloud size={24} />,
      title: 'Cloud Infrastructure',
      description: 'Learn to design, deploy, and manage infrastructure on leading cloud platforms like AWS, Azure, and GCP.'
    },
    {
      icon: <Code size={24} />,
      title: 'Infrastructure as Code',
      description: 'Master tools like Terraform and Ansible to automate infrastructure provisioning and configuration.'
    },
    {
      icon: <Layers size={24} />,
      title: 'Containerization',
      description: 'Develop skills in Docker and Kubernetes to create scalable, reliable containerized applications.'
    },
    {
      icon: <GitBranch size={24} />,
      title: 'CI/CD Pipelines',
      description: 'Build automated workflows for testing and deploying applications using industry-standard tools.'
    },
    {
      icon: <Server size={24} />,
      title: 'Linux Administration',
      description: 'Gain proficiency in Linux systems administration, a fundamental skill for DevOps professionals.'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Monitoring & Observability',
      description: 'Implement comprehensive monitoring solutions to maintain system health and performance.'
    },
    {
      icon: <Database size={24} />,
      title: 'Database Operations',
      description: 'Learn database management, optimization, and automation techniques for various database systems.'
    }
  ];

  return (
    <section className="pt-10 md:pt-20 pb-20 bg-gray-50 dark:bg-gray-900" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16"  data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Learn In-Demand DevOps Skills
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive curriculum covers the full spectrum of DevOps practices, tools, and methodologies needed to excel in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"  data-aos="slide-up">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
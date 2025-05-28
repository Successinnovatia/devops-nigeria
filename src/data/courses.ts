import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'DevOps Fundamentals',
    description: 'Start your DevOps journey with this comprehensive introduction to key concepts, tools, and methodologies.',
    level: 'Beginner',
    duration: '8 weeks',
    topics: ['Introduction to DevOps', 'Linux Fundamentals', 'Version Control with Git', 'CI/CD Pipelines'],
    imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg'
  },
  {
    id: '2',
    title: 'Cloud Infrastructure & AWS',
    description: 'Learn to build and manage cloud infrastructure using Amazon Web Services, a critical skill for modern DevOps.',
    level: 'Beginner',
    duration: '10 weeks',
    topics: ['AWS Fundamentals', 'Virtual Private Cloud', 'EC2 & S3', 'CloudFormation'],
    imageUrl: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg'
  },
  {
    id: '3',
    title: 'Docker & Containerization',
    description: 'Master container technology with Docker to build, test, and deploy applications consistently across environments.',
    level: 'Intermediate',
    duration: '6 weeks',
    topics: ['Container Basics', 'Docker Compose', 'Multi-container Applications', 'Container Registries'],
    imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg'
  },
  {
    id: '4',
    title: 'Kubernetes Orchestration',
    description: 'Deploy, scale, and manage containerized applications with Kubernetes, the industry-standard orchestration platform.',
    level: 'Intermediate',
    duration: '12 weeks',
    topics: ['Kubernetes Architecture', 'Pods & Deployments', 'Services & Networking', 'Helm Charts'],
    imageUrl: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg'
  },
  {
    id: '5',
    title: 'Infrastructure as Code',
    description: 'Implement infrastructure as code practices using Terraform to automate provisioning and management.',
    level: 'Intermediate',
    duration: '8 weeks',
    topics: ['IaC Concepts', 'Terraform Fundamentals', 'Resource Management', 'Modules & Best Practices'],
    imageUrl: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg'
  },
  {
    id: '6',
    title: 'Monitoring & Observability',
    description: 'Build comprehensive monitoring solutions to ensure system reliability and performance visibility.',
    level: 'Advanced',
    duration: '6 weeks',
    topics: ['Metrics Collection', 'Prometheus & Grafana', 'Log Management', 'Alerting Systems'],
    imageUrl: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg'
  }
];
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Button from './ui/Button';
import { NavItem } from '../types';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const navItems: NavItem[] = [
    { title: 'Home', href: '#' },
    { title: 'Features', href: '#features' },
    { title: 'Courses', href: '#courses' },
    { title: 'About', href: '#about' },
    { title: 'Testimonials', href: '#testimonials' },
    // { title: 'Resources', href: '#resources' },
    // { title: 'Partners', href: '#partners' },
    // { title: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id || 'home';
          setActiveSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    // Special handling for home section when at the top
    const handleHomeSection = () => {
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleHomeSection);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleHomeSection);
    };
  }, []);

  const getNavItemClasses = (href: string) => {
    const sectionId = href === '#' ? 'home' : href.slice(1);
    const isActive = activeSection === sectionId;
    
    return `px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out ${
      isScrolled 
        ? `text-gray-700 hover:text-blue-900 dark:text-gray-300 dark:hover:text-white ${
            isActive 
              ? 'text-blue-900 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 transform scale-105' 
              : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
          }`
        : `text-gray-800 hover:text-blue-900 dark:text-gray-200 dark:hover:text-white ${
            isActive 
              ? 'text-blue-900 dark:text-blue-400 bg-white/10 dark:bg-white/5 transform scale-105' 
              : 'hover:bg-white/5 dark:hover:bg-white/5'
          }`
    }`;
  };

  const scrollToSection = (href: string) => {
    const targetId = href === '#' ? 'root' : href.slice(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-4' 
          : 'bg-transparent py-6'
      }`}
        style={{height: "80px"}}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#" 
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#');
              }}
            >
              <span className="text-2xl font-bold text-blue-900 dark:text-white">DevOps<span className="text-teal-600">Nigeria</span></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={getNavItemClasses(item.href)}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.title}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          <Link to="/register" className="hidden md:block">
            <Button variant="primary">Register Now</Button>
          </Link>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-300 ease-in-out ${
                activeSection === (item.href === '#' ? 'home' : item.href.slice(1))
                  ? 'text-blue-900 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 transform scale-102'
                  : 'text-gray-700 hover:text-blue-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
                setIsMobileMenuOpen(false);
              }}
            >
              {item.title}
            </a>
          ))}

          <Link to="/register" className="pt-2">
            <Button variant="primary" className="w-full">Register Now</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Container from '../ui/Container';
import { menuItems } from '../../data/menuItems';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <a href="#main" className="flex items-center">
            <div className="w-10 h-10 bg-primary-600 flex items-center justify-center rounded-md">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M3 6h18v10H3z"/>
                <path d="M3 10h18"/>
              </svg>
            </div>
            <h1 className={`ml-2 text-lg sm:text-xl font-bold ${scrolled ? 'text-primary-700' : 'text-white'}`}>
              МастерМебель
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`font-medium text-sm transition-colors duration-300 hover:text-primary-500 ${
                  scrolled ? 'text-primary-700' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="tel:+79531578843" 
              className={`flex items-center font-medium transition-colors duration-300 hover:text-primary-500 ${
                scrolled ? 'text-primary-700' : 'text-white'
              }`}
            >
              <Phone size={16} className="mr-2" />
              +7 953 157-88-43
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden focus:outline-none"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isOpen ? (
              <X size={24} className={scrolled ? 'text-primary-700' : 'text-white'} />
            ) : (
              <Menu size={24} className={scrolled ? 'text-primary-700' : 'text-white'} />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white"
        >
          <Container>
            <div className="py-4 flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-primary-700 hover:text-primary-500 transition-colors duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="tel:+79531578843" 
                className="flex items-center text-primary-700 hover:text-primary-500 transition-colors duration-300 font-medium"
              >
                <Phone size={16} className="mr-2" />
                +7 953 157-88-43
              </a>
              <Button onClick={() => setIsOpen(false)}>
                Заказать консультацию
              </Button>
            </div>
          </Container>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
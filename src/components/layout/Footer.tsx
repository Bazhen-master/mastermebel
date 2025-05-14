import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import Container from '../ui/Container';
import { menuItems } from '../../data/menuItems';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-800 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
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
              <h3 className="ml-2 text-xl font-bold text-white">МастерМебель</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Изготовление современной мебели и перегородок на заказ. Индивидуальный подход, качественные материалы, доступные цены.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Навигация</h4>
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Санкт-Петербург, Дунайский 58 к 3</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+79531578843" className="text-gray-300 hover:text-white transition-colors duration-300">
                  +7 953 157-88-43
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@mastermebel.ru" className="text-gray-300 hover:text-white transition-colors duration-300">
                  info@mastermebel.ru
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="h-px bg-primary-700 my-6"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        
        <p className="text-center text-gray-400 text-sm">
          © {currentYear} МастерМебель. Все права защищены.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
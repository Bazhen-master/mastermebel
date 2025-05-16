import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section 
      id="main" 
      className="relative min-h-screen flex items-center pt-16"
    >
      {/* Desktop and tablet background */}
      <div 
        className="absolute inset-0 hidden md:block bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.7)), url('https://images.pexels.com/photos/7319274/pexels-photo-7319274.jpeg?auto=compress&cs=tinysrgb&w=1920')`
        }}
      />
      
      {/* Mobile video background */}
      <div className="absolute inset-0 md:hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/wardrobe-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary-900 bg-opacity-70" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl backdrop-blur-sm bg-primary-900/30 p-8 rounded-lg">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Качественная мебель <br />
            <span className="text-wood-300">на заказ</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl mb-8 text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Изготавливаем современные гардеробные, шкафы, тумбы, полки и перегородки индивидуально под Ваши размеры. Без предоплаты, с собственного производства.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView()}
            >
              Получить консультацию
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
              onClick={() => document.getElementById('services')?.scrollIntoView()}
            >
              Услуги
            </Button>
          </motion.div>
        </div>
      </Container>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
        onClick={() => document.getElementById('services')?.scrollIntoView()}
      >
        <ChevronDown size={36} className="text-white" />
      </motion.div>
    </section>
  );
};

export default Hero;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { galleryItems } from '../../data/gallery';

const categories = ['Все', 'Гардеробные', 'Шкафы', 'Перегородки', 'Тумбы', 'Полки'];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Все');
  
  const filteredItems = activeCategory === 'Все' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle 
          title="Галерея наших работ" 
          subtitle="Познакомьтесь с примерами наших реализованных проектов. Каждая работа выполнена с вниманием к деталям и индивидуальным требованиям заказчика."
          center
        />
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-primary-600 text-white font-medium' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative overflow-hidden rounded-lg h-64 md:h-80 group shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              layout
            >
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
                <p className="text-gray-200">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Gallery;
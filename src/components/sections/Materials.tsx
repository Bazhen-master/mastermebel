import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { materials } from '../../data/materials';

const Materials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle 
          title="Материалы" 
          subtitle="Мы используем только качественные материалы для изготовления нашей мебели и перегородок."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {materials.map((material, index) => (
            <motion.div
              key={material.id}
              className="relative overflow-hidden rounded-lg shadow-md aspect-[3/4]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img 
                src={material.imageUrl} 
                alt={material.name}
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 text-white">{material.name}</h3>
                <p className="text-gray-200">{material.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Materials;

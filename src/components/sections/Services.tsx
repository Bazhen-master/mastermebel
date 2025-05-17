import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { services } from '../../data/services';
import { Award as Wardrobe, LayoutGrid, LandPlot, LayoutList } from 'lucide-react';

const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wardrobe':
        return <Wardrobe size={40} className="text-primary-600" />;
      case 'LayoutGrid':
        return <LayoutGrid size={40} className="text-primary-600" />;
      case 'LandPlot':
        return <LandPlot size={40} className="text-primary-600" />;
      case 'LayoutList':
        return <LayoutList size={40} className="text-primary-600" />;
      default:
        return null;
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
      }
    })
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle 
          title="Наши услуги" 
          subtitle="Мы предлагаем широкий спектр услуг по изготовлению мебели и перегородок на заказ. Качество, функциональность и стиль - наши главные приоритеты."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  width={600}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold text-primary-700 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;

import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CTA: React.FC = () => {
  return (
    <section 
      className="py-20 bg-wood-pattern bg-cover bg-center text-white relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(30, 58, 138, 0.95), rgba(30, 58, 138, 0.9)), url('https://images.pexels.com/photos/4846158/pexels-photo-4846158.jpeg')"
      }}
    >
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Готовы создать мебель вашей мечты?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Для расчета стоимости пришлите свои размеры или оставьте свой номер телефона для связи. Мы поможем воплотить ваши идеи в реальность!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView()}
            >
              Получить бесплатную консультацию
            </Button>
          </motion.div>
        </div>
      </Container>
      
      <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-wood-400 bg-opacity-20 rounded-full"></div>
      <div className="absolute -left-16 -top-16 w-64 h-64 bg-wood-400 bg-opacity-20 rounded-full"></div>
    </section>
  );
};

export default CTA;
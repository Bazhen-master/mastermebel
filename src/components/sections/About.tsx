import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { advantages } from '../../data/advantages';
import { Wallet, Factory, Ruler, Banknote } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wallet':
        return <Wallet size={30} className="text-wood-400" />;
      case 'Factory':
        return <Factory size={30} className="text-wood-400" />;
      case 'Ruler':
        return <Ruler size={30} className="text-wood-400" />;
      case 'Banknote':
        return <Banknote size={30} className="text-wood-400" />;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle title="О нас" />
            
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Мы работаем на своём малом производстве, на ул.Софийской. Не берём предоплат, довольные клиенты оплачивают по итогу работы с улыбкой на лице.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Изготавливаем и устанавливаем современные гардеробные, мебель из ЛДСП: шкафы, тумбы, полки. С нашими работами Вы сможете ознакомиться в галерее.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Являемся мастероми и изготавливаем перегородки и мебель самостоятельно на своем маленьком производстве, у нас нет огромных затрат на аренду магазина и оплату штата менеджеров, как итог - выгодное предложение.
            </motion.p>
          </div>
          
          <div className="relative h-full" ref={ref}>
            <motion.div 
              className="absolute top-0 right-0 w-3/4 h-3/4 bg-primary-100 rounded-tl-3xl rounded-br-3xl z-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
            />
            
            <motion.div 
              className="relative z-10 overflow-hidden rounded-tl-3xl rounded-br-3xl shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg" 
                alt="Мастерская" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
        
        <div className="mt-20">
          <SectionTitle 
            title="Наши преимущества" 
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.id}
                className="p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {getIcon(advantage.icon)}
                </div>
                <h3 className="text-xl font-bold text-primary-700 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle 
          title="Контакты" 
          subtitle="Свяжитесь с нами для расчета стоимости вашего проекта или для получения дополнительной информации."
          center
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <motion.div 
            className="col-span-1 lg:col-span-2 bg-white rounded-lg shadow-md p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary-700 mb-6">Свяжитесь с нами</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                  placeholder="Опишите ваш проект или укажите размеры для расчета стоимости"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full md:w-auto">
                Отправить запрос
              </Button>
            </form>
          </motion.div>
          
          <motion.div 
            className="bg-primary-700 text-white rounded-lg shadow-md p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Контактная информация</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin size={24} className="mr-4 mt-1 flex-shrink-0 text-wood-300" />
                <div>
                  <h4 className="font-medium text-white">Адрес</h4>
                  <p className="text-gray-300">Санкт-Петербург, Дунайский 58 к 3</p>
                  <p className="text-gray-300">Производство: ул. Софийская</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={24} className="mr-4 mt-1 flex-shrink-0 text-wood-300" />
                <div>
                  <h4 className="font-medium text-white">Телефон</h4>
                  <p className="text-gray-300">
                    <a href="tel:+79531578843" className="hover:text-white transition-colors">
                      +7 953 157-88-43
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={24} className="mr-4 mt-1 flex-shrink-0 text-wood-300" />
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-gray-300">
                    <a href="mailto:info@mastermebel.ru" className="hover:text-white transition-colors">
                      info@mastermebel.ru
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock size={24} className="mr-4 mt-1 flex-shrink-0 text-wood-300" />
                <div>
                  <h4 className="font-medium text-white">Рабочие часы</h4>
                  <p className="text-gray-300">Пн-Пт: 9:00 - 19:00</p>
                  <p className="text-gray-300">Сб: 10:00 - 17:00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
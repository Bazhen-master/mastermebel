import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaValue) {
      alert('Пожалуйста, подтвердите, что вы не робот');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      formRef.current?.reset();
      captchaRef.current?.reset();
      setCaptchaValue(null);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Имя
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    required
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
                    name="user_phone"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                  placeholder="Опишите ваш проект или укажите размеры для расчета стоимости"
                ></textarea>
              </div>

              <div className="mb-6">
                <ReCAPTCHA
                  ref={captchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={(value) => setCaptchaValue(value)}
                />
              </div>
              
              <div className="flex items-center gap-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить запрос'}
                </Button>

                {submitStatus === 'success' && (
                  <p className="text-success-500">Сообщение успешно отправлено!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-error-500">Ошибка при отправке. Попробуйте позже.</p>
                )}
              </div>
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

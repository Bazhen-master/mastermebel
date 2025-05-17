import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'wardrobes',
    title: 'Гардеробные',
    description: 'Современные гардеробные системы, спроектированные с учетом ваших потребностей и пространства. Максимальная функциональность и стильный дизайн.',
    icon: 'Wardrobe',
    imageUrl: '/images/services/wardrobes.jpg',
  },
  {
    id: 'cabinets',
    title: 'Шкафы и тумбы',
    description: 'Функциональные шкафы и тумбы из качественного ЛДСП. Индивидуальный дизайн и размеры, подходящие именно для вашего интерьера.',
    icon: 'LayoutGrid',
    imageUrl: '/images/services/cabinets.jpg',
  },
  {
    id: 'partitions',
    title: 'Перегородки',
    description: 'Перегородки для зонирования пространства: двери купе, распашные и подвесные. Отличное решение для создания функциональных зон в вашем доме.',
    icon: 'LandPlot',
    imageUrl: '/images/services/partitions.jpg',
  },
  {
    id: 'shelves',
    title: 'Полки',
    description: 'Стильные и функциональные полки различных форм и размеров. Идеальное решение для хранения и организации пространства.',
    icon: 'LayoutList',
    imageUrl: '/images/services/shelves.jpg',
  },
];

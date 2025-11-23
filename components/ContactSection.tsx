import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <div className="bg-stone-900 text-stone-300">
      {/* Contact Info & Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-white font-serif text-4xl font-bold mb-6">Свяжитесь с нами</h2>
            <div className="w-20 h-1 bg-gold-500 mb-8"></div>
            <p className="text-lg mb-10 leading-relaxed">
              Мы всегда рады ответить на вопросы о породе и наших собаках. Лучший способ связаться с нами — заполнить форму или позвонить.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">Адрес</h4>
                  <p>Россия, г. Красноярск, <br/>ул. Заповедная, д. 15</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">Телефон</h4>
                  <p>+7 (999) 123-45-67</p>
                  <p className="text-sm text-stone-500">Ежедневно с 10:00 до 20:00</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">Email</h4>
                  <p>info@strazh-severa.ru</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-12 flex space-x-4">
              <a href="#" className="p-3 bg-stone-800 rounded-full hover:bg-gold-500 hover:text-stone-900 transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-stone-800 rounded-full hover:bg-gold-500 hover:text-stone-900 transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 bg-stone-800 rounded-full hover:bg-gold-500 hover:text-stone-900 transition-all duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-stone-800 p-8 md:p-10 rounded-lg border border-stone-700">
            <h3 className="text-white font-serif text-2xl font-bold mb-6">Напишите нам</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-stone-400">Имя</label>
                  <input type="text" className="w-full bg-stone-900 border border-stone-600 rounded px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-stone-400">Телефон</label>
                  <input type="tel" className="w-full bg-stone-900 border border-stone-600 rounded px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="+7 (___) ___-__-__" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-stone-400">Email</label>
                <input type="email" className="w-full bg-stone-900 border border-stone-600 rounded px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="example@mail.ru" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-stone-400">Сообщение</label>
                <textarea rows={4} className="w-full bg-stone-900 border border-stone-600 rounded px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="Меня интересует щенок..."></textarea>
              </div>
              <button type="button" className="w-full bg-gold-500 text-emerald-900 font-bold uppercase tracking-wider py-4 hover:bg-white transition-colors duration-300">
                Отправить
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-stone-800 py-8 text-center text-sm text-stone-500">
        <p>&copy; 2015-{new Date().getFullYear()} Питомник "Страж Севера". Все права защищены.</p>
      </div>
    </div>
  );
};

export default ContactSection;
import React from 'react';
import { Phone, MapPin, Instagram } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-black text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>(11) 98627-2764</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>AV JOAO BARBOSA DE MORAIS 1017 - Itaquaquecetuba, SP</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in" style={{
          animationDelay: '0.1s'
        }}>
            <h3 className="text-xl font-semibold mb-6 text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors duration-300 inline-block">Início</a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-400 transition-colors duration-300 inline-block">Sobre Nós</a>
              </li>
              <li>
                <a href="#services" className="hover:text-yellow-400 transition-colors duration-300 inline-block">Serviços</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300 inline-block">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <h3 className="text-xl font-semibold mb-6 text-white">Redes Sociais</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.instagram.com/dlarcestabasica/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-yellow-400/80 hover:text-black transition-colors duration-300 p-2 rounded-full">
                <Instagram size={20} />
              </a>
            </div>
            <div className="mt-6">
              <img src="/lovable-uploads/4007df16-b8e9-44a2-8159-0ad195e6c33e.png" alt="DLAR Distribuidora" className="h-32" />
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} DLAR Distribuidora Alimentícia. Todos os direitos reservados.</p>
          <p className="mt-2">Responsável: DLAR Distribuidora</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
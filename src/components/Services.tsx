
import React from 'react';
import { ShoppingBasket, Package, Building2, Truck, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Cestas Básicas Pequenas',
    description: 'Cestas básicas com itens essenciais, ideal para famílias pequenas ou complemento alimentar mensal.',
    icon: ShoppingBasket,
    delay: '0s'
  },
  {
    id: 2,
    title: 'Cestas Básicas Médias e Grandes',
    description: 'Opções mais completas com maior quantidade e variedade de produtos para suprir as necessidades mensais.',
    icon: Package,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Cestas para Empresas',
    description: 'Soluções personalizadas para empresas que desejam oferecer cestas básicas aos seus colaboradores.',
    icon: Building2,
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'Cestas Básicas de Natal',
    description: 'Cestas especiais para as festas de fim de ano, com produtos tradicionais para celebrações.',
    icon: Truck,
    delay: '0.3s'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-red-100 text-red-600 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Cestas básicas para todas as necessidades
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos diferentes opções de cestas básicas para atender às necessidades específicas 
            de sua empresa e colaboradores, com produtos de qualidade e preços competitivos.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-red-600/10 p-4 rounded-lg inline-block mb-5">
                <service.icon className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex"
          >
            <span>Solicite um orçamento</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

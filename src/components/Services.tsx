import React from 'react';
import { ShoppingBasket, Package, Building2, Truck, ArrowRight } from 'lucide-react';
import BasketOptions from './BasketOptions';
import { useIsMobile } from '@/hooks/use-mobile';
const services = [{
  id: 1,
  title: 'Cestas Básicas Pequenas',
  description: 'Cestas básicas com itens essenciais, ideal para famílias pequenas ou complemento alimentar mensal.',
  icon: ShoppingBasket,
  delay: '0s'
}, {
  id: 2,
  title: 'Cestas Básicas Médias e Grandes',
  description: 'Opções mais completas com maior quantidade e variedade de produtos para suprir as necessidades mensais.',
  icon: Package,
  delay: '0.1s'
}, {
  id: 3,
  title: 'Cestas para Empresas',
  description: 'Soluções personalizadas para empresas que desejam oferecer cestas básicas aos seus colaboradores, a partir de R$149,90.',
  icon: Building2,
  delay: '0.2s'
}, {
  id: 4,
  title: 'Cestas Básicas de Natal',
  description: 'Cestas especiais para as festas de fim de ano, com produtos tradicionais para celebrações.',
  icon: Truck,
  delay: '0.3s'
}];
const Services = () => {
  const isMobile = useIsMobile();
  return <section id="services" className="section bg-gradient-to-br from-neutral-50 to-yellow-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 px-4">
          <div className="inline-block bg-yellow-100 text-red-600 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 md:mb-6">
            Cestas básicas para todas as necessidades
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Oferecemos diferentes opções de cestas básicas para atender às necessidades específicas 
            de sua empresa e colaboradores, com produtos de qualidade e preços competitivos.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16 px-4">
          {services.map(service => <div key={service.id} className="bg-white rounded-xl p-6 md:p-8 border border-yellow-200 shadow-sm hover:shadow-md hover:border-yellow-300 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in" style={{
          animationDelay: service.delay
        }}>
              <div className="bg-red-500/10 p-4 rounded-lg inline-block mb-5">
                <service.icon className="text-red-600" size={28} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
            </div>)}
        </div>

        {/* Basket Options */}
        <div className="mb-12 md:mb-16 animate-fade-in px-2 md:px-4" style={{
        animationDelay: '0.4s'
      }}>
          <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Catálogo de Produtos</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Conheça em detalhes o conteúdo de cada tipo de cesta básica que oferecemos
            </p>
          </div>
          <BasketOptions />
        </div>
        
        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center px-4">
          <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex shadow-md hover:shadow-lg">
            <span>Solicite um orçamento</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>;
};
export default Services;
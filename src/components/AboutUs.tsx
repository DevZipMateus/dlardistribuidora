
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-red-600/20 w-full h-full absolute -left-6 -top-6 rounded-lg"></div>
              <img alt="Cestas básicas DLAR" className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[400px]" src="/lovable-uploads/fa2359a5-7edc-420d-bcb0-06f53ab97563.jpg" />
              
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-red-600/10 text-red-600 font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
              Sobre Nós
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              Distribuidora alimentícia especializada em cestas básicas
            </h2>
            <p className="text-gray-600 mb-6 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              A DLAR é uma empresa do ramo alimentício, localizada em Itaquaquecetuba, que elabora cestas básicas para empresas das regiões próximas.
              Nossa missão é fornecer produtos de qualidade para atender às necessidades dos clientes.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              A visão a longo prazo da DLAR é expandir seu negócio e alcançar maior sucesso, sempre mantendo o compromisso com a qualidade e satisfação dos clientes.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.4s'
            }}>
                <div className="bg-red-600/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-red-600" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Produtos de Qualidade</h4>
                  <p className="text-gray-600">Selecionamos os melhores produtos para nossas cestas básicas</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.5s'
            }}>
                <div className="bg-red-600/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-red-600" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Atendimento Personalizado</h4>
                  <p className="text-gray-600">Montamos cestas básicas de acordo com a necessidade da sua empresa</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.6s'
            }}>
                <div className="bg-red-600/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-red-600" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Entrega Eficiente</h4>
                  <p className="text-gray-600">Garantimos a entrega pontual para sua empresa</p>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex animate-fade-in" style={{
            animationDelay: '0.7s'
          }}>
              <span>Entre em Contato</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>;
};

export default AboutUs;

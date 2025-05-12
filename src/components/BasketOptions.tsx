
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check } from "lucide-react";

const BasketOptions = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Tabs defaultValue="standard" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="small">Cesta Pequena <span className="ml-2 text-xs font-bold">R$179,90</span></TabsTrigger>
          <TabsTrigger value="standard">Cesta Padrão <span className="ml-2 text-xs font-bold">R$289,90</span></TabsTrigger>
          <TabsTrigger value="large">Cesta Grande <span className="ml-2 text-xs font-bold">R$489,90</span></TabsTrigger>
        </TabsList>
        
        {/* Small Basket */}
        <TabsContent value="small">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-center mb-4">Cesta Básica Pequena - R$179,90</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg text-red-600">🥘 Alimentos:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x ARROZ (5kg)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>2x FEIJÕES (1kg)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>2x AÇÚCAR (1kg)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x SAL (1kg)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x TRIGO (1kg)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x FUBA (500g)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x ACHOCOLATADO (400g)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x ÓLEO (900g)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x MACARRÃO ESPAGUETE (500g)</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="space-y-2">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                        <span>1x MACARRÃO PARAFUSO (500g)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                        <span>2x MOLHO (300g)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                        <span>1x SUCO (1L)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                        <span>1x LATA SARDINHA (125g)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                        <span>1x FLOCÃO DE MILHO (500g)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                        <span>1x MASSA DE BOLO (450g)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                        <span>1x LEITE EM PÓ (400g)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                        <span>1x PACOTE CREAM CRACKER (350g)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Standard Basket */}
        <TabsContent value="standard">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-center mb-4">Cesta Básica Padrão - R$289,90</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-red-600">🥘 Alimentos:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>2x Arroz – Namorado (5kg)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>4x Feijão – Feijão da casa (1kg)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>5x Açúcar – Patéko (1kg)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x Sal – Lebre (1kg)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>3x Óleo – Soya (900ml)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x Bolacha Doce – Passa tempo (130g)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x Bolacha Salgada – Tucs (100g)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x Farinha de Trigo – Paloma (1kg)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x Vinagre – Palladia (750ml)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>3x Sucos em pó – Camp (15g)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x Café – União (500g)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x Tempero – Chimichurri (10g)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>2x Macarrão – Todeschini (500g)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x Flocão de Milho – Flokão (500g)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>2x Molho de Tomate – Predilecta (300g)</span>
                    </li>
                  </ul>

                  <h4 className="font-semibold text-lg text-red-600 mt-6 mb-2">🧼 Produtos de Limpeza e Higiene:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>2x Creme Dental – Oral-B (70g)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x Sabão em Pó – Baby Soft (800g)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x Água Sanitária – Suprema (1L)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x Esponja – Brilhus (109mm)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>4x Sabonetes – Flor de Ypê (85g)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>2x Detergente – Suprema (500ml)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x Papel Higiênico – Fofopel (4 rolos)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Large Basket */}
        <TabsContent value="large">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-center mb-4">Cesta Básica Grande - R$489,90</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg text-red-600">🥘 Alimentos:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>3x ARROZ - [ camil/solito/namorado ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>5x AÇUCAR - [ caravelas/da barra/união ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>4x FEIJÃO CARIOCA - [ namorado/solito/kicaldo ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x FEIJÃO PRETO - [ namorado/solito/kicaldo ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>2x MACARRÃO ESPAGUETE - [ dona benta/adria/vitarelli ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x MACARRÃO PARAFUSO - [ dona benta/adria/vitarelli ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>3x MOLHO - [ fugini/predilecta/quero ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x VINAGRE - [ vitali/castelo ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>3x ÓLEO - [ liza/soya/vitalev ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x PACOTE BOLACHA ÁGUA E SAL - [ vitarella/adria/marilan ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>8x BOLACHA DOCE - [ passatempo/toddy/trakinas/bauducco ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x TRIGO - [ dona benta/sol/dona rosa ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x ACHOCOLATADO - [ toddy/nescau ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x CAFÉ - [ melita/pilão/três corações ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>2x MASSA DE BOLO - [ viva/apti/fleischmann ]</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>8x SUCO EM PÓ - [ tang/camp/frisco ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x PACOTE TEMPERO - [ maggi/sazon ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x SAL - [ lebre ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x FLOCÃO DE MILHO - [ marata ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>2x MIOJO - [ nissim/panco ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x CAIXA DE LEITE 12 UNIDADES - [ diversos ]</span>
                    </li>
                  </ul>

                  <h4 className="font-semibold text-lg text-red-600 mt-6 mb-2">🧼 Produtos de Limpeza e Higiene:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x PACOTE PAPEL HIGIÊNICO 8 ROLOS - [ Fofopel ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x PALHA DE AÇO - [ Diversos ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>2x ESPONJA - [ Diversos ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>5x SABONETE - [ Flor de Ypê ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x DESINFETANTE - [ Urca/búfalo ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>2x CREME DENTAL - [ Oral-B ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x SABÃO EM PÓ - [ Brilhante/Ace/Omo ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x LIMPADOR MULTIUSO - [ Ypê/Bombril ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x ÁGUA SANITÁRIA 2lt - [ Diversos ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>3x DETERGENTES - [ Suprema/Limpol/Ypê ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x AMACIANTE 2 LITROS - [ Minuano/Ypê/Babysoft ]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>1x PACOTE PEDRA DE VASO - [ Diversos ]</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-center font-medium text-red-600">
                  🍀 Comprando qualquer nível, você receberá 1 cupom para concorrer ao prêmio no final do mês!
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <h4 className="font-bold text-center mb-2">🚨 AVISOS:</h4>
        <ul className="flex flex-col md:flex-row justify-center gap-4 md:gap-10">
          <li className="flex items-center justify-center gap-2">
            <span className="text-red-500 font-bold">⚠️</span>
            <span>Pagamento antecipado</span>
          </li>
          <li className="flex items-center justify-center gap-2">
            <span className="text-red-500 font-bold">⚠️</span>
            <span>Não parcelamos</span>
          </li>
          <li className="flex items-center justify-center gap-2">
            <span className="text-red-500 font-bold">⚠️</span>
            <span>Algumas regiões entregamos via transportadora com frete</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BasketOptions;

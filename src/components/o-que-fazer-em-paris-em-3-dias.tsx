import React from 'react';
import { Calendar, MapPin, User } from 'lucide-react';

const Paris3Dias: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Hero Section do Artigo */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 border border-gold-400 text-gold-400 text-xs font-extrabold tracking-[0.2em] uppercase mb-6 bg-navy-900/80 backdrop-blur-md">
            Roteiros
          </span>
          <h1 className="font-serif text-3xl md:text-5xl md:leading-tight font-bold text-white drop-shadow-xl mb-6">
            Roteiro de 3 dias em Paris para ver o essencial sem pressa
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-gold-400" />
              <span>Atualizado em 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} className="text-gold-400" />
              <a href="/lucas-almeida" className="hover:text-gold-400 transition-colors underline decoration-gold-400/50">
                Por Lucas Almeida
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-gold-400" />
              <span>Paris, França</span>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
            <p className="lead text-xl md:text-2xl font-serif text-navy-900 italic mb-8">
              Paris é o tipo de cidade que não aceita pressa, mas exige estratégia. Tentar abraçar o mapa inteiro em apenas 72 horas é o caminho mais rápido para terminar a viagem exausto e frustrado.
            </p>
            
            <p>
              O segredo para ver o essencial com a alma leve é priorizar a logística e entender que a capital francesa está mais vibrante e concorrida do que nunca.
            </p>
            <p>
              Neste guia, organizei um roteiro pé no chão que equilibra os grandes ícones, como a Torre Eiffel e o Louvre, com aquele charme boêmio que só se encontra ao caminhar sem rumo pelas ruas do Marais.
            </p>
            <p>
              Prepare-se para otimizar seu tempo com dicas de quem conhece os atalhos para fugir das filas e os melhores bairros para se hospedar sem perder horas no metrô. Vamos transformar esses três dias na sua melhor memória de viagem.
            </p>

            <h2 className="text-3xl font-serif font-bold text-navy-900 mt-12 mb-6">Onde se hospedar em Paris</h2>
            <p>
              Escolher a base certa em Paris é o que separa uma viagem fluida de um pesadelo logístico. Se você tem pouco tempo, o segredo é focar nos arrondissements centrais, onde a vida acontece a pé.
            </p>
            <p>
              Ficar perto do Louvre ou da Torre Eiffel garante fotos incríveis ao amanhecer, mas regiões como o Quartier Latin oferecem aquela atmosfera pulsante dos cafés históricos que define a cidade.
            </p>
            <p>
              O importante é priorizar a proximidade com as linhas principais do metrô. Para facilitar sua escolha, selecionei abaixo algumas opções que unem charme e praticidade. Confira nossa curadoria de hotéis adoráveis para tornar sua estadia inesquecível.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-6">Hoteis no Marais</h3>
            
            <div className="my-8">
              <img 
                src="/images/blog/o-que-fazer-em-paris-em-3-dias/Les Tournelles.webp" 
                alt="Hotel Les Tournelles" 
                width={800} 
                height={533}
                className="w-full h-auto rounded-lg shadow-md mb-4"
                loading="lazy"
              />
              <p>
                O Hotel Les Tournelles coloca você a apenas dois minutos de caminhada da icônica Place des Vosges. Com uma recepção 24 horas e decoração elegante, é a base perfeita para quem quer explorar o Marais a pé.
              </p>
              <p>
                Os quartos são equipados com TV via satélite e mesa de trabalho, garantindo conforto entre um passeio e outro pelo Centro Pompidou ou pela Ópera da Bastilha, que ficam a uma curta distância.
              </p>
              <div className="flex justify-center mt-6 mb-8">
                <a href="https://www.booking.com/hotel/fr/les-tournelles-paris.pt-br.html" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-400 text-navy-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 no-underline">
                  Ver Disponibilidade
                </a>
              </div>
            </div>

            <div className="my-8">
              <img 
                src="/images/blog/o-que-fazer-em-paris-em-3-dias/Hotel Saint-Louis Marais.webp" 
                alt="Hotel Saint-Louis Marais" 
                width={800} 
                height={533}
                className="w-full h-auto rounded-lg shadow-md mb-4"
                loading="lazy"
              />
              <p>
                Para quem busca uma experiência tipicamente francesa, o Hotel Saint-Louis Marais preserva detalhes históricos, como suas vigas de madeira expostas, a poucos passos da Île Saint-Louis. Além do Wi-Fi gratuito e concierge 24 horas, o hotel oferece um café da manhã elogiado e facilidades modernas. Sua localização estratégica, perto da estação de metrô Sully-Morland, facilita o acesso a qualquer ponto de Paris em minutos.
              </p>
              <div className="flex justify-center mt-6 mb-8">
                <a href="https://www.booking.com/hotel/fr/saint-louis-marais.pt-br.html" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-400 text-navy-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 no-underline">
                  Ver Disponibilidade
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-6">Hoteis no Quartier Latin e St-Germain-des-Prés</h3>

            <div className="my-8">
              <img 
                src="/images/blog/o-que-fazer-em-paris-em-3-dias/Select Hotel.webp" 
                alt="Select Hotel" 
                width={800} 
                height={533}
                className="w-full h-auto rounded-lg shadow-md mb-4"
                loading="lazy"
              />
              <p>
                No vibrante 5º arrondissement, o Select Hotel combina a arquitetura clássica com um design moderno e luxuoso. Localizado na Place de la Sorbonne, a apenas 900 metros da Catedral de Notre Dame, ele oferece quartos com vista para a praça ou para o pátio interno. Um diferencial importante para quem quer otimizar o tempo são os ingressos de acesso rápido para as principais atrações, disponíveis diretamente na recepção.
              </p>
              <div className="flex justify-center mt-6 mb-8">
                <a href="https://www.booking.com/hotel/fr/select-paris.en-gb.html" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-400 text-navy-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 no-underline">
                  Ver Disponibilidade
                </a>
              </div>
            </div>

            <div className="my-8">
              <img 
                src="/images/blog/o-que-fazer-em-paris-em-3-dias/Hotel La Villa Saint Germain Des Prés.webp" 
                alt="Hotel La Villa Saint Germain Des Prés" 
                width={800} 
                height={533}
                className="w-full h-auto rounded-lg shadow-md mb-4"
                loading="lazy"
              />
              <p>
                O Hotel La Villa Saint Germain Des Prés oferece uma estadia sofisticada com comodidades de alto nível, incluindo piscina coberta, sauna e academia. Situado próximo ao Museu de Orsay e ao Jardim de Luxemburgo, é ideal para quem não abre mão do bem-estar. O serviço de concierge e os quartos climatizados, equipados com cafeteira, garantem que sua passagem por Saint-Germain seja impecável.
              </p>
              <div className="flex justify-center mt-6 mb-8">
                <a href="https://www.booking.com/hotel/fr/lavillasaintgermaindespres.en-gb.html" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-400 text-navy-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 no-underline">
                  Ver Disponibilidade
                </a>
              </div>
            </div>

            <div className="my-8">
              <img 
                src="/images/blog/o-que-fazer-em-paris-em-3-dias/Le Metropolitan.webp" 
                alt="Le Metropolitan" 
                width={800} 
                height={533}
                className="w-full h-auto rounded-lg shadow-md mb-4"
                loading="lazy"
              />
              <p>
                O Le Metropolitan, Paris Tour Eiffel é um hotel boutique contemporâneo totalmente renovado, localizado no requintado 16º arrondissement. Além da vista direta para a Torre Eiffel, a propriedade conta com um restaurante de culinária inovadora, hammam e piscina coberta. É a escolha certeira para quem deseja luxo sustentável a poucos passos do Trocadéro e da Champs-Élysées.
              </p>
              <div className="flex justify-center mt-6 mb-8">
                <a href="https://www.booking.com/hotel/fr/metropolitan-tribute-portfolio.pt-br.html" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-400 text-navy-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 no-underline">
                  Ver Disponibilidade
                </a>
              </div>
            </div>

            <div className="my-8">
              <img 
                src="/images/blog/o-que-fazer-em-paris-em-3-dias/Shangri-La Paris.webp" 
                alt="Shangri-La Paris" 
                width={800} 
                height={533}
                className="w-full h-auto rounded-lg shadow-md mb-4"
                loading="lazy"
              />
              <p>
                Instalado na antiga residência do Príncipe Roland Bonaparte, o Shangri-La Paris é a definição de exclusividade. Este palácio-hotel oferece vistas deslumbrantes da Torre Eiffel a partir de seus quartos decorados em harmonia com a estética do Império e a sofisticação asiática. Com dois restaurantes premiados e um spa completo integrado às antigas cavalarias, é o refúgio definitivo para quem busca o máximo de luxo às margens do Sena.
              </p>
              <div className="flex justify-center mt-6 mb-8">
                <a href="https://www.booking.com/hotel/fr/shangri-la-paris.pt-br.html" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-400 text-navy-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 no-underline">
                  Ver Disponibilidade
                </a>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-navy-900 mt-12 mb-6">Dicas e considerações iniciais para o Roteiro de 3 dias em Paris</h2>
            <p>
              Para aproveitar Paris ao máximo em apenas 72 horas, a regra de ouro é trocar a pressa pela estratégia. Como os museus e monumentos principais costumam abrir as portas por volta das 9h, acordar cedo não é apenas uma sugestão, é o que garantirá que você veja a Torre Eiffel sem as multidões de turistas que chegam após o almoço.
            </p>
            <p>
              A melhor forma de sentir a alma da cidade é, sem dúvida, caminhando por suas ruas históricas. Porém, para otimizar o tempo, o metrô será seu melhor aliado em trajetos mais longos e menos cênicos. Uma dica de ouro: para ganhar agilidade (e alguns euros), experimente almoçar um autêntico sanduíche de baguete comprado em uma boulangerie local. É o "almoço de rua" preferido dos parisienses, ideal para ser apreciado em um banco de jardim nas Tulherias, deixando o jantar para uma experiência mais relaxada em um bistrô à noite.
            </p>
            <p>
              Fique atento ao calendário: entre novembro e março, o sol se despede cedo, por volta das 17h. Se você planeja ver a cidade iluminada do alto de algum monumento, calcule seu deslocamento com antecedência. E lembre-se: para entrar na França, o seguro viagem é um item obrigatório e pode ser exigido logo na imigração.
            </p>
            <div className="flex justify-center mt-6 mb-8">
              <a href="#seguro-viagem" className="inline-block bg-yellow-400 text-navy-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 no-underline">
                Cotar Seguro Viagem
              </a>
            </div>

            <h2 className="text-3xl font-serif font-bold text-navy-900 mt-12 mb-6">Roteiro Paris dia 1</h2>
            <p>
              O primeiro dia em Paris é um convite para se apaixonar pela cidade luz. Preparamos um roteiro que equilibra pontos turísticos emblemáticos com experiências genuínas, otimizando seu tempo e criando memórias inesquecíveis. Descubra a seguir como aproveitar cada instante deste dia especial.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-6">Trocadéro, Torre Eiffel e Champ de Mars</h3>
            <img 
              src="/images/blog/o-que-fazer-em-paris-em-3-dias/Trocadéro, Torre Eiffel e Champ de Mars.webp" 
              alt="Trocadéro, Torre Eiffel e Champ de Mars" 
              width={800} 
              height={533}
              className="w-full h-auto rounded-lg shadow-md mb-4"
              loading="lazy"
            />
            <p>
              O Trocadéro, a Torre Eiffel e o Champ de Mars formam um dos conjuntos mais icônicos de Paris, oferecendo perspectivas e experiências distintas. O segredo para aproveitar ao máximo essa tríade é planejar com inteligência, evitando as armadilhas turísticas e otimizando seu tempo.
            </p>
            <p>
              Comece pelo Trocadéro, onde a vista panorâmica da Torre Eiffel se revela em toda a sua majestade. Chegue cedo para evitar a multidão e capture fotos deslumbrantes com a luz da manhã. A partir dali, desça em direção à Torre, atravessando a Ponte d'Iéna. Essa caminhada oferece ângulos progressivamente mais impressionantes da estrutura.
            </p>
            <p>
              Ao se aproximar da Torre Eiffel, prepare-se para a grandiosidade. Mesmo que não pretenda subir, a experiência de estar aos seus pés é inigualável. Contudo, a área ao redor da torre frequentemente está sujeita a esquemas de vendedores ambulantes e artistas de rua insistentes. Mantenha a atenção e evite interações desnecessárias.
            </p>
            <p>
              O Champ de Mars, o extenso gramado que se estende aos pés da Torre Eiffel, é um convite ao relaxamento. Considere levar um piquenique e desfrutar de um almoço ao ar livre com a Torre como pano de fundo. No entanto, esteja ciente de que a área pode ficar lotada, especialmente nos fins de semana e feriados.
            </p>
            <p>
              Para uma experiência mais tranquila, explore os cantos menos óbvios do Champ de Mars. Afaste-se da multidão, encontre um local sossegado e absorva a atmosfera parisiense. Observe os parisienses desfrutando de seu tempo livre e sinta-se parte da cidade. Evite horários de pico.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-6">Como evitar filas: Ingressos para museus, monumentos e atrações antecipados com desconto</h3>
            <p>
              Em Paris, filas gigantescas podem sabotar seus preciosos 3 dias. Imagine perder 2 ou 3 horas, sob sol forte ou chuva, só para comprar um ingresso. Desperdício total!
            </p>
            <p>
              A compra antecipada online não é luxo, é inteligência. Um QR Code no celular te dá acesso direto, sem filas e sem imprimir nada. Plataformas como GetYourGuide e Civitatis oferecem combos com desconto e cancelamento grátis – mais flexível que os sites oficiais.
            </p>
            <p>
              Para quem ama museus, o Paris Museum Pass "fura" muitas filas, mas atenção: a reserva de horário para o Louvre continua obrigatória, mesmo com o passe.
            </p>
            <p>
              Não arrisque! Garanta seus horários agora para não ficar só admirando a Torre Eiffel do lado de fora.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-6">Passeio de barco pelo rio Sena</h3>
            <p>
              Após um dia explorando Paris a pé, seus pés merecem um descanso real. Que tal um passeio de barco pelo Sena? Imagine admirar a silhueta de Notre Dame, o elegante Museu d'Orsay e, claro, a imponente Torre Eiffel, tudo de um ângulo totalmente novo, sem o caos do trânsito.
            </p>
            <p>
              O final da tarde é o momento perfeito. Embarque em um "bateau-mouche" enquanto o sol se põe, colorindo a cidade com tons dourados e revelando uma atmosfera mágica. É uma experiência que transcende qualquer tour a pé.
            </p>
            <p>
              A praticidade é um bônus. Os barcos partem a cada 30 minutos, e com o ingresso no celular, você decide a hora de embarcar, sem comprometer seu ritmo.
            </p>
            <p>
              E tem mais: o áudio-guia revela segredos nas pontes que você jamais notaria em terra firme. É o toque final para relaxar e se apaixonar por Paris sob uma nova perspectiva.
            </p>

            <h2 className="text-3xl font-serif font-bold text-navy-900 mt-12 mb-6">3 dias em Paris dia 2</h2>
            <p>
              Paris se revela em nuances no segundo dia, um convite a mergulhar na alma intelectual e boêmia da cidade. Em vez de revelar cada detalhe agora, vamos descobrir juntos os segredos do Quartier Latin e Saint-Germain-des-Prés, bairros que respiram história e cultura a cada esquina.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-6">Museu do Louvre, Jardins Tuileries e Praça da Concorde</h3>
            <img 
              src="/images/blog/o-que-fazer-em-paris-em-3-dias/Museu do Louvre, Jardins Tuileries e Praça da Concorde.webp" 
              alt="Museu do Louvre, Jardins Tuileries e Praça da Concorde" 
              width={800} 
              height={533}
              className="w-full h-auto rounded-lg shadow-md mb-4"
              loading="lazy"
            />
            <p>
              O Louvre é gigante, impossível de dominar em uma visita. Para otimizar seu tempo, concentre-se em 3 ou 4 obras-primas. A Mona Lisa e a Vênus de Milo são imperdíveis, mas não deixe que as filas te frustrem. Se estiverem grandes demais, explore outras alas, repletas de tesouros menos disputados.
            </p>
            <p>
              Depois da imersão cultural, nada como os Jardins Tuileries para recarregar as energias. A saída do museu te leva direto a este oásis parisiense. Relaxe nas icônicas cadeiras verdes, admire as fontes e esculturas, e sinta a brisa fresca.
            </p>
            <p>
              Continue até a Place de la Concorde. Ali, o Obelisco de Luxor, presente do Egito, marca o local onde a guilhotina ceifou vidas na Revolução Francesa. Caminhe pela praça, absorva a história e admire a vista da Champs-Élysées e do Arco do Triunfo.
            </p>
            <p>
              Este trajeto do Louvre à Place de la Concorde é o momento perfeito para o "almoço de padaria" que sugerimos no início. Saboreie um autêntico sanduíche em um dos jardins ou praças. Uma refeição simples, mas com a vista mais espetacular do mundo.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-6">Avenida Champs Elysées e Arco do Triunfo</h3>
            <p>
              Antes de se entregar à grandiosidade da Champs-Élysées, reserve um instante para um pequeno desvio estratégico: a Ponte Alexandre III. Muitos a consideram a mais bela de Paris, e a profusão de detalhes em dourado e as esculturas clássicas justificam a fama. A vista para o Sena e a Torre Eiffel a partir da ponte é um aperitivo perfeito para o que está por vir.
            </p>
            <p>
              A "Champs", como os parisienses a chamam, é um espetáculo à parte. A avenida que liga a Place de la Concorde ao Arco do Triunfo é, sim, turística e ostenta preços acima da média. Mas a experiência de caminhar por ela é essencial para sentir a vibração da cidade. Observe as vitrines de grifes famosas, admire a arquitetura imponente e deixe-se levar pelo fluxo constante de pessoas. A subida da Champs-Élysées é uma imersão na alma de Paris, uma celebração da história e da modernidade.
            </p>
            <p>
              O ápice deste dia glorioso aguarda no topo do Arco do Triunfo. A vista panorâmica de 360 graus é simplesmente a melhor de Paris para quem deseja compreender o desenho da cidade. Contemple as 12 avenidas que convergem para a Place de l'Étoile, formando uma estrela urbana hipnotizante. A perspectiva revela a simetria, a organização e a beleza da capital francesa.
            </p>
            <p>
              Planeje sua subida com antecedência. A fila para comprar ingressos no local costuma ser longa, especialmente no horário do pôr do sol, quando a luz dourada transforma a cidade em um cenário mágico. Garanta seu ingresso online antecipadamente ou utilize o Paris Museum Pass para ter acesso prioritário. Não deixe que a espera te impeça de vivenciar este momento único. Do alto do Arco do Triunfo, Paris se revela em toda a sua glória, recompensando cada passo da sua jornada.
            </p>

            <h2 className="text-3xl font-serif font-bold text-navy-900 mt-12 mb-6">Roteiro 3 dias em Paris Dia 3</h2>
            <p>
              O terceiro dia em Paris é um convite para explorar a diversidade da cidade, desde a arte moderna até a efervescência cultural de bairros icônicos. Em vez de detalhar cada atração, vamos descobrir juntos como priorizar experiências autênticas e revelar cantos que exibem a alma parisiense.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-6">Montmartre e a Basílica de Sacré-Cœur Montmartre</h3>
            <img 
              src="/images/blog/o-que-fazer-em-paris-em-3-dias/Basílica de Sacré-Cœur Montmartre.webp" 
              alt="Basílica de Sacré-Cœur Montmartre" 
              width={800} 
              height={533}
              className="w-full h-auto rounded-lg shadow-md mb-4"
              loading="lazy"
            />
            <p>
              Comece o dia com a visão inspiradora da Basílica de Sacré-Cœur, no topo de Montmartre. Para poupar as pernas na subida, use o Funicular de Montmartre – o bilhete custa o mesmo que uma passagem de metrô. A Place du Tertre, com seus artistas, é passagem obrigatória, mas o verdadeiro charme está em se perder pelas ruelas atrás da igreja, onde a "velha Paris" resiste. Antes de continuar, um café rápido em um dos bistrôs com fachadas cobertas de hera rende fotos dignas de cartão postal.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-6">Ilhas do Sena</h3>
            <img 
              src="/images/blog/o-que-fazer-em-paris-em-3-dias/Ilhas do Sena.webp" 
              alt="Ilhas do Sena" 
              width={800} 
              height={533}
              className="w-full h-auto rounded-lg shadow-md mb-4"
              loading="lazy"
            />
            <p>
              Após descer a colina de Montmartre, siga em direção ao berço de Paris: as Ilhas do Sena. Na Île de la Cité, a majestosa fachada da Catedral de Notre-Dame domina a paisagem — e em 2026, você já poderá admirar de perto os detalhes finais da sua restauração histórica. Mas não pare por ali. O verdadeiro tesouro está na Sainte-Chapelle; seus vitrais medievais criam um jogo de luzes que faz qualquer um perder o fôlego. Para evitar as filas que se formam logo cedo, garantir seu ingresso antecipado é a única forma de não gastar sua tarde esperando na calçada.
            </p>
            <p>
              Atravesse a pequena ponte de pedestres para a Île Saint-Louis e sinta a mudança imediata de ritmo. Esta ilha é um refúgio residencial charmoso, perfeito para caminhar sem destino. A parada obrigatória é a lendária sorveteria Berthillon; pegar um sorvete e sentar-se à beira do rio é o tipo de prazer simples que define a experiência parisiense.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-6">Marais</h3>
            <img 
              src="/images/blog/o-que-fazer-em-paris-em-3-dias/Marais.webp" 
              alt="Marais" 
              width={800} 
              height={533}
              className="w-full h-auto rounded-lg shadow-md mb-4"
              loading="lazy"
            />
            <p>
              Cruzando a Ponte d’Arcole, você entra no Marais, o bairro onde a Paris medieval encontra o que há de mais moderno e fashion na cidade. Caminhar por aqui é descobrir um labirinto de palacetes do século XVII que hoje abrigam galerias de arte e boutiques de marcas francesas exclusivas. Se a fome apertar, a Rue des Rosiers oferece o melhor da gastronomia judaica — o falafel do L’As du Fallafel é uma instituição local que vale cada mordida.
            </p>
            <p>
              Para uma pausa cultural sem custos, o Museu Carnavalet conta a história da cidade em um cenário deslumbrante. Se preferir um clima mais vibrante, o Marché des Enfants Rouges é o mercado coberto mais antigo de Paris, ideal para provar sabores do mundo todo em um ambiente autêntico. Termine sua jornada na Place des Vosges, a praça mais bonita da capital. Descansar sob suas arcadas ou tomar um chocolate quente no Carette é o fechamento perfeito para quem quer se despedir de Paris vivendo como um verdadeiro local.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-6">Alternativa com crianças – Disneyland Paris</h3>
            <p>
              Para famílias, equilibrar a sofisticação parisiense com a alegria infantil pode ser um desafio. Se a viagem tem crianças, considere trocar um dia de museus e bairros históricos por uma aventura inesquecível na Disneyland Paris.
            </p>
            <p>
              A magia da Disney é universal, e a praticidade de acesso a torna uma opção tentadora. A linha RER A te leva direto do centro de Paris ao portão dos parques em apenas 40 minutos. Embarque, por exemplo, na estação Châtelet-Les Halles e siga até Marne-la-Vallée-Chessy, o ponto final da linha e a poucos passos da entrada.
            </p>
            <p>
              Para garantir a diversão sem imprevistos, o planejamento é crucial. Em 2026, comprar ingressos na bilheteria física será cada vez mais raro. A única forma de evitar filas quilométricas e ter a entrada garantida é adquirir o ticket digital "1 Dia / 2 Parques" com antecedência.
            </p>
            <p>
              Com o ingresso no celular, a diversão começa antes mesmo de chegar ao parque. As crianças já entram no clima, e você evita o estresse de horas em filas. Afinal, o tempo é precioso, e cada minuto na Disneyland Paris deve ser aproveitado ao máximo. Seus pequenos vão te agradecer!
            </p>

            <h2 className="text-3xl font-serif font-bold text-navy-900 mt-12 mb-6">Não esqueça o seguro viagem obrigatório para Europa</h2>
            <p>
              A empolgação com os monumentos e cafés muitas vezes faz o viajante esquecer um detalhe burocrático, mas vital: o seguro viagem não é apenas uma recomendação, é uma exigência legal. Por conta do Tratado de Schengen, para entrar na França como turista, você deve obrigatoriamente portar uma apólice com cobertura mínima de 30 mil euros para despesas médicas e hospitalares. Sem esse documento em mãos (impresso ou digital), você corre o risco real de ser impedido de passar pela imigração logo no aeroporto.
            </p>
            <p>
              Além da questão obrigatória, o seguro é o seu maior aliado contra o "custo Paris". Um simples atendimento de urgência ou uma indisposição por conta do fuso horário pode custar centenas de euros em clínicas particulares francesas. Com um investimento que custa menos que um café por dia, você garante assistência para imprevistos como extravio de bagagem, cancelamento de voos e, claro, qualquer emergência de saúde.
            </p>
            <p>
              A dica para economizar aqui é utilizar comparadores de preços que listam as melhores seguradoras do mercado em um só lugar. Assim, você garante o menor preço com a cobertura exata que o governo francês exige. Não deixe para a última hora; emitir sua apólice agora é o passo final para garantir que nada atrapalhe seus 3 dias na Cidade Luz.
            </p>

            <h2 className="text-3xl font-serif font-bold text-navy-900 mt-12 mb-6">Vale a pena ônibus hop-on hop-off em Paris?</h2>
            <p>
              Os famosos ônibus de dois andares que percorrem os boulevards parisienses geram sempre a mesma dúvida: vale o investimento? A resposta curta é: depende da sua prioridade. Se você tem apenas 3 dias e quer uma visão panorâmica completa sem o cansaço das escadarias do metrô, o ônibus é um "seguro contra a exaustão". Ele permite que você paire a quatro metros de altura, garantindo ângulos de fotos que quem está no chão simplesmente não consegue.
            </p>
            <p>
              Por outro lado, o modo hop-on hop-off (subir e descer livremente) pode ser traiçoeiro se você tiver um cronograma rígido, já que o trânsito de Paris é imprevisível. O melhor uso dessa ferramenta em um roteiro curto é fazer o circuito completo de uma vez, logo no primeiro dia, para se localizar geograficamente e entender a magnitude da cidade antes de começar a explorá-la a pé.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-6">Tootbus e Big Bus</h3>
            <img 
              src="/images/blog/o-que-fazer-em-paris-em-3-dias/Tootbus e Big Bus.webp" 
              alt="Tootbus e Big Bus" 
              width={800} 
              height={533}
              className="w-full h-auto rounded-lg shadow-md mb-4"
              loading="lazy"
            />
            <p>
              Atualmente, o mercado é dominado por duas grandes operadoras que cobrem os principais pontos turísticos, ambas com audioguias em português:
            </p>
            <p>
              <strong>Tootbus:</strong> É a opção mais sustentável, com uma frota de ônibus 100% elétricos. Seus tickets variam de 24 a 72 horas e o roteiro conta com 11 paradas estratégicas, incluindo as Galeries Lafayette e o Museu d’Orsay. O diferencial é o aplicativo que oferece rotas de caminhada autoguiadas em cada parada, ajudando você a explorar o entorno com mais profundidade.
            </p>
            <p>
              <strong>Big Bus:</strong> Com um ticket que começa em torno de € 43, a Big Bus foca em um circuito clássico de cerca de 2h15 de duração. Suas paradas são certeiras: Louvre, Notre-Dame, Arco do Triunfo e, claro, a Torre Eiffel. É a escolha tradicional para quem quer garantir o "be-a-bá" de Paris com conforto.
            </p>
            <p>
              Independentemente da sua escolha, a dica de ouro para 2026 é comprar o ticket online. Isso evita que você perca tempo em filas nas calçadas e garante que seu voucher esteja pronto no celular para o primeiro embarque.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-6">Transporte para aeroportos</h3>
            <p>
              A sua chegada e partida de Paris provavelmente acontecerão em um dos dois aeroportos principais: o Charles de Gaulle (CDG) ou o Orly. Entender a logística de cada um é fundamental para não começar a viagem com um gasto desnecessário ou terminar em correria.
            </p>
            <p>
              <strong>Do Charles de Gaulle (CDG):</strong> Localizado a cerca de 25 km ao norte, a opção mais econômica é o RER B. O trajeto leva cerca de 50 minutos até a estação Châtelet-Les Halles e custa aproximadamente €12. Se você estiver com muitas malas, o RER pode ser um desafio devido às escadas do metrô. Nesse caso, os táxis oficiais operam com tarifa fixa (entre €55 e €65 dependendo da margem do rio), sendo uma opção excelente para grupos de até 4 pessoas.
            </p>
            <p>
              <strong>De Orly:</strong> Mais próximo do centro, o aeroporto de Orly não possui trem direto. Você precisará pegar o Orlyval (um metrô automático) até a estação Antony e lá fazer a baldeação para o RER B. Outra alternativa prática é o Orlybus, que te deixa na estação Denfert-Rochereau por cerca de €11. Se preferir conforto, um táxi para o centro custa em média €35 a €45.
            </p>
            <p>
              <strong>Alerta máximo:</strong> No saguão de desembarque, ignore qualquer pessoa que se aproxime oferecendo transporte. Esses são motoristas clandestinos que podem cobrar valores abusivos. Siga sempre as placas oficiais indicando "Taxis" ou chame um aplicativo (como Uber ou G7) dentro das áreas sinalizadas. Em 2026, com o trânsito de Paris cada vez mais complexo, a dica de ouro é sair para o aeroporto com pelo menos 4 horas de antecedência ao seu voo internacional.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-6">Melhor época para visitar</h3>
            <p>
              Paris se transforma a cada estação, e a "melhor época" depende diretamente do que você espera da viagem. Em 2026, com o turismo em alta, o calendário é seu melhor amigo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Primavera (Abril a Junho):</strong> É a Paris dos filmes. Os jardins estão floridos e a temperatura é ideal para caminhar. É a época mais equilibrada, embora os preços comecem a subir.</li>
              <li><strong>Outono (Setembro a Outubro):</strong> Minha recomendação pessoal. A luz da cidade fica dourada, as folhas caídas no Jardim das Tulherias rendem fotos incríveis e as multidões do verão já se dispersaram.</li>
              <li><strong>Verão (Julho e Agosto):</strong> Dias longos (escurece após as 22h) e muito calor. É a altíssima temporada; espere filas maiores e preços de hotéis no topo.</li>
              <li><strong>Inverno (Novembro a Março):</strong> Para quem quer economizar. Exceto no Natal, os preços caem e você vê uma Paris mais autêntica e melancólica. Prepare-se para dias curtos e garoa constante, mas aproveite os museus mais vazios.</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-6">Segurança, cuidados e o idioma</h3>
            <p>
              Viajar para Paris é seguro, mas exige a malícia de quem visita qualquer grande metrópole mundial. Para evitar que pequenos incidentes estraguem seus 3 dias, siga estas diretrizes:
            </p>
            <p>
              <strong>O Idioma e a Etiqueta:</strong> Esqueça o mito de que os parisienses são rudes. A chave para um bom atendimento em 2026 continua sendo a educação básica: comece sempre com um "Bonjour" (Bom dia) ou "Bonsoir" (Boa noite) antes de qualquer pergunta. O uso dessas palavras mágicas abre portas e transforma o humor de garçons e atendentes. Se o seu francês não for além disso, pergunte educadamente: "Parlez-vous anglais/portugais?".
            </p>
            <p><strong>Segurança e Golpes Comuns:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Pickpockets:</strong> Esteja atento em locais de grande aglomeração, como a base da Torre Eiffel, o metrô e a entrada do Louvre. Use doleiras ou mantenha bolsas à frente do corpo.</li>
              <li><strong>Golpes de Rua:</strong> Ignore pessoas que tentam amarrar pulseiras no seu pulso em Montmartre ou que pedem para você assinar petições. São táticas de distração para furtos.</li>
              <li><strong>Carafe d’eau:</strong> Uma dica de insider para economizar: nos restaurantes, peça por uma "carafe d'eau" (água da torneira, que é potável e excelente). É gratuita por lei e você economiza os €6 que pagaria por uma garrafa de água mineral.</li>
            </ul>

            <h2 className="text-3xl font-serif font-bold text-navy-900 mt-12 mb-6">Conclusão</h2>
            <p>
              Percorrer Paris em três dias exige escolhas, mas o roteiro que traçamos é um mapa para vivenciar o essencial sem cair nas armadilhas turísticas. Priorize seus interesses, fuja das filas, interaja com a cidade e, acima de tudo, permita-se ser surpreendido. Paris recompensa quem se entrega ao seu ritmo único.
            </p>
            <p>
              A chave para uma experiência inesquecível está na combinação de planejamento estratégico e flexibilidade. Reserve seus ingressos, familiarize-se com o transporte público e defina suas prioridades. Mas, lembre-se, os melhores momentos podem surgir em um café inesperado ou em uma rua desconhecida.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Paris3Dias;

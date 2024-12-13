// navbar e footer
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import "./Stores.css";

export const Stores = () => {
  return (
    <>
      <div className="lojas">
        <Navbar />
        <main className="containerLojas">
          <h1>Lojas Samsung</h1>
          <h4>Algumas lojas Samsung pelo mundo</h4>
          <aside className="lojasSamsung">
            <h2>Coreia do Sul</h2>
            <p>
              A Samsung possui várias lojas de serviços em toda a Coreia do Sul,
              que possuem vitrines de vários produtos Samsung disponíveis para
              compra e também centros de reparo para esses itens. Também possui
              lojas dedicadas à instalação de eletrodomésticos de grande porte,
              como TVs, lava-louças e geladeiras. Também possui lojas apenas
              para venda e conserto de seus produtos de memória, como os SSDs.
            </p>
            <h2>Canadá</h2>
            <h3>Toronto</h3>
            <p className="lojasToronto">
              Samsung tem 4 Samsung Experience Stores diferentes em Toronto.
            </p>
            <p>
              A localização principal está localizada no Toronto Eaton Centre e
              tem dois níveis. No primeiro andar estão expostos telefones,
              tablets, smartwatches, outros eletrônicos e acessórios. Há também
              uma seção de Realidade Virtual onde o cliente pode jogar jogos de
              RV e sentar-se para assistir a vídeos em RV, como por exemplo
              andar de montanha-russa. No segundo andar, há uma área de
              eletrodomésticos onde são mostrados refrigeradores, fogões, e
              outros equipamentos da marca. A seção de TV mostra suas TVs de
              tela grande. Há também uma seção para garantia e reparos.
            </p>
            <h3>Outros</h3>
            <p className="lojasToronto">
              A Samsung tem 3 outras Samsung Experience Stores no Canadá, fora de
              Toronto.
            </p>
            <h2>Índia</h2>
            <p>
              A Samsung abriu a sua maior loja do mundo em Bangalore, Karnataka,
              cobrindo uma área de 33.000 pés quadrados. Também é conhecida como
              Samsung Opera House.
            </p>
            <h2>Estados Unidos</h2>
            <p>
              A Samsung tem 5 Samsung Experience Stores nos Estados Unidos.
              Essas oferecem experiências imersivas para os clientes conhecerem
              as mais recentes inovações da marca. As principais localizações
              incluem: Samsung 837 em Nova York (837 Washington St., Meatpacking
              District), uma flagship store focada em tecnologia interativa; Los
              Angeles, Califórnia, com um ambiente dinâmico para explorar a
              linha de produtos; Garden City, Nova York, uma loja completa na
              região metropolitana; Dallas-Fort Worth, Texas, oferecendo
              serviços de demonstração e suporte técnico; e Houston, Texas,
              outro ponto de destaque na região sul. Essas lojas combinam
              tecnologia, inovação e atendimento ao cliente, criando uma
              experiência única para os visitantes​.
            </p>
            <h2>E claro, no Brasil também!</h2>
            <p>
              As Samsung Experience Stores no Brasil estão localizadas em pontos
              estratégicos, oferecendo aos clientes acesso às mais recentes
              inovações da marca. Entre as principais unidades destacam-se: a
              loja do Morumbi Shopping em São Paulo, conhecida pela sua ampla
              estrutura e atendimento de excelência; a unidade do BarraShopping
              no Rio de Janeiro, um dos maiores centros comerciais do país; a
              loja no Shopping Recife, referência no Nordeste em produtos
              Samsung; a do Salvador Shopping, localizada na capital baiana com
              grande fluxo de visitantes; e a do Shopping Iguatemi São Paulo, um
              espaço de alto padrão que proporciona uma experiência completa
              para os clientes. Essas lojas oferecem demonstrações de produtos,
              suporte técnico e eventos exclusivos para os consumidores.
            </p>
          </aside>
        </main>
        <Footer />
      </div>
    </>
  );
};

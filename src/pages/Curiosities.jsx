// navbar e footer
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

// styles
import "./Curiosities.css";
import GalaxyZFold from "../images/galaxy-z-fold-4.png";
import NeoQled from "../images/samsung-neo-qled.png";

export const Curiosities = () => {
  return (
    <>
      <div>
        <Navbar />
        <main>
          <h1>Curiosidades sobre a Samsung</h1>
          <p className="subtitulo">
            Não pare de ler, a última pode te surpreender!
          </p>
          <section className="inovacao">
            <h2>Líder em inovação</h2>
            <p>
              A Samsung é conhecida por sua cultura de inovação e investimentos
              pesados em pesquisa e desenvolvimento. A empresa é responsável por
              muitas inovações tecnológicas, como o desenvolvimento de
              smartphones com telas maiores, o lançamento do primeiro smartphone
              com câmera dupla, e a introdução de tecnologia de reconhecimento
              facial e leitura de íris e o primeiro smartphone dobrável do
              mundo.
            </p>
            <img src={GalaxyZFold} alt="Galaxy Z Fold 4" />
            <span>Galaxy Z Fold 4</span>
          </section>
          <h2>A maior do Brasil</h2>
          <p>
            A Samsung lançou seu primeiro celular em 1988, mas foi apenas nos
            anos 2000 que a empresa se tornou um grande player no mercado global
            de smartphones. No Brasil, a Samsung tem uma posição de destaque há
            bastante tempo, sendo a empresa que mais vende celulares no país
            atualmente.
          </p>
          <section className="tela">
            <h2>Líder na produção de telas</h2>
            <p>
              A Samsung se tornou líder na produção de telas no final da década
              de 1990 e início dos anos 2000, quando a empresa investiu
              fortemente em tecnologia de <strong>tela plana</strong> e{" "}
              <strong>LCD.</strong> A Samsung lançou sua primeira TV LCD em 1998
              e rapidamente se tornou um dos principais fabricantes de painéis
              de LCD do mundo.
            </p>
            <img src={NeoQled} alt="Tv Samsung Neo Qled" />
            <span>Samsung Neo Qled</span>
            <p>
              Em 2002, a Samsung se tornou líder na produção de telas de plasma,
              e em 2004, a empresa lançou a primeira TV LCD de tela grande do
              mundo, com 46 polegadas. Desde então, a Samsung continuou a
              liderar a inovação em tecnologia de tela, lançando telas{" "}
              <strong>OLED</strong> e <strong>QLED</strong> de alta qualidade.
              Hoje, a Samsung é líder mundial na produção de telas, fornecendo
              telas para várias marcas de TVs e smartphones, bem como para seus
              próprios produtos eletrônicos.
            </p>
          </section>
          <h1 className="curiosidadeApple">
            Tanto que, a apple é uma cliente de telas da Samsung!
          </h1>
          <h2>Relacionamento com a Apple</h2>
          <p>
            Apesar da recente atividade de litígio, a Samsung e a Apple têm sido
            descritas como frenemies que compartilham uma relação de amor e
            ódio. A Samsung é um importante fornecedor para a Apple, primeiro
            fornecendo memória para os primeiros dispositivos iPod em 2005 e a
            Apple é um cliente chave para a Samsung, em 2012, suas vendas de
            componentes foram estimadas em cerca de US$ 8 bilhões receita para a
            Samsung, ao ponto em que o CEO da Apple, Tim Cook, originalmente se
            opôs a litígios contra a Samsung, desconfiado da cadeia de
            fornecimento de componentes críticos da empresa para a Apple.
          </p>
          <p>
            Em abril de 2011, a Apple Inc. anunciou que estava processando a
            Samsung pelo design de sua linha de telefones celulares Galaxy. O
            processo foi aberto em 15 de abril de 2011 e alega que a Samsung
            infringiu as marcas e patentes da Apple do <strong>iPhone</strong> e{" "}
            <strong>iPad.</strong> A Samsung emitiu uma reconvenção contra a
            Apple por violação de patente. Em agosto de 2011, no Tribunal
            Regional de Düsseldorf, a Apple obteve uma liminar contra a venda e
            comercialização do Samsung <strong>Galaxy Tab 10.1</strong> em toda
            a Europa, excluindo a Holanda. A proibição foi temporariamente
            suspensa na União Europeia, com exclusão da Alemanha, enquanto se
            investiga se a liminar original era ou não apropriada.
          </p>
          <p>
            Em 31 de agosto de 2012, o Tribunal Distrital de Tóquio decidiu que
            os dispositivos móveis da Samsung Electronics não violavam uma
            patente da Apple. O caso abordou apenas a patente da Apple que
            permite que dispositivos móveis e computadores pessoais sincronizem
            ou compartilhem dados entre si e não é comparável com o processo
            judicial dos EUA decidido em 24 de agosto. Em 18 de outubro de 2012,
            a Alta Corte de Justiça do Reino Unido decidiu que a Samsung não
            infringiu as patentes de design da Apple. A Apple foi forçada a
            emitir um pedido de desculpas ordenado pelo tribunal à Samsung em
            seu site oficial no Reino Unido.
          </p>
        </main>
        <Footer />
      </div>
    </>
  );
};

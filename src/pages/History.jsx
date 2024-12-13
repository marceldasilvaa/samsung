// styles
import "./History.css";
import PrimeiraLojaSamsung from "../images/primeira-loja-samsung.webp";
import HistoriaLogoSamsung from "../images/logotipo-samsung-historia.jpg";
import AtualLogoSamsung from "../images/samsung-logo.png";

// cabeçalho e rodapé
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const History = () => {
  return (
    <>
      <div className="historia">
        <Navbar />
        <section className="introducao">
          <h1>Curioso para saber a história da sua marca favorita?</h1>
          <p>
            Aqui temos um resumo da história da Samsung e também da sua
            logotipo. Que assim como a marca, mudou ao longo dos anos. Sim, a
            marca Samsung não iniciou suas operações com tecnologias, e sim,
            sendo uma empresa de peixe desidatrado, vegetais e macarrão.
            Acompanhe agora um pouco de sua história.
          </p>
        </section>
        <h2>História da Samsung</h2>
        <section className="conteudo">
          <p>
            A Samsung nasceu na Coreia do Sul em 1938 e se transformou em um dos
            maiores conglomerados do país e do mundo, com atuação em diversas
            áreas. Apesar da diversidade dos negócios, ela é mais conhecida
            globalmente pelos eletrônicos.
          </p>
          <p>
            Fundada por{" "}
            <strong>
              <a
                href="https://pt.wikipedia.org/wiki/Lee_Byung-chul"
                target="_blank"
              >
                🔗Lee Byung-chul
              </a>
            </strong>
            , a empresa teve origens modestas, dedicada à exportação de
            alimentos. Em poucos anos, a Samsung ampliou os negócios para entrar
            também em outros setores, incluindo comércio, finanças e têxtil.
          </p>
          <aside id="loja">
            <img src={PrimeiraLojaSamsung} alt="Primeira Loja Samsung" />
            <p className="descricoes">
              A primeira loja Samsung fundada por Byung-Chul, em 1939.
            </p>
          </aside>
          <p>
            A divisão de produtos eletrônicos só surgiu em 1969, com o
            lançamento de sua primeira TV, ainda em preto e branco. A empresa
            começou a expansão internacional e ficou conhecida também por
            eletrodomésticos, como geladeiras e máquinas de lavar.
          </p>
          <p>
            O crescimento da empresa levou os negócios para a fabricação de
            monitores de computadores, aparelhos celulares, tablets, robôs,
            entre tantos outros produtos tecnológicos.
          </p>
          <p>
            A partir da década de 2010, a companhia se estabelece como uma das
            principais marcas do mercado de tecnologia móvel, tornando-se a
            principal rival da Apple. A disputa gerou um dos processos mais
            famosos da história da tecnologia, iniciado em 2011 e encerrado
            apenas em 2018, em que a Samsung foi acusada de infringir patentes
            referentes ao iPhone e ao iOS em seus celulares.
          </p>
          <p>
            A empresa é conhecida pela linha de smartphones{" "}
            <strong>Galaxy S</strong>, mas também foi uma das líderes no mercado
            de celulares com telas dobráveis, com produtos como o{" "}
            <strong>Galaxy Z Fold</strong> e o <strong>Z Flip</strong>. A
            companhia ainda produz os relógios da família{" "}
            <strong>Galaxy Watch</strong> e os fones de ouvido{" "}
            <strong>Galaxy Buds</strong>.
          </p>
          <p>
            A Samsung chegou ao Brasil em 1986 com duas linhas de produtos:
            monitores e discos rígidos. Com a rápida ascensão das operações
            brasileiras, a companhia passou a investir em unidades de fabricação
            locais para aumentar o portfólio disponível no país. A companhia
            conta com duas unidades fabris locais: uma localizada em{" "}
            <strong>
              <a
                href="https://www.samsung.com/br/support/service-center/samsung-service-center/unidade-manaus-am/"
                target="_blank"
              >
                🔗Manaus (AM)
              </a>
            </strong>
            , e a outra em{" "}
            <strong>
              <a
                href="https://www.samsung.com/br/support/service-center/samsung-service-center/unidade-campinas-sp/"
                target="_blank"
              >
                🔗Campinas (SP)
              </a>
            </strong>
            .
          </p>
          <h2>História da logo Samsung</h2>
          <p>
            A palavra "Samsung" é uma palavra coreana que significa "três
            estrelas". Ela é derivada das palavras "sam", que significa "três",
            e "sung", que significa "estrelas". O nome Samsung foi escolhido
            para refletir a ambição da empresa de se tornar poderosa e duradoura
            como as três estrelas que brilham no céu.
          </p>
          <aside id="logos">
            <img src={HistoriaLogoSamsung} alt="História da Logo Samsung" />
            <p className="descricoes">
              Logo Samsung ao longo dos anos - (1938 - 2015).
            </p>
          </aside>
          <p>
            O logo da Samsung passou por várias mudanças ao longo dos anos desde
            a sua fundação em 1938. Veja abaixo um breve resumo da história do
            logo da empresa:
          </p>

          <p className="historiaLogo">
            <strong>1938:</strong> O primeiro logo da Samsung era um simples
            retângulo vermelho com o nome da empresa escrito em branco.
          </p>

          <p className="historiaLogo">
            <strong>1958:</strong> A Samsung introduziu um novo logo com o nome
            da empresa em coreano, em um círculo azul. O círculo representava a
            ideia de que a empresa estava se expandindo em todo o mundo.
          </p>

          <p className="historiaLogo">
            <strong>1969:</strong> A Samsung mudou novamente seu logo, desta vez
            para um design mais moderno e simplificado, com a palavra "Samsung"
            escrita em letras maiúsculas, em um retângulo azul.
          </p>
          <p className="historiaLogo">
            <strong>1980:</strong> O logo da Samsung foi atualizado novamente,
            desta vez adicionando um elemento de design mais gráfico. O novo
            logo apresentava a palavra "Samsung" em letras maiúsculas, dentro de
            um retângulo vermelho com bordas arredondadas.
          </p>

          <p className="historiaLogo">
            <strong>1993:</strong> Surge um novo logo com um design mais
            elegante e moderno. O novo logo apresentava a palavra "Samsung"
            escrita em letras minúsculas, em um oval azul.
          </p>

          <p className="historiaLogo">
            <strong>2016:</strong> A última atualização na identidade Samsung
            até agora, com um design mais plano e minimalista. O novo logo
            apresenta a palavra "Samsung" escrita em letras maiúsculas, em um
            tipo de fonte mais limpo e moderno e abandonando o fundo oval azul.
          </p>
          <aside id="logo">
            <img src={AtualLogoSamsung} alt="Logo Atual da Samsung" />
            <p className="descricoes">Atual logo da marca Samsung.</p>
          </aside>
          <p>
            De acordo com a empresa, o atual logo da Samsung atualmente é um
            símbolo que representa inovação, qualidade e a tecnologia avançada
            dos produtos da empresa, sendo reconhecida em qualquer lugar do
            mundo.
          </p>
        </section>
        <Footer />
      </div>
    </>
  );
};

import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "./about.css";

import foto1 from "../../assets/img/sobre-image.jpg";
import foto2 from "../../assets/img/sorveteria.jpg";

export default function About() {
  return (
    <div className="About">
      <div className="About-content">
        <Header />
        <div className="about-banner">
          <div className="about-banner-texto">
            <h2>Sol e Mar</h2>
          </div>
        </div>
        <div className="about-content">
          <h2>Sobre Nós</h2>
          <h3>Nós simplesmente amamos sorvete!</h3>
          <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
          <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>

          <div className="imagens">
            <img src={foto1} alt="3-amigos" />
            <img src={foto2} alt="sorveteria" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

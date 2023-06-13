import tigela from "../../../assets/img/banner-sabores.jpg";
import evento from "../../../assets/img/eventos-image.jpg";
import galera from "../../../assets/img/sobre-image.jpg";
import "./style.css";

export default function Presentation() {
  return (
    <div className="Presentation">
      <div className="Presentation-content">
        <div className="section1">
          <img src={tigela} alt="tigela" />
          <div className="texto">
            <h2>Nossos sabores</h2>
            <h3>Novos e deliciosos!</h3>
            <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
          </div>
        </div>
        <div className="section2">
          <div className="texto">
            <h2>NOSSOS EVENTOS</h2>
            <h3>Delicias com sorvete!</h3>
            <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
          </div>
          <img src={evento} alt="evento" />
        </div>
        <div className="section3">
          <img src={galera} alt="galera" />
          <div className="texto">
            <h2>SOBRE NÓS</h2>
            <h3>Alegria em cada casquinha!</h3>
            <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

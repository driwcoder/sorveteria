import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

import oreo from '../../assets/img/sabor-oreo.png'
import pistache from '../../assets/img/sabor-pistache.png'
import avela from '../../assets/img/sabor-cookies-avela.png'
import kiwi from '../../assets/img/sorbet-kiwi.png'
import morango from '../../assets/img/sorbet-morango.png'
import limao from '../../assets/img/sorbet-limao.png'

import "./style.css";

export default function Flavors() {
  return (
    <div className="Flavors">
      <div className="Flavors-content">
        <Header />
        <div className="banner">
          <section className="secao-banner-sabores">
            <div className="titulo-banner-sabores">
              <h1>NOSSOS SABORES</h1>
            </div>
          </section>
          <section className="cards">
          <div className="card">
              <img src={oreo} alt="oreo" />
              <h3>Sorvete de Oreo</h3>
              <p>Delicioso sorvete sabor Oreo, uma explosão de sabor</p>
            </div>
            <div className="card">
              <img src={pistache} alt="" />
              <h3>Sorvete Pistache</h3>
              <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
            </div>
            <div className="card">
              <img src={avela} alt="" />
              <h3>Sorvete Cookies & Avelã</h3>
              <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
            </div>
            <div className="card">
              <img src={kiwi} alt="" />
              <h3>Sorvete de Kiwi</h3>
              <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
            </div>
            <div className="card">
              <img src={morango} alt="" />
              <h3>Sorvete de Morango</h3>
              <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
            </div>
            <div className="card">
              <img src={limao} alt="" />
              <h3>Sorvete de Limão Siciliano</h3>
              <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
            </div>

          </section>

        </div>
        <Footer />
      </div>
    </div>
  );
}

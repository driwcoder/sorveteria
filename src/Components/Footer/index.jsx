import logo from '../../assets/img/logo2.png'
import './style.css'

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-content">
        <div className="infos">
          <div className="info"><img src={logo} alt="logo-da-loja" /></div>
          <div className="info">
            <h1>Endereço</h1>
            <p>Av. Atlântica, 2500 - loja 14 - Cavaleiros, Macaé - RJ, 27920-390</p>
          </div>
          <div className="info">
            <h1>Contato</h1>
            <p>@solenevemacaecavaleiros</p>
            <p>(22) 99850-0647</p>
          </div>
          <div className="info">
            <h1>Horários</h1>
            <h3>Aberto todos os dias</h3>
            <p>11:30 - 22:00</p>
          </div>
        </div>
        <p className='dev-text'>Sol e Neve. Orgulhosamente desenvolvido por <a href="https://github.com/driwcoder" target='__blank'>@DriwCoder</a></p>
      </div>
    </div>
  )
}
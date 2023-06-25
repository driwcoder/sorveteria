
import sorvete from '../../../assets/img/picolezin+nobackground.png'
import './style.css'

export default function Banner() {
  return (
    <div className="Banner">
      <div className="Banner-content">
        <img src={sorvete} alt="picolé"  />
        <h1>Sorvete artesanal</h1>
      </div>
    </div>
  )
}
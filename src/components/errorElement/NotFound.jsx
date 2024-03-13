import "./notfound.css"
import astronaut from "./astronaut.svg"
import planet from "./planet.svg"
import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <>
    <div id="tsparticles"></div>
    <div className="denied__wrapper">
      <h1>404</h1>
      <h3>
        LOST IN <span>SPACE</span> App-Name? Hmm, looks like that page doesn't
        exist.
      </h3>
      <img id="astronaut" src={astronaut} />
      <img id="planet" src={planet} />
      <Link to='/'><button className="denied__link">Go Home</button></Link>
    </div>
    </>
  )
}

export default NotFound
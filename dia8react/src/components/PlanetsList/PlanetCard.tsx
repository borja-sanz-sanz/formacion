import { Link } from "react-router"
import { Planet } from "../../shared/types"

type PlanetCardProps =  {
    planet: Planet
}

export const PlanetCard = ({planet}: PlanetCardProps) => {
    return <div style={{marginBottom: '30px'}}>
        <img src={planet.image} width={100} />
        <h2>{planet.name}</h2>
        <Link to={`/planet/${planet.id}`}>Más información</Link>
    </div>
}
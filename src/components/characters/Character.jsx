import { Link } from "react-router-dom";
import './character.css'

export default function Character ({name, img, id}) {
    
    return (
        <article>
            <div className="img-container">
                <img src={img} alt='Img not found' />
            </div>
            <div className="text">
                <h3>{name}</h3>
                <Link to={`/characters/${id}`} >Más información</Link>
            </div>
        </article>
    )
}
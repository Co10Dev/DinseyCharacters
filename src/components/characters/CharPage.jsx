import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './char-page.css'

export default function CharPage () {
    const { id } = useParams()
    const [info, setInfo] = useState('nada')

    useEffect(() => {
        fetch(`https://api.disneyapi.dev/character/${id}`)
            .then(e => e.json())
            .then(e => {
                setInfo(e.data)
                console.log(e.data)
            })
    }, [])

    return(
        <main className="pg-3">
            <h1>{info.name}</h1>
            <div className="content">
                <img src={info.imageUrl} alt={`Personaje ${info.name}`} />
                {
                    (info !== 'nada') && (
                        <ul className="ul-1">
                            {(info.films.length !== 0) && (<li><span>Peliculas:</span> <ol>{info.films.map(e => <li key={e}> {e} </li>)}</ol></li>)}
                            {(info.shortFilms.length !== 0) && (<li><span>Cortos:</span> <ol>{info.shortFilms.map(e => <li key={e}> {e} </li>)}</ol></li>)}
                            {(info.tvShows.length !== 0) && (<li><span>TV Shows:</span> <ol>{info.tvShows.map(e => <li key={e}> {e} </li>)}</ol></li>)}
                            {(info.videoGames.length !== 0) && (<li><span>VideoJuegos:</span> <ol>{info.videoGames.map(e => <li key={e}> {e} </li>)}</ol></li>)}
                        </ul>
                    )
                }
            </div>
        </main>
    )
}
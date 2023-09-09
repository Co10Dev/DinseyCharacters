import { useEffect, useState } from "react"
import Character from "./Character"
import { useParams } from "react-router-dom"

export default function Page () {
    const [char, setChar] = useState([])
    const { page } = useParams()

    useEffect(() => {
        fetch(`http://api.disneyapi.dev/character?page=${page}&pageSize=50`)
            .then(req => req.json())
            .then(e => {
                console.log(e)
                setChar(e.data)
            })
            .catch(err => console.log(err))
    }, [page])

    if (char.length === 0) return <span>Cargando...</span>

    return (
        <section className='characters'>
            {
                char.map(character => {
                    return (<Character name={character.name} img={character.imageUrl} key={character._id} id={character._id}/>)
                })
            }
        </section>
    )
}
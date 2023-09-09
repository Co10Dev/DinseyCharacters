import { useEffect, useState } from 'react'
import './characters.css'
import { Outlet, useNavigate, useParams } from 'react-router-dom'

export default function Characters () {
    const { page } = useParams()
    const [pages, setPage] = useState(parseInt(page))
    const [totalPage, setTotalPage] = useState(0)
    const navigate = useNavigate()


    useEffect(() => {
        fetch(`http://api.disneyapi.dev/character?page=${pages}&pageSize=50`)
            .then(req => req.json())
            .then(e => {
                setTotalPage(e.info.totalPages)
            })
            .catch(err => console.log(err))
        navigate(`/characters/page/${pages}`)
    }, [pages])
    
    const rightClick = async () => {
        if (parseInt(pages) !== parseInt(totalPage)) {
            setPage(pages + 1)
        }
    }

    const leftClick = () => {
        if (pages > 1) {
            setPage(pages - 1)
        }
    }


    return (
        <main className="pg-2">
            <div>
                <h1>Peronajes</h1>
                <h2>De toda la historia de <strong>Disney</strong></h2>
            </div>
            <Outlet />
            <div className='div-arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='arrow-left arrows' onClick={leftClick}><g><path d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,12,20Z"/><polygon points="13.293 7.293 8.586 12 13.293 16.707 14.707 15.293 11.414 12 14.707 8.707 13.293 7.293"/></g></svg>
                <span className='number-page'>{pages}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='arrow-right arrows' onClick={rightClick}><g><path d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,12,20Z"/><polygon points="13.293 7.293 8.586 12 13.293 16.707 14.707 15.293 11.414 12 14.707 8.707 13.293 7.293"/></g></svg>
            </div>
        </main>
    )
}
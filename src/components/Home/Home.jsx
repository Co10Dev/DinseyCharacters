import {Link} from 'react-router-dom'
import './home.css'

export default function Home () {
    return (
        <main className='pg-1'>
            <section className='section-1 grid-center'>
                <div>
                    <h1>Mira los mejores personajes de Disney</h1>
                    <div className='btn btn-red'>
                        <Link to='/characters/page/1'>Ver Personajes</Link>
                    </div>
                </div>
                <div className='img-content'>
                    <img src="/public/Stich-bg.jpg" alt="Stich tocando ukelele" />
                </div>
            </section>
        </main>
    )
}
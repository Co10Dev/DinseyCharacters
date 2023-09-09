import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './components/App.jsx'
import Home from './components/Home/Home.jsx'
import Characters from './components/characters/Characters'
import CharPage from './components/characters/CharPage'
import Page from './components/characters/Page'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/characters' element={<App />}>
        <Route path='page' element={<Characters />}>
          <Route path=':page' element={<Page />} />
        </Route>
        <Route path=':id' element={<CharPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Error} from './routes/Error'
import { Home } from './routes/Home'
import { Cliente } from './routes/Cliente'

function App() {

  return (
    //Habilita a navegação por rotas na aplicação
    <BrowserRouter>
      <main>
        {/* Gerencia a exibição dos componentes com base na url */}
        <Routes>
          {/* Rota para lidar com as urls não encontradas */}
          <Route path='*' element={<Error/>}/>

          {/* Direciona para o Home */}
          <Route path='/' element={<Home/>}/>

          {/* Direciona para o Home */}
          <Route path='/cliente' element={<Cliente/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App

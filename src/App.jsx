import './App.css'
import './components/HeaderMain/header-main.estilos.css'
import './components/BannerMain/banner-main.estilos.css'
import './components/FormNewEvent/form-new-event.estilos.css'

import {FormNewEvent} from './components/FormNewEvent'
import {HeaderMain} from './components/HeaderMain'
import {BannerMain} from './components/BannerMain'

function App() {

  return (
    <>
    <main className="conteudo-principal">
      <HeaderMain className="conteudo-principal__cabecalho">
        <img src="/Logo.png" alt="" className="conteudo-principal__cabecalho-img" />
      </HeaderMain>
      <BannerMain className='conteudo-principal__banner'>
        <img src="/Hero image_L.png" alt="Banner principal da página" />
      </BannerMain>
      <FormNewEvent />
    </main>
    </>
  )
}

export default App

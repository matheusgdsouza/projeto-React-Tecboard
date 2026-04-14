import './App.css'
import './components/HeaderMain/header-main.estilos.css'
import './components/BannerMain/banner-main.estilos.css'
import './components/FormNewEvent/form-new-event.estilos.css'
import './components/SectionEvents/section-events.estilos.css'
import './components/TitleEvents/title-events.estilos.css'
import './components/Footer/footer.estilos.css'
import './components/FooterText/footer-text.estilos.css'

import { FormNewEvent } from './components/FormNewEvent'
import { HeaderMain } from './components/HeaderMain'
import { BannerMain } from './components/BannerMain'
import { SectionEvents } from './components/SectionEvents'
import { TitleEvents } from './components//TitleEvents'
import { Footer } from './components/Footer'
import { FooterText } from './components/FooterText'

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
        <SectionEvents className="section-events" id="section-events__front-end">
          <TitleEvents className="title-section-events">Front-end</TitleEvents>
        </SectionEvents>
        <SectionEvents className="section-events" id="section-events__back-end">
          <TitleEvents className="title-section-events">Back-end</TitleEvents>
        </SectionEvents>
        <SectionEvents className="section-events" id="section-events__devops">
          <TitleEvents className="title-section-events">Devops</TitleEvents>
        </SectionEvents>
        <SectionEvents className="section-events" id="section-events__inteligencia-artificial">
          <TitleEvents className="title-section-events">Inteligência artificial</TitleEvents>
        </SectionEvents>
        <SectionEvents className="section-events" id="section-events__data-science">
          <TitleEvents className="title-section-events">Data science</TitleEvents>
        </SectionEvents>
        <SectionEvents className="section-events" id="section-events__cloud">
          <TitleEvents className="title-section-events">Cloud</TitleEvents>
        </SectionEvents>
        <Footer className='footer'>
          <img src="/Logo.png" alt="" className="conteudo-principal__cabecalho-img" />
          <FooterText className='footer-text'>
            Projeto desenvolvido por Matheus Souza em parceria com Alura.
          </FooterText>
        </Footer>
      </main>
    </>
  )
}

export default App

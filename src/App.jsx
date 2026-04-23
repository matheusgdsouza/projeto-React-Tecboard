import './App.css'
import './components/HeaderMain/header-main.estilos.css'
import './components/BannerMain/banner-main.estilos.css'
import './components/FormNewEvent/form-new-event.estilos.css'
import './components/SectionEvents/section-events.estilos.css'
import './components/TitleEvents/title-events.estilos.css'
import './components/Footer/footer.estilos.css'
import './components/FooterText/footer-text.estilos.css'
import './components/CardEvento/card-evento.estilos.css'

import { FormNewEvent } from './components/FormNewEvent'
import { HeaderMain } from './components/HeaderMain'
import { BannerMain } from './components/BannerMain'
import { SectionEvents } from './components/SectionEvents'
import { TitleEvents } from './components//TitleEvents'
import { Footer } from './components/Footer'
import { FooterText } from './components/FooterText'
import { CardEvento } from './components/CardEvento'
import { useState } from 'react'

function App() {

  const temas = [
    {
      id: 1,
      nome: 'Front-end'
    },
    {
      id: 2,
      nome: 'Back-end'
    }, {
      id: 3,
      nome: 'Devops'
    }, {
      id: 4,
      nome: 'Inteligência artificial'
    }, {
      id: 5,
      nome: 'Data science'
    }, {
      id: 6,
      nome: 'Cloud'
    },
  ]


  const [eventos, setEventos] = useState([
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no front',
      descricao: 'Valorizando e impulsionando a participação feminina no desenvolvimento front-end.'
    },
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_2.png',
      tema: temas[1],
      data: new Date(),
      titulo: 'Homens na programação',
      descricao: 'Valorizando e impulsionando a participação feminina no desenvolvimento front-end.'
    }
  ])

  function adicionarEvento(evento) {
    setEventos([...eventos, evento])
  }

  return (
    <>
      <main className="conteudo-principal">
        <HeaderMain className="conteudo-principal__cabecalho">
          <img src="/Logo.png" alt="" className="conteudo-principal__cabecalho-img" />
        </HeaderMain>
        <BannerMain className='conteudo-principal__banner'>
          <img src="/Hero image_L.png" alt="Banner principal da página" />
        </BannerMain>
        <FormNewEvent temas={temas} submeterForm={adicionarEvento} />

        {temas.map(function (tema) {
          if(!eventos.some(function(evento) {
            return evento.tema.id == tema.id
          })) {
            return null
          }
          return (
            <SectionEvents className="section-events" key={tema.id}>
              <TitleEvents className="title-section-events">{tema.nome}</TitleEvents>

              <div className='container-cards'>
                {eventos.filter(function(evento) {
                  return evento.tema.id == tema.id
                })
                .map(function (evento, index) {
                  return (
                    <CardEvento evento={evento} key={index} />
                  )
                })}
              </div>
            </SectionEvents>
          )
        })}

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

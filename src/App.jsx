import './App.css'
import {FormNewEvent} from './components/FormNewEvent'


function App() {

  return (
    <>
    <main className="conteudo-principal">
      <header className="conteudo-principal__cabecalho">
        <img src="/Logo.png" alt="" className="conteudo-principal__cabecalho-img" />
      </header>
      <section className='conteudo-principal__banner'>
        <img src="/Hero image_L.png" alt="Banner principal da página" />
      </section>
      <FormNewEvent />
    </main>
    </>
  )
}

export default App

import './App.css'

function FormNewEvent() {
  return (
    <section className="conteudo-principal__section-formulario__nova-tarefa">
      <form action="" className="conteudo-principal__formulario-nova-tarefa">
        <h2 className="formulario-nova-tarefa__titulo">Preencha para criar um evento:</h2>
        <fieldset>
          <label htmlFor="input__nome-do-evento" className="label-novo-evento" id="label__nome-novo-evento">Qual o nome do evento?</label>
          <input type="text" id="input__nome-do-evento" className="input-novo-evento" placeholder='Summer dev hits' />
        </fieldset>
        <fieldset>
          <label htmlFor="input__data-evento" className="label-novo-evento" id="label__data-evento">Data do evento</label>
          <input type="text" id="input__data-evento" className="input-novo-evento" placeholder='XX/XX/XXXX' />
        </fieldset>
        <fieldset>
          <label htmlFor="input__tema-evento" className="label-novo-evento" id="label__tema-evento">Tema do evento</label>
          <input type="text" id="input__tema-evento" className="input-novo-evento" placeholder='Selecione uma opção' />
        </fieldset>

        <button className="formulario-nova-tarefa__button">Criar evento</button>
      </form>
    </section>
  )
}

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

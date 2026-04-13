
import './App.css'

function TituloForm(props) {
  return(
    <h2 {...props}>
      {props.children}
    </h2>
  )
}

function Fieldset(props) {
  return (
    <fieldset>
      {props.children}
    </fieldset>
  )
}

function LabelForm(props){
  return (
    <label {...props}>
      {props.children}
    </label>
  )
}

function InputForm(props){
  return (
    <input {...props}>
    </input>
  )
}

function ButtonNewEvent(props) {
  return (
    <button {...props}>
      {props.children}
    </button>
  )
}

function FormNewEvent() {
  return (
    <section className="conteudo-principal__section-formulario__nova-tarefa">
      <form action="" className="conteudo-principal__formulario-nova-tarefa">
        <TituloForm className="formulario-nova-tarefa__titulo">
          Preencha para criar um evento:
          </TituloForm>
        <Fieldset>
          <LabelForm htmlFor="input__nome-do-evento" className="label-novo-evento" id="label__nome-novo-evento">Qual o nome do evento?</LabelForm>
          <InputForm type="text" id="input__nome-do-evento" className="input-novo-evento" placeholder='Summer dev hits' />
        </Fieldset>
        <Fieldset>
          <LabelForm htmlFor="input__data-evento" className="label-novo-evento" id="label__data-evento">Data do evento</LabelForm>
          <InputForm type="date" id="input__data-evento" className="input-novo-evento" placeholder='XX/XX/XXXX' />
        </Fieldset>
        <Fieldset>
          <LabelForm htmlFor="input__tema-evento" className="label-novo-evento" id="label__tema-evento">Tema do evento</LabelForm>
          <InputForm type="text" id="input__tema-evento" className="input-novo-evento" placeholder='Selecione uma opção' />
        </Fieldset>

        <ButtonNewEvent className="formulario-nova-tarefa__button">Criar evento</ButtonNewEvent>
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

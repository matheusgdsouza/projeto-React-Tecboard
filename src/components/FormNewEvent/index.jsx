import '../ButtonNewEvent/button-new-event.estilos.css'
import '../Fieldset/fieldset.estilos.css'
import '../InputForm/input-form.estilos.css'
import '../LabelForm/label-form.estilos.css'
import '../TituloForm/titulo-form.estilos.css'

import { ButtonNewEvent } from "../ButtonNewEvent";
import { Fieldset } from "../Fieldset";
import { InputForm } from "../InputForm";
import { LabelForm } from "../LabelForm";
import { TituloForm } from "../TituloForm";
import { Select } from "../Select"
import { OptionSelect } from "../OptionSelect"


export function FormNewEvent() {
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
          <Select id="input__tema-evento" className="input-novo-evento">
            <OptionSelect value="selcione-opcao" disabled selected>Selecione uma opção</OptionSelect>
            <OptionSelect value="front-end">Front-end</OptionSelect>
            <OptionSelect value="back-end">Back-end</OptionSelect>
            <OptionSelect value="devops">DevOps</OptionSelect>
            <OptionSelect value="inteligencia-artificial">Inteligência artificial</OptionSelect>
            <OptionSelect value="data-science">Data science</OptionSelect>
            <OptionSelect value="cloud">Cloud</OptionSelect>
          </Select>
        </Fieldset>

        <ButtonNewEvent className="formulario-nova-tarefa__button">Criar evento</ButtonNewEvent>
      </form>
    </section>
  )
}
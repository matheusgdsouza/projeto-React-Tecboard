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
import { TextareaForm } from '../TextareaForm'


export function FormNewEvent({temas, submeterForm}) {

  function submeterFormulario(formData) {
    const evento = {
      capa: formData.get('capa-do-evento'),
      tema: temas.find( function(tema) {
        return tema.id = formData.get('tema-evento')
      }),
      data: new Date(formData.get('data-evento')),
      titulo: formData.get('nome-do-evento'),
      descricao: formData.get('descricao-evento')
    }

    submeterForm(evento)
  }
  
  return (
    <section className="conteudo-principal__section-formulario__nova-tarefa">
      <form action={submeterFormulario} className="conteudo-principal__formulario-nova-tarefa">
        <TituloForm className="formulario-nova-tarefa__titulo">
          Preencha para criar um evento:
        </TituloForm>
        <Fieldset>
          <LabelForm htmlFor="input__nome-do-evento" className="label-novo-evento" id="label__nome-novo-evento">Qual o nome do evento?</LabelForm>
          <InputForm type="text" id="input__nome-do-evento" name="nome-do-evento" className="input-novo-evento" placeholder='Summer dev hits' />
        </Fieldset>
        <Fieldset>
          <LabelForm htmlFor="input__capa-do-evento" className="label-novo-evento" id="label__capa-novo-evento">Qual é a URL da imagem de capa?</LabelForm>
          <InputForm type="text" id="input__capa-do-evento" name="capa-do-evento" className="input-novo-evento" placeholder='http://...' />
        </Fieldset>
        <Fieldset>
          <LabelForm htmlFor="input__data-evento" className="label-novo-evento" id="label__data-evento">Data do evento</LabelForm>
          <InputForm type="date" id="input__data-evento" name="data-evento" className="input-novo-evento" placeholder='XX/XX/XXXX' />
        </Fieldset>
        <Fieldset>
          <LabelForm htmlFor="input__descricao-evento" className="label-novo-evento" id="label__descricao-evento">Descrição do evento</LabelForm>
          <TextareaForm className="input-novo-evento" name='descricao-evento'></TextareaForm>
        </Fieldset>
        <Fieldset>
          <LabelForm htmlFor="input__tema-evento" className="label-novo-evento" id="label__tema-evento">Tema do evento</LabelForm>
          <Select id="input__tema-evento" name="tema-evento" className="input-novo-evento">
            <OptionSelect value="selcione-opcao" disabled selected>Selecione uma opção</OptionSelect>
            {temas.map(function (tema) {
              return (
                <OptionSelect key={tema.id} value={tema.id}>{tema.nome}</OptionSelect>    
              )
            })}
          </Select>
        </Fieldset>

        <ButtonNewEvent className="formulario-nova-tarefa__button">Criar evento</ButtonNewEvent>
      </form>
    </section>
  )
}
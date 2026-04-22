import './textarea-form.estilos.css'

export function TextareaForm(props) {
    return(
        <textarea {...props}>
            {props.children}
        </textarea>
    )
}
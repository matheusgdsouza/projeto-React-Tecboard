export function LabelForm(props){
  return (
    <label {...props}>
      {props.children}
    </label>
  )
}
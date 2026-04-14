export function OptionSelect (props) {
    return (
        <option {...props}>
            {props.children}
        </option>
    )
}
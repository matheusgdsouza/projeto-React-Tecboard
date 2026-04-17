import { CardEvento } from "../CardEvento";

export function SectionEvents(props) {
    return (
        <section {...props}>
            {props.children}
        </section>
    )
}
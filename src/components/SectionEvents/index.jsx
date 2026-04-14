export function SectionEvents(props) {
    return (
        <section {...props}>
            <div>
                {props.children}
            </div>
        </section>
    )
}
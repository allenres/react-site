import './Section.css';
function Section({title, children}) {
    return (
        <section className="section" id={title}>
            <h2>{title}</h2>
            <div ClassName="section-content">
                {children}
            </div>
        </section>
    );
}
export default Section;

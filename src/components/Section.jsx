import './Section.css';

export default function Section({ title, children }) {
  return (
    <section className="section" id={title}>
      <h2>{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}

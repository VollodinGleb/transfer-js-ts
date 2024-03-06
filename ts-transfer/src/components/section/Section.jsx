export default function Section({ id, children }) {
  return (
    <section id={id}>
      <div className="container">{children}</div>
    </section>
  );
}

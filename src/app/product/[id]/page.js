export default function ProductPage({ params }) {
  const { id } = params;

  return (
    <section className="test">
      <h1 className="test-title">Cтраница: Товар "{id}"</h1>
    </section>
  );
}

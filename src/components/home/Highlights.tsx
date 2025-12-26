type HighlightsProps = {
  items: string[];
};

export function Highlights({ items }: HighlightsProps) {
  return (
    <section className="section section--muted" id="process">
      <div className="section__header">
        <p className="eyebrow">Why Warning Machines</p>
        <h2>Integrated Hardware Development Services</h2>
        <p className="section__lede">
          From initial concept validation to scalable production, our in-house capabilities and expert team transform your innovative ideas into high-quality physical products quickly and efficiently.
        </p>
      </div>
      <div className="pill-list">
        {items.map((item) => (
          <span key={item} className="pill">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}


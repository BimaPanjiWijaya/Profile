interface PageHeroProps {
  label: string;
  title: string;
  italic?: string;
  desc?: string;
}

export default function PageHero({ label, title, italic, desc }: PageHeroProps) {
  return (
    <section
      style={{
        padding: "72px 0 56px",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container">
        <p className="label anim-in" style={{ marginBottom: "20px" }}>
          {label}
        </p>
        <h1
          className="anim-up d1 section-title"
          style={{ marginBottom: desc ? "16px" : "0", maxWidth: "760px" }}
        >
          {title}
          {italic && (
            <>
              {" "}
              <em>{italic}</em>
            </>
          )}
        </h1>
        {desc && (
          <p
            className="anim-up d2"
            style={{
              fontSize: "16px",
              color: "var(--muted2)",
              lineHeight: 1.8,
              maxWidth: "520px",
              marginTop: "12px",
            }}
          >
            {desc}
          </p>
        )}
      </div>
    </section>
  );
}

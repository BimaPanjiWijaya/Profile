interface PageHeroProps {
  label: string;
  title: string;
  italic?: string;
  desc?: string;
}

export default function PageHero({
  label,
  title,
  italic,
  desc,
}: PageHeroProps) {
  return (
    <section
      style={{
        padding: "80px 0 64px",
        borderBottom: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* bg decoration */}
      <div
        style={{
          position: "absolute",
          top: "-40%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="container" style={{ position: "relative" }}>
        <p className="label anim-in" style={{ marginBottom: "24px" }}>
          {label}
        </p>
        <h1
          className="anim-up d1 section-title"
          style={{ marginBottom: desc ? "20px" : "0", maxWidth: "800px" }}
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
              fontFamily: "var(--sans)",
              fontSize: "17px",
              color: "var(--muted2)",
              lineHeight: 1.8,
              maxWidth: "540px",
              marginTop: "16px",
            }}
          >
            {desc}
          </p>
        )}
      </div>
    </section>
  );
}

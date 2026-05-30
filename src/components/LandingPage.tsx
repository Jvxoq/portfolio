import { Link, Mail, Globe, LucideIcon } from "lucide-react";
import { personal } from "../data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  GitHub: Globe,
  LinkedIn: Link,
};

export default function LandingPage() {
  return (
    <section className="page-section hero-section">
      <svg
        className="hero-bg-lines"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1={i * 180}
            y1="0"
            x2={i * 180 + 400}
            y2="800"
            stroke="var(--accent)"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="hero-content">
        <div className="fade-up" style={{ animationDelay: "0s" }}>
          <span className="hero-tag">Portfolio</span>
        </div>

        <h1 className="fade-up" style={{ animationDelay: "0.1s", fontSize: "clamp(3.5rem, 7vw, 6.5rem)" }}>
          {personal.name}
        </h1>

        <p
          className="fade-up"
          style={{
            fontSize: "1.1rem",
            color: "var(--text-primary)",
            animationDelay: "0.2s",
          }}
        >
          {personal.title}
        </p>

        <div
          className="fade-up"
          style={{
            width: 48,
            height: 2,
            background: "var(--accent)",
            animationDelay: "0.3s",
          }}
        />

        <p
          className="fade-up"
          style={{
            fontSize: "0.95rem",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            maxWidth: "38ch",
            animationDelay: "0.4s",
          }}
        >
          {personal.bio}
        </p>

        <div
          className="fade-up"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            animationDelay: "0.5s",
          }}
        >
          <span className="hero-meta">📍 {personal.location}</span>
          <a href={`mailto:${personal.email}`} className="hero-meta hero-email">
            ✉ {personal.email}
          </a>
        </div>

        <div
          className="fade-up"
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
            animationDelay: "0.6s",
          }}
        >
          {personal.links.map(({ label, url }) => {
            const Icon: LucideIcon = iconMap[label] ?? Mail;
            return (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link"
              >
                <Icon size={14} />
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Button({ text, link, secondary }) {
  return (
    <a 
      href={link} 
      className={`pill ${secondary ? "secondary" : ""}`}
      target={link.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      <span className="dot" />
      <span className="label">{text}</span>
    </a>
  );
}

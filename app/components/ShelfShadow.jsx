// app/components/ShelfShadow.jsx
/**
 * Декоративная тень под хедером. PNG (/shadow.png) с прозрачным фоном.
 * Не участвует в доступности, клики сквозь неё проходят.
 */
export default function ShelfShadow() {
  return (
    <div
      className="hero-shadow-wrap pointer-events-none"
      aria-hidden="true"
    >
      <img
        src="/shadow.png"
        alt=""
        className="hero-shadow"
        loading="lazy"
      />
    </div>
  );
}

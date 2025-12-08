// app/components/GlassCard.jsx
export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        glass 
        ${className}
      `}
    >
      {children}
    </div>
  );
}

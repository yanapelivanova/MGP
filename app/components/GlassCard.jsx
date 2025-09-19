// app/components/GlassCard.jsx
export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl p-6 bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

// app/components/Button.jsx
export default function Button({ as:Comp = "a", className = "", children, ...props }) {
  return (
    <Comp className={`glass-btn ${className}`} {...props}>
      {children}
    </Comp>
  );
}

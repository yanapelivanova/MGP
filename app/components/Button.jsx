// components/Button.jsx
export default function Button({ text, link, secondary }) {
  const baseClasses =
    "inline-flex items-center justify-center px-5 py-3 rounded-3xl font-sans font-medium transition duration-150";

  const stylePrimary =
    "neumorphic-btn text-[#555]";

  const styleSecondary =
    "neumorphic-btn opacity-80";

  const classes = `${baseClasses} ${secondary ? styleSecondary : stylePrimary}`;

  const isExternal = link.startsWith("http");

  return (
    <a
      href={link}
      className={classes}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {text}
    </a>
  );
}

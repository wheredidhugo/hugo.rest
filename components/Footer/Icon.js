export default function FooterIcon({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="opacity-30 dark:opacity-20 hover:opacity-100 dark:hover:opacity-100 cursor-pointer"
    >
      {/* I don't know why I need a dark:hover:opacity-100 */}
      {icon}
    </a>
  );
}

export default function Icon({ icon, href }) {
  return (
    <li>
      <a href={href}>
        <img src={icon} alt="" />
      </a>
    </li>
  );
}

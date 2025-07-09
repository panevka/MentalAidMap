interface NavItem {
  label: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

interface Props {
  items?: NavItem[];
  navClassName?: string;
  ulClassName?: string;
  liClassName?: string;
  linkClassName?: string;
}

const defaultItems: NavItem[] = [
  { label: "Strona główna", href: "./" },
  { label: "Mapa placówek", href: "./mapa" },
  {
    label: "Baza wsparcia",
    href: "./support-resources",
  },
  {
    label: "Kontakt",
    href: "",
    onClick: () => {
      alert("Prace nad tą podstroną nadal trwają");
    },
  },
];

const Navigation: React.FC<Props> = ({
  items = defaultItems,
  navClassName = "",
  ulClassName = "",
  liClassName = "",
  linkClassName = "",
}) => {
  return (
    <nav className={navClassName}>
      <ul className={ulClassName}>
        {items.map((item, index) => (
          <li key={index} className={liClassName}>
            <a
              href={item.href || "#"}
              onClick={item.onClick}
              className={linkClassName}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navigation };

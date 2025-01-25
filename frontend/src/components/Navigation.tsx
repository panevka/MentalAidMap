
type NavItem = {
  label: string;
  href: string;
}

type NavProps = {
  items?: NavItem[];
  navClassName?: string;
  ulClassName?: string;
  liClassName?: string;
  linkClassName?: string;
}

const defaultItems: NavItem[] = [

  { label: "Strona główna", href: "" },
  { label: "Mapa placówek", href: "" },
  { label: "Baza wsparcia", href: "" },
  { label: "Kontakt", href: "" }
]

export const Navigation: React.FC<NavProps> = ({
  items = defaultItems,
  navClassName = '',
  ulClassName = '',
  liClassName = '',
  linkClassName = ''
}) => {

  return (
    <nav className={navClassName}>
      <ul className={ulClassName}>
        {items.map((item, index) => (
          <li key={index} className={liClassName}>
            <a href={item.href || '#'} className={linkClassName}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )

}

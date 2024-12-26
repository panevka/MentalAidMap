
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

  { label: "Infolinie wsparcia", href: "/infolinie" },
  { label: "Mapa placówek NFZ", href: "/mapa_placowek" },
  { label: "Mapa aptek", href: "/mapa_aptek" }
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

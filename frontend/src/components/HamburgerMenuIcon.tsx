type HamburgerMenuIconProps = {

  strokeWidth: number,
  strokeColor?: string,
  IconClassName?: string

}

export const HamburgerMenuIcon: React.FC<HamburgerMenuIconProps> = ({
  strokeWidth,
  strokeColor = "#000000",
  IconClassName = 'size-14'
}) => {


  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} className={IconClassName}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}

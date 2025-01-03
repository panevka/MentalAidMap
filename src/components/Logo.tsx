import React from 'react'
import logo from "../assets/logo-favicon.svg"

interface LogoProps {
	size?: 'xl' | 'xs' | '4xl' | 'lg';
	text?: boolean;
	icon?: boolean;
}

export const Logo = ({
	size = "xl",
	text = true,
	icon = true
}: LogoProps) => {
	return (
		<>
			{text && (<p className={`scroll-m-20 text-[#F16A70] font-montserrat tracking-tight text-${size}`} >
				przedsiebie.pl
				{icon && (<img className={"h-[1em] w-auto inline-block"} src={logo} alt="logo" />)}
			</p >)
			}

		</>
	)
}

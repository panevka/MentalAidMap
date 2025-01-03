import React from 'react'
import logo from "../assets/logo-favicon.svg"

interface LogoProps {
	className?: string
	text?: boolean;
	icon?: boolean;
	tag: keyof JSX.IntrinsicElements
}

export const Logo = ({
	className,
	text = true,
	icon = true,
	tag
}: LogoProps) => {
	const Tag = tag

	return (
		<>
			{text && (<Tag className={`scroll-m-20 text-[#F16A70] font-montserrat tracking-tight text-3xl text-nowrap ${className}`} >
				przedsiebie.pl
				{icon && (<img className={"h-[1em] w-auto inline-block"} src={logo} alt="logo" />)}
			</Tag>)
			}

		</>
	)
}

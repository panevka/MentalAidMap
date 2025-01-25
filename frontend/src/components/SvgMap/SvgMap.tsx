
type SvgMapProps = {
	className?: string
}

export default function SvgMap({
	className = "h-full w-full"
}: SvgMapProps) {
	return (
		<div id="map" className={className}></div>
	)
}



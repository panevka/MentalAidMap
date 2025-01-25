import React from "react";

type CrossIconProps = {
  strokeWidth: number;
  strokeColor?: string;
  CrossIconClassName?: string;
};

export const CrossIcon: React.FC<CrossIconProps> = ({
  strokeWidth,
  strokeColor = "#000000",
  CrossIconClassName = "size-14"
}) => {
  return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} className={CrossIconClassName} >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg >
  )
}


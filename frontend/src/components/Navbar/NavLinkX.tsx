import React from "react"
import { NavLink } from "react-router-dom";

type NavLinkXProps = {
  to: string,
  children: React.ReactElement | React.ReactNode | string,
  activeClassName: string
}

export default function NavLinkX(props : NavLinkXProps) {

  const activeClassName = (active: string) => {
    const outputFunction = ({ isActive } : {isActive : boolean}) => { 
      return isActive ? active : "";
    }
    return outputFunction;
  }

  return (
    <NavLink to={props.to} className={activeClassName(props.activeClassName)}>{props.children}</NavLink>
  )
}
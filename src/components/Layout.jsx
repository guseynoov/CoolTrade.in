import { Header } from "./Header"
import { NavMenu } from "./NavMenu"
import { Outlet } from "react-router-dom"
export const Layout = () => {
  return (
	 <>
	<Header/>
	<Outlet/>
	<NavMenu/>
	 </>
  )
}

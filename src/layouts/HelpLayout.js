import { NavLink,Outlet } from "react-router-dom"

 

export default function HelpLayout() {
  return (
    <div className="help-layout">
        <h2>Website help</h2>
        <p>Lorem ipsum doler sit</p>

    <nav>
        <NavLink to="faq">View the Faq</NavLink>
        <NavLink to="contact">Contact us</NavLink>
    </nav>

        <Outlet/>
    </div>
  )
}

import { Link, NavLink, useLocation} from "react-router-dom";
import { sidebarLinks } from "@/constants";
import { INavLink } from "@/types";

const LeftSidebar = () => {
    
    const { pathname } = useLocation();


  return (
    <nav className="leftsidebar">
        <div className="flex flex-col gap-11">
                <Link to="/" className="flex gap-3 items-center">
                    <h1 className="h3-bold md:h2-bold">ReVerb</h1>
                </Link>
            <ul className="flex flex-col gap-6">
                {sidebarLinks.map((link: INavLink) => {
                const isActive = pathname === link.route;

                return (
                    <li key={link.label} className=
                    {`leftsidebar-link group ${
                        isActive && "bg-primary-500"
                        }`}>
                        <NavLink
                        to={link.route}
                        className="flex gap-4 items-center p-4">
                        {link.label}
                        </NavLink>
                    </li>
                    );
                })}
            </ul>
        </div>
    </nav>
  )
}

export default LeftSidebar
import { NavLink, useLocation } from "react-router-dom";
import { dashboardSideBarTopMenus, dashboardSideBarBottomMenus } from "../../routes/Navigations";
import classNames from "classnames";



function SideBar() {
  const {pathname} = useLocation();

  return (
    <nav className="bg-backgroundDark w-full h-full flex flex-col gap-8 py-4 pl-4">
        <h3 className="text-white text-lg font-lato font-semibold tracking-wide uppercase">Lucky Ralph</h3>
        <menu className="flex-1 flex flex-col gap-4">
            {dashboardSideBarTopMenus.map(({title,link,icon},index)=>(
                <li key={index} >
                  <NavLink to={link} className={classNames(pathname == link ? "bg-bgBlue" : "transparent","text-white font-lato font-medium text-base flex items-center gap-2 hover:bg-bgBlue transition-all duration-300 pl-2 py-2 rounded-tl-lg rounded-bl-lg")}>
                      <span>{icon}</span>
                      {title}
                  </NavLink>
                </li>
            ))}
        </menu>
        <menu>
            {dashboardSideBarBottomMenus.map(({title,link,icon},index)=>(
                <li key={index} >
                  <NavLink to={link} className={classNames("text-yellowShine font-lato font-medium text-base flex items-center gap-2  pl-2 py-2 rounded-tl-lg rounded-bl-lg")}>
                      <span>{icon}</span>
                      {title}
                  </NavLink>
                </li>
            ))}
        </menu>
    </nav>
  )
}

export default SideBar
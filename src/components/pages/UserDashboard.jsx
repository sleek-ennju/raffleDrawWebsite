import { Outlet, NavLink, useParams } from "react-router-dom";
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";

function UserDashboard() {
  const { userId } = useParams();

  const dashboardMenus = [
    {
      title: "Dashboard",
      link: `/user/${userId}/home`,
      icon: <HomeIcon className="w-6 h-6 text-white" />, 
    },
    {
      title:"Profile",
      link: `/user/${userId}/profile`,
      icon: <UserIcon className="w-6 h-6 text-white" />, 
    }
  ];
  return (
    <section className="grid grid-cols-5 min-h-dvh relative border border-solid border-red-500">
      <nav className="bg-blackclr flex flex-col gap-8 py-4 pl-4 col-span-1  border border-solid border-red-500">
          <h3 className="text-white text-lg font-lato font-semibold tracking-wide uppercase">Lucky Ralph</h3>
          <menu className="flex flex-col gap-4">
            {dashboardMenus.map(({title,link,icon},index)=>(
              <li key={index} >
                <NavLink to={link} style={({isActive}) => ({backgroundColor: isActive ? "rgb(83,150,255)" : "transparent"})}  className="text-white font-lato font-medium text-base flex items-center gap-2 transition-all duration-300 pl-2 py-2 rounded-tl-lg rounded-bl-lg">
                  <span>{icon}</span>
                  {title}
                </NavLink>
              </li>
            ))}
          </menu>
      </nav>
      <div className="col-span-4 overflow-y-auto border border-solid border-red-500">
        <Outlet />
      </div>
    </section>
  )
}

export default UserDashboard
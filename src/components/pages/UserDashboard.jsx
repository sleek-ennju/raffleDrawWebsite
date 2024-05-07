import { Outlet } from "react-router-dom";
import SideBar from "../userDashboard/SideBar";

function UserDashboard() {
  

 
  return (
    <section className="flex h-dvh w-full relative ">
      <div className="w-[18dvw]">
        <SideBar />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </section>
  )
}

export default UserDashboard
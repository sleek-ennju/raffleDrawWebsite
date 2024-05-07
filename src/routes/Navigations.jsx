
import { HomeIcon, UserIcon, Cog6ToothIcon, ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";

const dashboardSideBarTopMenus = [
    {
      title: "Dashboard",
      link: `/user/1/home`,
      icon: <HomeIcon className="w-6 h-6 text-white" />, 
    },
    {
      title:"Profile",
      link: `/user/1/profile`,
      icon: <UserIcon className="w-6 h-6 text-white" />, 
    },
    {
      title: "Settings",
      link: `/user/1/settings`,
      icon: <Cog6ToothIcon className="w-6 h-6 text-white" />, 
    },
];
const dashboardSideBarBottomMenus = [
    
    {
      title: "Logout",
      link: `#`,
      icon: <ArrowLeftStartOnRectangleIcon className="w-6 h-6 text-yellowShine" />, 
    },
];

export {dashboardSideBarTopMenus, dashboardSideBarBottomMenus};
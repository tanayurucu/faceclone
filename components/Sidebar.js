import {useSession} from "next-auth/client"
import { BellIcon, ChatIcon, ChevronDownIcon,HomeIcon,ViewGridIcon,UserGroupIcon, UsersIcon,ShoppingBagIcon, DesktopComputerIcon, CalendarIcon, ClockIcon } from "@heroicons/react/solid";
import { FlagIcon, SearchIcon,PlayIcon,ShoppingCartIcon } from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";
import Image from "next/image";


function Sidebar() {
    const [session,loading]=useSession();
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]" >
                        <SidebarRow src={session.user.image} title={session.user.name} />
                        <SidebarRow Icon={UsersIcon} title="Friends" />
                        <SidebarRow Icon={UserGroupIcon} title="Groups" />
                        <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
                        <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
                        <SidebarRow Icon={CalendarIcon} title="events" />
                        <SidebarRow Icon={ClockIcon} title="Memories" />
                        <SidebarRow Icon={ChevronDownIcon} title="See More" />
            
        </div>
    )
}

export default Sidebar

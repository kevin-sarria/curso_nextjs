import Image from "next/image";
import Link from "next/link";
import { CiBookmarkCheck, CiLogout } from "react-icons/ci";
import { IoBaseballOutline, IoCheckboxOutline, IoCodeWorking, IoListOutline, IoPersonOutline } from "react-icons/io5";
import { LogoutButton, SidebarItem, UserInfo } from "@/components";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const linkItems = [
  {
    id: 1,
    label: 'Dashboard',
    href: '/dashboard',
    icon: <CiBookmarkCheck size={30} />
  },
  {
    id: 2,
    label: 'Rest TODOS',
    href: '/dashboard/rest-todos',
    icon: <IoCheckboxOutline size={30} />
  },
  {
    id: 3,
    label: 'Server Actions',
    href: '/dashboard/server-todos',
    icon: <IoListOutline size={30} />
  },
  {
    id: 4,
    label: 'Cookies',
    href: '/dashboard/cookies',
    icon: <IoCodeWorking size={30} />
  },
  {
    id: 5,
    label: 'Productos',
    href: '/dashboard/products',
    icon: <IoBaseballOutline size={30} />
  },
  {
    id: 6,
    label: 'Perfil',
    href: '/dashboard/profile',
    icon: <IoPersonOutline size={30} />
  }
]

export const Sidebar = async () => {
  
  const session = await getServerSession(authOptions)

  const nameUser = session?.user?.name ?? ""
  const emailUser = session?.user?.email ?? ""
  const imageUrl = session?.user?.image ?? ""

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r border-r-gray-300 bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          {/* TODO: Next/Link hacia dashboard */}
          <Link href="#" title="home">
            {/* Next/Image */}
            <Image
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
              className="w-32"
              alt="tailus logo"
              width={32}
              height={32}
            />
          </Link>
        </div>

        <UserInfo
          name={nameUser}
          email={emailUser}
          image={imageUrl}
        />

        <ul className="space-y-2 tracking-wide mt-8">
          {/* TODO: src/components <SidebarItem /> */}
          {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
          {
            linkItems.map( ({ id, href, label, icon }) => (
              <SidebarItem key={id} title={label} path={href} icon={icon} />
            ) )
          }
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t border-t-gray-300">
        <LogoutButton />
      </div>
    </aside>
  );
};

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  icon: React.ReactNode;
  path: string;
  title: string;
}

export const SidebarItem = ({ icon, path, title }: Props) => {
  const pathname = usePathname();

  const activeStyles = {
    link: "relative rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400",
    span: "-mr-1 font-medium",
  };

  return (
    <li>
      <Link
        href={path}
        className={`px-4 py-3 flex items-center space-x-4 ${
          path === pathname
            ? activeStyles.link
            : "rounded-md text-gray-600 group"
        }`}
      >
        {icon}
        <span
          className={`${
            path === pathname ? activeStyles.span : "group-hover:text-gray-700"
          }`}
        >
          {title}
        </span>
      </Link>
    </li>
  );
};

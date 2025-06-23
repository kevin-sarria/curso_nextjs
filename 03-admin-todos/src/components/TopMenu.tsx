import { cookies } from "next/headers";
import Link from "next/link";
import { CiBellOn, CiChat1, CiMenuBurger, CiSearch, CiShoppingBasket } from "react-icons/ci";

export const TopMenu = async() => {

  const cookieStore = await cookies()
  const cart = JSON.parse(cookieStore.get('cart')?.value ?? '{}')

  const getTotalCount = () => {
    let items = 0

    Object.values(cart).forEach( value => {
      items += value as number
    } )

    return items
  }

  return (
    <div className="w-full flex sticky z-10 top-0 h-16 border-b border-b-gray-300 bg-white lg:py-2.5">
      <div className="px-6 flex w-full items-center justify-between space-x-4">
        <h5 className="hidden text-2xl text-gray-600 font-medium lg:block">
          Dashboard
        </h5>

        <button className="w-12 h-16 -mr-2 border-r border-r-gray-300 lg:hidden">
          <CiMenuBurger size={30} />
        </button>

        <div className="flex space-x-2">
          <div className="hidden md:block">
            <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
              <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                <CiSearch />
              </span>
              <input
                type="search"
                name="leadingIcon"
                id="leadingIcon"
                placeholder="Search here"
                className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
              />
            </div>
          </div>

          <button className="flex items-center justify-center w-10 h-10 rounded-xl border border-gray-300 bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden hover:cursor-pointer">
            <CiSearch />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-xl border border-gray-300 bg-gray-100 focus:bg-gray-100 active:bg-gray-200 hover:cursor-pointer">
            <CiChat1 size={25} />
          </button>

          <Link href={'/dashboard/cart'} className="flex items-center justify-center p-2 h-10 rounded-xl border border-gray-300 bg-gray-100 focus:bg-gray-100 active:bg-gray-200 hover:cursor-pointer">
            <span className="text-sm mr-2 font-semibold">{getTotalCount()}</span>
            <CiShoppingBasket size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

import { useAppSelector } from "@/redux/hooks";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

interface propsType {
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setShowCart }: propsType) => {
  const cartCount = useAppSelector((state) => state.cartReducer.length);

  return (
    <div className="pt-4 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-4xl font-bold text-accent">Pai Library</h1>

          {/* Search Bar */}
          <div className="lg:flex hidden w-full max-w-[500px]">
            <input
              className="border-2 border-accent px-6 py-2 w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-pink"
              type="text"
              placeholder="Search for products..."
            />
            <div className="bg-accent hover:bg-pink text-white text-[26px] grid place-items-center px-4 cursor-pointer transition-colors">
              <BsSearch />
            </div>
          </div>

          {/* User & Cart */}
          <div className="flex gap-4 md:gap-8 items-center">
            {/* User Icon */}
            <div className="md:flex gap-3 hidden">
              <div className="rounded-full border-2 border-gray-600 text-gray-400 text-[32px] w-[50px] h-[50px] grid place-items-center hover:border-accent hover:text-white transition-colors">
                <AiOutlineUser />
              </div>
              <div>
                <p className="text-gray-400">Hello, Sign in</p>
                <a
                  className="font-medium text-accent hover:text-pink transition-colors"
                  href="/admin/dashboard"
                >
                  Login Admin
                </a>
              </div>
            </div>

            {/* Cart Icon */}
            <div
              className="text-gray-400 text-[32px] relative cursor-pointer hover:text-white transition-colors"
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShoppingCart />
              <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center">
                {cartCount}
              </div>
            </div>
          </div>
        </div>

        {/* Border Bottom */}
        <div className="border-b border-gray-700 pt-4" />
      </div>
    </div>
  );
};

export default Navbar;

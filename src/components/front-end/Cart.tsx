import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";
import { useAppSelector } from "@/redux/hooks";

const Cart = ({ setShowCart }: any) => {
  const products = useAppSelector((state) => state.cartReducer);

  const getTotal = () =>
    products.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-black/70 w-full min-h-screen fixed inset-0 z-50 flex items-center justify-end transition-opacity">
      {/* Sidebar Container */}
      <div className="max-w-[400px] w-full min-h-full bg-white relative shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out">
        {/* Close Button */}
        <RxCross1
          className="absolute right-4 top-4 text-2xl text-gray-600 cursor-pointer hover:text-red-500 transition"
          onClick={() => setShowCart(false)}
        />

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 uppercase border-b pb-4 pt-6 px-6">
          Your Cart
        </h3>

        {/* Product List */}
        <div className="mt-6 px-6 space-y-4 overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {products?.length > 0 ? (
            products.map((item: any) => (
              <CartProduct
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>

        {/* Total Section */}
        <div className="flex justify-between items-center font-semibold text-lg py-6 border-t px-6">
          <span>Total:</span>
          <span>${getTotal().toFixed(2)}</span>
        </div>

        {/* Buttons */}
        <div className="px-6 space-y-4 pb-6">
          <button className="w-full bg-accent text-white py-3 rounded-lg font-medium text-center hover:bg-accent/80 transition">
            View Cart
          </button>
          <button className="w-full bg-black text-white py-3 rounded-lg font-medium text-center hover:bg-gray-800 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

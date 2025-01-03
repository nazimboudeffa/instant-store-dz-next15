"use client";
import Link from 'next/link';
import CartTable from '@/components/CartTable';
import { useCart } from '@/context/CartContext';
import Delivery from '@/components/Delivery';
import Payment from '@/components/Payment';

function CartPage() {
  const { cartItems } = useCart();
  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="flex flex-col justify-center items-center my-20">
      {isCartEmpty ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <div className="max-w-sm mx-auto space-y-4 px-2">
            <Link href="/" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Continue Shopping
            </Link>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
          <CartTable />
          <Delivery />
          <Payment />
          <div className="max-w-sm mx-auto space-y-4 px-2">
            <Link href="#" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Pay Now
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
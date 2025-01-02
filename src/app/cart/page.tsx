"use client";
import Link from 'next/link'
import CartTable from '@/components/CartTable'
import { useCart } from '@/context/CartContext';

function CartPage() {
  const { cartItems } = useCart();

  return (
    <div className="flex flex-col justify-center items-center my-20">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <CartTable 
        cartItems={cartItems}
      />
      <div className="max-w-sm mx-auto space-y-4 px-2">
        <Link href="/checkout" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          CheckOut
        </Link>
      </div>
    </div>
  )
}

export default CartPage
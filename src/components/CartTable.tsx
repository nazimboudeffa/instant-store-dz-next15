import { useState, useEffect } from 'react'
import Link from 'next/link'
import Price from '@/components/Price'

interface ProductData {
    title: string;
    description: string;
    price: number;
}

interface CartTableProps {
    cartItems: ProductData[];
}

function CartTable({ cartItems }: Readonly<CartTableProps>) {
  const [localCartItems, setLocalCartItems] = useState<ProductData[]>([])
  const subtotal = 0

  useEffect(() => {
    setLocalCartItems(cartItems)
  }, [cartItems])

  if (localCartItems === undefined) {
    return null
  }

  if (localCartItems.length === 0) {
    return null
  }

  return (
    <div className="min-h-80 max-w-2xl my-4 sm:my-8 mx-auto w-full">
      <table className="mx-auto">
        <thead>
          <tr className="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
            <th className="font-primary font-normal px-6 py-4">Product</th>
            <th className="font-primary font-normal px-6 py-4">Quantity</th>
            <th className="font-primary font-normal px-6 py-4 hidden sm:table-cell">Price</th>
            <th className="font-primary font-normal px-6 py-4">Remove</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-palette-lighter">
          {localCartItems.map((item, index) => (
            <tr key={index} className="text-sm sm:text-base text-gray-600 text-center">
              <td className="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
                <Link passHref href="/" >
                  <div className="pt-1 hover:text-palette-dark">
                    {item.title}
                  </div>
                </Link>
              </td>
              <td className="font-primary font-medium px-4 sm:px-6 py-4">
                <input
                  type="number"
                  inputMode="numeric"
                  id="variant-quantity"
                  name="variant-quantity"
                  min="1"
                  step="1"
                  className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
                />
              </td>
              <td className="font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
                <Price
                  num={item.price}
                />
              </td>
              <td className="font-primary font-medium px-4 sm:px-6 py-4">
                <button
                  aria-label="delete-item"
                  className=""
                >
                    Remove
                </button>
              </td>
            </tr>
          ))}
          {
            subtotal === 0 ?
              null
              :
              <tr className="text-center">
                <td></td>
                <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">Subtotal</td>
                <td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                  <Price
                    num={subtotal}
                  />
                </td>
                <td></td>
              </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default CartTable
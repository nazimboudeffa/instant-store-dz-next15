import Link from 'next/link'
import Price from '@/components/Price'
import { useCart } from '@/context/CartContext'
import { X } from 'lucide-react'

function CartTable() {
  const { cartItems, setCartItems } = useCart()

  const handleQuantityChange = (index: number, value: number) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = value;
    setCartItems(updatedItems);
  };

  if (cartItems === undefined) {
    return null
  }

  if (cartItems.length === 0) {
    return null
  }

  return (
    <div className="my-4 sm:my-8 mx-auto w-full">
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
          {cartItems.map((item, index) => (
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
                  value={String(item.quantity ?? 1)}
                  onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
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
                  className="text-palette-primary hover:text-palette-dark"
                  onClick={() => {
                    const updatedItems = [...cartItems];
                    updatedItems.splice(index, 1);
                    setCartItems(updatedItems);
                  }}
                >
                    <X size={24} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CartTable
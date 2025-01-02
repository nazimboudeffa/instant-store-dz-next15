"use client";
import ProductInfo from '@/components/ProductInfo'
import { useCart } from '@/context/CartContext';

interface ProductData {
  title: string;
  description: string;
  price: number;
}

function ProductDetails({ productData }: Readonly<{ productData: ProductData }>) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <ProductInfo 
        title={productData.title}
        description={productData.description}
        price={productData.price}
      />
      <button 
        onClick={() => addToCart(productData)} 
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductDetails
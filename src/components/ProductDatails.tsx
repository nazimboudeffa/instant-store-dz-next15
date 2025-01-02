import ProductInfo from '@/components/ProductInfo'

interface ProductData {
  title: string;
  description: string;
  price: number;
}

function ProductDetails({ productData }: Readonly<{ productData: ProductData }>) {
  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <ProductInfo 
        title={productData.title}
        description={productData.description}
        price={productData.price}
      />
    </div>
  )
}

export default ProductDetails
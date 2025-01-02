import Image, { StaticImageData } from 'next/image'

function ProductImage({ imageSrc }: { readonly imageSrc: StaticImageData }) {
  return (
    <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">
      <div className="relative h-96">
        <Image
          src={imageSrc}
          alt="product-image"
          layout="fill"
          className="transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  )
}

export default ProductImage
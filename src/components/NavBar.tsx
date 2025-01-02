import Link from 'next/link'
import { ShoppingBag } from 'lucide-react';

function NavBar() {
  return (
    <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
      <nav className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
        <Link href="/" passHref>
          <div className=" cursor-pointer">
            <h1 className="flex no-underline">
              <span className="text-xl font-primary font-bold tracking-tight pt-1">
                mini store
              </span>
            </h1>
          </div>
        </Link>
        <div>
          <Link
            href="/"
            passHref
          >
            <div className=" relative" aria-label="cart">
                <ShoppingBag size={24} />
            </div>
          </Link>
        </div>
      </nav>
    </header >
  )
}

export default NavBar
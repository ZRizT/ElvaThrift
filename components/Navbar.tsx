"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCart } from '../context/CartContext'
import { useState } from 'react'
import CartDrawer from './CartDrawer'

export default function Navbar() {
  const pathname = usePathname()
  const { cart } = useCart()
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-cream border-b border-sage-600">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-dark-brown">ElvaThrift</Link>
        <nav className="flex items-center gap-4">
          <Link href="/" className={pathname === '/' ? 'text-dark-brown font-semibold' : 'text-dark-brown/80'}>Home</Link>
          <Link href="/about" className={pathname === '/about' ? 'text-dark-brown font-semibold' : 'text-dark-brown/80'}>About</Link>
          <div className="relative">
            <button onClick={() => setOpen(true)} className="px-3 py-1 rounded bg-sage-600 text-cream">Cart</button>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-dark-brown text-cream text-xs px-2 rounded-full">{cart.length}</span>
            )}
          </div>
        </nav>
      </div>
      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  )
}

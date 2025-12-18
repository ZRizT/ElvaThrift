"use client"
import { ReactNode } from 'react'
import Navbar from './Navbar'
import { CartProvider } from '../context/CartContext'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function ClientPageWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <CartProvider>
      <Navbar />
      <main className="container py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </CartProvider>
  )
}

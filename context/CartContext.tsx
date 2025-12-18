"use client"
import React, { createContext, useContext, useState, useEffect } from 'react'

type Product = {
  id: string
  title: string
  price: number
  category: string
  image: string
}

type CartContextType = {
  cart: Product[]
  addItem: (p: Product) => void
  removeItem: (id: string) => void
  clearCart: () => void
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([])

  useEffect(() => {
    const raw = localStorage.getItem('elvathrift_cart')
    if (raw) setCart(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem('elvathrift_cart', JSON.stringify(cart))
  }, [cart])

  function addItem(p: Product) {
    setCart(prev => [...prev, p])
  }

  function removeItem(id: string) {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  function clearCart() {
    setCart([])
  }

  const total = cart.reduce((s, i) => s + (i.price || 0), 0)

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

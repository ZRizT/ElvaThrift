"use client"
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'

type Product = {
  id: string
  title: string
  price: number
  category: string
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <motion.article whileHover={{ scale: 1.02 }} className="bg-white rounded-lg overflow-hidden shadow">
      <div className="relative h-48">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-dark-brown">{product.title}</h4>
        <p className="text-sage-600 text-sm">{product.category}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-dark-brown font-medium">Rp {product.price.toLocaleString()}</div>
          <button onClick={() => addItem(product)} className="px-3 py-1 bg-sage-600 text-cream rounded">Tambah</button>
        </div>
      </div>
      <motion.div className="absolute top-3 right-3" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
      </motion.div>
    </motion.article>
  )
}

"use client"
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'

export default function CartDrawer({ open, onClose }: { open: boolean, onClose: () => void }) {
  const { cart, removeItem, clearCart, total } = useCart()

  function handleCheckout() {
    // Simulate a checkout process
    // In a real app you'd call a payments API here
    clearCart()
    onClose()
    alert('Checkout berhasil — terima kasih telah berbelanja di ElvaThrift!')
  }

  return (
    <motion.aside
      initial={{ x: '100%' }}
      animate={{ x: open ? 0 : '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 h-full w-full sm:w-96 bg-cream border-l border-sage-600 shadow-lg z-50"
      style={{ display: open ? 'block' : 'none' }}
    >
      <div className="p-4 flex items-center justify-between border-b border-sage-600">
        <h3 className="text-lg font-semibold">Keranjang</h3>
        <button onClick={onClose} className="text-sage-600">Tutup</button>
      </div>

      <div className="p-4 overflow-y-auto h-[calc(100%-160px)]">
        {cart.length === 0 && <p className="text-sage-600">Keranjang kosong.</p>}
        <ul className="space-y-4">
          {cart.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1">
                <div className="font-medium text-dark-brown">{item.title}</div>
                <div className="text-sage-600 text-sm">Rp {item.price.toLocaleString()}</div>
              </div>
              <button onClick={() => removeItem(item.id)} className="text-red-600">Hapus</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 border-t border-sage-600">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sage-600">Total</div>
          <div className="font-semibold text-dark-brown">Rp {total.toLocaleString()}</div>
        </div>
        <div className="flex gap-3">
          <button onClick={handleCheckout} disabled={cart.length === 0} className="flex-1 px-4 py-2 bg-dark-brown text-cream rounded disabled:opacity-60">Checkout</button>
          <button onClick={clearCart} disabled={cart.length === 0} className="px-4 py-2 border border-sage-600 rounded disabled:opacity-60">Bersihkan</button>
        </div>
      </div>
    </motion.aside>
  )
}

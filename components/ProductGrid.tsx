"use client"
import ProductCard from './ProductCard'

export default function ProductGrid({ products }: { products: any[] }) {
  if (products.length === 0) {
    return <p className="mt-6 text-sage-600">Tidak ada produk sesuai pencarian.</p>
  }

  return (
    <div className="mt-6 grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}

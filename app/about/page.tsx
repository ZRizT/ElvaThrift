import Image from 'next/image'

export default function About() {
  return (
    <section className="prose max-w-none">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-md">
          {/* Prefer JPG placed in /public/assets/muthia.jpg; fallback to SVG */}
          <picture>
            <source srcSet="/assets/muthia.jpg" type="image/jpeg" />
            <img src="/assets/muthia.svg" alt="Muthia" className="w-full h-full object-cover" />
          </picture>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Muthia Elvazira</h2>
          <p className="mt-1 text-sage-600">Mahasiswi Bisnis Digital Universitas Negeri Jakarta (UNJ)</p>
          <p className="mt-2">NIM: <strong>1710624029</strong></p>
          <p className="mt-4">Saya membangun ElvaThrift (Muvazira Preloved) sebagai marketplace kecil untuk mempromosikan moda preloved yang berkualitas dan berkelanjutan. Koleksi dipilih secara teliti dan dirawat agar estetik sekaligus ramah lingkungan.</p>
        </div>
      </div>

      <div className="mt-8">
        <h3>Credibility</h3>
        <ul>
          <li>Mahasiswa UNJ — Pengembangan produk digital dan e‑commerce</li>
          <li>Semangat sustainability dan circular fashion</li>
        </ul>
      </div>
    </section>
  )
}

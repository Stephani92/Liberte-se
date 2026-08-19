import React from 'react'

export default function Marquee() {
  return (
    <div className="overflow-hidden py-6">
      <div className="marquee whitespace-nowrap will-change-transform">
        <span className="mx-8 text-2xl font-serif">Liberte-se — </span>
        <span className="mx-8 text-2xl font-serif">Liberte-se — </span>
        <span className="mx-8 text-2xl font-serif">Liberte-se — </span>
        <span className="mx-8 text-2xl font-serif">Liberte-se — </span>
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-serif text-xl tracking-tight text-primary">Liberte-se</div>
        <nav className="space-x-6 hidden md:flex">
          <a className="text-sm text-foreground/80 hover:text-foreground">Início</a>
          <a className="text-sm text-foreground/80 hover:text-foreground">Sobre</a>
          <a className="text-sm text-foreground/80 hover:text-foreground">Evento</a>
        </nav>
      </div>
    </header>
  )
}

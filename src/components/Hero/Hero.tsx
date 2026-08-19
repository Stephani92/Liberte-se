import React from 'react'

export default function Hero() {
  return (
    <section className="pt-28 pb-16">
      <div className="container mx-auto px-6 grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl leading-tight font-display text-primary">Você não precisa empreender sozinha.</h1>
          <p className="mt-6 max-w-prose text-foreground/80">Conteúdo editorial e contexto para explicar a proposta — conteúdo a ser definido pela equipe editorial.</p>
        </div>

        <div className="aspect-[4/3] bg-contrast/10 rounded-sm overflow-hidden">
          <img alt="Editorial" src="/public/manifesto.webp" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}

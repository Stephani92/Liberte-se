import React from 'react'

export default function Pillars() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <div>
        <h3 className="font-semibold">Editorial</h3>
        <p className="text-foreground/80">Formato, voz e linha editorial — definir para consistência.</p>
      </div>
      <div>
        <h3 className="font-semibold">Comunidade</h3>
        <p className="text-foreground/80">Relações e suporte entre empreendedoras.</p>
      </div>
      <div>
        <h3 className="font-semibold">Eventos</h3>
        <p className="text-foreground/80">Experiências presenciais e híbridas alinhadas à marca.</p>
      </div>
    </div>
  )
}

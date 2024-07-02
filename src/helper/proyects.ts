interface Proyect{
  name:string
  img:string
  description:string
  tools:string[]
  link:string
}
export const proyects:Proyect[] = [
  {
    name:'Reproductor de música',
    img:'/musicPlayer_so.png',
    description:'¡Descubre el ritmo único de la banda estadounidense "The Strokes" con nuestro reproductor de música inspirado en Spotify!',
    tools:['/js.svg','/react.svg','/tailwind.svg'],
    link:'https://music-player-kappa-orcin.vercel.app/',
  },
  {
    name:'Eshop',
    img:'/eshop_so.png',
    description:'Tienda virtual que ofrece una experiencia de compras en línea, destacado por su carrito de compras funcional.',
    tools:['/js.svg','/react.svg','/tailwind.svg'],
    link:'https://eshop-isild4k1j-julios-projects-6144f1d2.vercel.app/',
  },
  {
    name:'YourBank',
    img:'/yourBank_so.png',
    description:'Página web moderna y responsiva basada en un diseño detallado creado en Figma. La página está optimizada para un rendimiento rápido y una experiencia de usuario fluida.',
    tools:['/js.svg','/astro.svg','/preact.svg','/tailwind.svg'],
    link:'https://your-bank-pink.vercel.app/',
  }
]
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
    link:'https://eshop-red.vercel.app/',
  },
  {
    name:'Rick and Morty API',
    img:'/RyM_so.png',
    description:'Con una interfaz elegante y fácil de usar, encontrarás todo lo que necesitas para satisfacer tu curiosidad sobre este universo tan querido. Consumo de API de Rick and morty usando AXIOS.',
    tools:['/js.svg','/react.svg','/tailwind.svg'],
    link:'https://r-mv2.vercel.app/1',
  },
  {
    name:'ToDo',
    img:'/todo_so.png',
    description:'Imagina un mundo donde cada tarea tiene su lugar, donde puedes priorizar tus responsabilidades con solo un par de toques en la pantalla. Con nuestra aplicación, ese mundo es una realidad.',
    tools:['/ts.svg','/react.svg','/tailwind.svg'],
    link:'https://todo-bzlyokbrq-julios-projects-6144f1d2.vercel.app/',
  },

]
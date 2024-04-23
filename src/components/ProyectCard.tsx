interface Props {
  name: string
  description: string
  img: string
  tools: string[]
  link: string
}
export const ProyectCard: React.FC<Props> = ({ name, description, img, tools, link }) => {
  return (
    <article onClick={() => { window.open(link, '_blank') }} className="relative grid tabletsm:grid-cols-2 border rounded-lg overflow-hidden hover:border-gray-400 transition-all group/item cursor-pointer">
      <div className="proyect-img relative overflow-hidden">
        <img className="w-full hover:scale-105 transition-all" width='400px' height='400px' src={img} alt={name} />
      </div>
      <div className="flex flex-col min-h-48 p-6">
        <h3 className="text-2xl font-bold text-blue-600">{name}</h3>
        <p className="text-wrap flex-1 text-grayMain mt-3 font-light">{description}</p>
        <div className="flex items-center">
          <span className="flex gap-2">{
            tools.map((tool,index)=>(
              <div key={index}>
                <img height='25px' width='25px' src={tool} alt={tool}/>
              </div>
            ))
          }</span>
          <div className="ms-auto bg-blue-600 text-white inline-flex p-2 rounded cursor-pointer hover:bg-blue-400 transition-all">
            <a target="_BLANK" href={link}>Visitar sitio</a>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 me-3 mt-3 opacity-0 scale-0 group/edit group-hover/item:opacity-100 group-hover/item:scale-100 transition-all">
        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5 19.5 4.5M8.25 4.5H19.5M19.5 4.5v11.25"></path></svg>
      </div>
    </article>
  )
}

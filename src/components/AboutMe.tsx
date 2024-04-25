import { motion } from "framer-motion"
export const AboutMe = () => {
  return (
    <section id="aboutMe" className="pt-4">
      <motion.div 
        className="max-w-screen-tablet mx-auto p-6 mobileLg:p-12"
        initial={{opacity:0,y:100}}
        whileInView={{opacity:1,y:0}}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}   
      >
        <h2 className="text-3xl font-light my-8">Sobre mí</h2>
        <main className="grid mobileLg:grid-cols-2 gap-3 mb-6">
          <div className="grid place-content-center py-8">
            <img width='250px' height='250px' src="/peep.png" alt="miFoto" />
          </div>
          <div className="flex items-center text-lg flex-col">
            <p className="text-graMain text-wrap leading-8 font-light">
              ¡Hola! Soy Julio, <span className="text-blue-700 font-bold">desarrollador frontend</span> con experiencia en la creación de aplicaciones web atractivas y funcionales. Mi enfoque se centra en el desarrollo de interfaces de usuario intuitivas y atractivas que brinden una experiencia óptima al usuario.
            </p>
            <span className="bg-grayMain rounded flex gap-2 p-2 mt-6 items-center">
              <img height='30px' width='30px' src='/html.svg' alt="htmlIcon" />
              <span className="text-white">|</span>
              <img height='30px' width='30px' src='/css.svg' alt="cssIcon" />
              <span className="text-white">|</span>
              <img height='30px' width='30px' src='/tailwind.svg' alt="tailwindIcon" />
              <span className="text-white">|</span>
              <img height='30px' width='30px' src='/js.svg' alt="jsIcon" />
            </span>
            <span className="bg-grayMain rounded flex gap-1 p-1.5 mt-6 items-center">
              <img height='30px' width='30px' src='/ts.svg' alt="tsIcon" />
              <span className="text-white">|</span>
              <img height='30px' width='30px' src='/react.svg' alt="reactIcon" />
              <span className="text-white">|</span>
              <img height='30px' width='30px' src='/node.svg' alt="nodeIcon" />
              <span className="text-white">|</span>
              <img height='30px' width='30px' src='/git.svg' alt="gitIcon" />
            </span>
          </div>
        </main>
      </motion.div>
    </section>
  )
}

import { motion } from "framer-motion"
import { Slider } from "./Slider"
export const AboutMe = () => {
  const icons = [
    'html', 'css', 'tailwind', 'js', 'ts', 'react', 'node', 'git','express','mysql'
  ]
  return (
    <section id="aboutMe" className="pt-4">
      <motion.div
        className="max-w-screen-tablet mx-auto p-6 mobileLg:p-12"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-light my-8">Sobre mí</h2>
        <main className="grid grid-cols-1 tabletsm:grid-cols-2 gap-3 mb-6">
          <div className="grid place-content-center py-8">
            <img width='250px' height='250px' src="/peep.png" alt="miFoto" />
          </div>
          <div className="flex items-center text-lg flex-col">
            <p className="text-graMain text-wrap leading-8 font-light">
              ¡Hola! Soy Julio, <span className="text-blue-700 font-bold">desarrollador Front-End</span> con experiencia en la creación de aplicaciones web atractivas y funcionales. Mi enfoque se centra en el desarrollo de interfaces de usuario intuitivas y atractivas que brinden una experiencia óptima al usuario.
            </p>
            <Slider imgs={icons}/>
          </div>
        </main>

      </motion.div>
    </section>
  )
}

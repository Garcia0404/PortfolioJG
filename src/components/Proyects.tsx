import { motion } from "framer-motion"
import { ProyectCard } from "."
import { proyects } from "../helper/proyects"
export const Proyects = () => {
  return (
    <section className="bg-white" id="proyects">
      <motion.div
        className="max-w-screen-tablet mx-auto p-6 mobileLg:p-12"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}

      >
        <h2 className="text-3xl font-light my-8">Proyects</h2>
        <main className="flex flex-col gap-6">
          {
            proyects.map((proyect, index) => (
              <ProyectCard key={index} name={proyect.name} img={proyect.img} description={proyect.description} tools={proyect.tools} link={proyect.link} />
            ))
          }
        </main>
      </motion.div>
    </section>
  )
}

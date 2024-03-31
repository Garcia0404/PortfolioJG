
export const AboutMe = () => {
  return (
    <section id="aboutMe">
      <div className="max-w-screen-tablet mx-auto p-6 mobileLg:p-12">
        <h2 className="text-3xl font-light my-8">Sobre mí</h2>
        <main className="grid mobileLg:grid-cols-2 gap-3 mb-6">
          <div className="grid place-content-center py-8">
            <img width='250px' height='250px' src="/peep.png" alt="miFoto" />
          </div>
          <div className="flex items-center text-lg">
            <p className="text-graMain text-wrap leading-8 font-light">
              ¡Hola! Soy Julio, <span className="text-blue-700 font-bold">desarrollador frontend</span> con experiencia en la creación de aplicaciones web atractivas y funcionales. Mi enfoque se centra en el desarrollo de interfaces de usuario intuitivas y atractivas que brinden una experiencia óptima al usuario.
            </p>
          </div>
        </main>
      </div>
    </section>
  )
}

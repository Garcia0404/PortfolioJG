export const Contact = () => {
  return (
    <section className="bg-white" id="contact">
      <div className="max-w-screen-tablet mx-auto p-6 mobileLg:p-12 text-3xl flex gap-4 flex-col">
        <main>
          <h2 className="font-light my-8">Contacto</h2>
          <div className="bg-white mb-4 mt-8 text-sm">
            {/*Formulario----------------------------------------------*/}
            <form className="w-full" action="https://formsubmit.co/julioxenrique@gmail.com" method="POST">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                    Nombre
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input required className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="name" type="text" placeholder="Julio García" />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                    Correo
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input required className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="email" type="email" placeholder="example@gmail.com" />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="comments">
                    Mensaje
                  </label>
                </div>
                <div className="md:w-2/3">
                  <textarea required className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 h-32 resize-none" name="comments" placeholder="Escribe un mensaje" />
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                    Enviar
                  </button>
                </div>
              </div>
              <input type="hidden" name="_next" value='https://portfolio-jg-steel.vercel.app/' />
              <input type="hidden" name="_captcha" value='false' />
            </form>
          </div>
        </main>
      </div>
    </section>
  )
}

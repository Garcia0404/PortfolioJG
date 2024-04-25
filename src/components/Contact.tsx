import { ReactNode, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
type Inputs = {
  name: string
  email: string
  comments: string
}

export const Contact = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<Inputs>()
  const [loading, setLoading] = useState(false)
  const loader = (loading: boolean): ReactNode => {
    if (loading) {
      return (
        <button className="flex items-center justify-center py-3.5 px-5 rounded bg-purple-500 shadow" type="button">
          <div className="flex gap-1 animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </button>
      )
    } else {
      return (
        <button className="shadow bg-purple-600 hover:scale-110 active:scale-95 transition-all focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
          Enviar
        </button>
      )
    }
  }
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true)
    document.body.classList.add('cursor-wait');
    try {
      const response = await fetch("https://formsubmit.co/ajax/julioxenrique@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }
      setValue('name', '');
      setValue('email', '');
      setValue('comments', '');
      alert("Se envió el mensaje correctamente.");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setLoading(false)
      document.body.classList.remove('cursor-wait');
    }
  }

  return (
    <section className="bg-white pt-4" id="contact">
      <div className="max-w-screen-tablet mx-auto p-6 mobileLg:p-12 text-3xl flex gap-4 flex-col">
        <main>
          <h2 className="font-light my-8">Contacto</h2>
          <div className="bg-white mb-4 mt-8 text-sm">
            {/*Formulario----------------------------------------------*/}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full" action="https://formsubmit.co/julioxenrique@gmail.com" method="POST">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                    Nombre
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input {...register('name', {
                    required: true,
                    pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/,
                    minLength: 3,
                    maxLength: 50,
                  })} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    name="name"
                    type="text"
                    placeholder="Julio García" />
                  {errors.name?.type === 'required' && <span className="text-red-600">¡Ups! Olvidó llenar este campo</span>}
                  {errors.name?.type === 'pattern' && <span className="text-red-600">Ingrese su nombre</span>}
                  {errors.name?.type === 'minLength' && <span className="text-red-600">Debe ingresar como mínimo dos caracteres</span>}
                  {errors.name?.type === 'maxLength' && <span className="text-red-600">Máximo 40 caracteres</span>}
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                    Correo
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input {...register('email', {
                    required: true,
                    pattern: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    maxLength: 50,
                  })} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    name="email"
                    type="email"
                    placeholder="example@gmail.com" />
                  {errors.email?.type === 'required' && <span className="text-red-600">¡Ups! Olvidó llenar este campo</span>}
                  {errors.email?.type === 'pattern' && <span className="text-red-600">Escriba un correo válido</span>}
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="comments">
                    Mensaje
                  </label>
                </div>
                <div className="md:w-2/3">
                  <textarea {...register('comments', {
                    required: true,
                    minLength: 4,
                    maxLength: 1500
                  })} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 h-32 resize-none"
                    name="comments"
                    placeholder="Escribe un mensaje" />
                  {errors.comments?.type === 'required' && <span className="text-red-600">¡Ups! Olvidó escribir un mensaje</span>}
                  {errors.comments?.type === 'minLength' && <span className="text-red-600">Su mensaje debe contener al menos 4 caracteres</span>}
                  {errors.comments?.type === 'maxLength' && <span className="text-red-600">El mensaje puede tener como máximo 1500 caracteres</span>}

                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  {loader(loading)}
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  )
}

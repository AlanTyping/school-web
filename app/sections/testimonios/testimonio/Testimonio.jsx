
export const Testimonio = ({ nombre, texto }) => {
  return (
    <div className='flex flex-col items-center justify-center text-white bg-blue-600 rounded'>
      <div className="w-[95vw] md:w-[40vw] flex text-start pt-5 px-10 text-[1.3rem]">
        <h2>{nombre}</h2>
      </div>
      <div className="w-[95vw] md:w-[40vw] flex-center p-14 px-10 pt-6">
        <p>{texto}</p>
      </div>
    </div>
  )
}

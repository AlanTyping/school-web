
export const Testimonio = ({ nombre, texto }) => {
  return (
    <div className='flex flex-col items-center justify-center text-white bg-blue-600'>
      <div className="w-[85vw] md:w-[40vw] flex text-start pt-5 2xl:pt-10 px-10 text-[1.3rem] 2xl:text-[1.8rem]">
        <h2>{nombre}</h2>
      </div>
      <div className="w-[85vw] md:w-[40vw] flex-center p-14 px-10 2xl:px-16 pt-10 pb-16 2xl:pb-20">
        <p>{texto}</p>
      </div>
    </div>
  )
}

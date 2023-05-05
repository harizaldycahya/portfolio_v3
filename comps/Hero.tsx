export default function Hero() {
 
  return (
    <>
      <div className='hero overflow-hidden absolute self-center justify-self-center w-10/12 h-5/6 bg-slate-600'>
        <nav className="grid grid-cols-12">
          <div className=" col-span-1 h-12 bg-black"></div>
          <div className=" col-span-11 bg-slate-100"></div>
        </nav>
        <div className=" self-center grid grid-cols-12 h-full bg-blue-300">
        </div>
      </div>
    </>
  )
}

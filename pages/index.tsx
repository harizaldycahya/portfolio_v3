import Head from 'next/head'
import { useEffect, useState,useCallback } from "react"


export default function Home() {
  // const container = document.getElementById("container")
  const [count, setCount] = useState(0);
  
  switch (true) {
    case (count < 10 ):
      
      break;
    case (count < 20 ):
      
      break;
    case (count < 30 ):
      
      break;
  
    default:
      break;
  }
  const [active, setActive] = useState(false);
  const test = <div className='absolute self-center justify-self-center w-10/12 h-5/6 bg-slate-500'></div>;
  const test2 = <div className='absolute bottom-full self-center justify-self-center w-10/12 h-5/6 bg-slate-600'></div>;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="./fontawesome/css/fontawesome.css" rel="stylesheet"/>
        <link href="./fontawesome/css/brands.css" rel="stylesheet"/>
        <link href="./fontawesome/css/solid.css" rel="stylesheet"/>
      </Head>
      <div className='fixed w-100 h-100 bg-green-500 z-10'>
        {count} 
      </div>
      
      <div onWheel={ event => {
              if (event.nativeEvent.deltaY > 0 && count < 100) {
                    setCount(count + 1)
              } else if(event.nativeEvent.deltaY < 0 && count > 0){
                setCount(count - 1)
              }
            }}  
            id='container' className="overflow-x-hidden grid h-screen w-screen bg-slate-300">
          
          <div className="fixed z-50 self-center right-5 w-1 bg-gray-200 rounded-full h-4/5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{["height" as any]: count+"%"}}></div>
          </div>
          
          
      </div>
    </>
  )
}

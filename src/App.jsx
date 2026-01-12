import { useState, useEffect } from 'react'
import m1 from './assets/M1.svg'
import m2 from './assets/M2.svg'
import m3 from './assets/M3.svg'
import { Link } from 'react-router'

function App() {
   const [percentage, setHeight] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Example: max height is 100vh, min is 50px
      const newHeight = Math.min(200, scrollY/7 ); // Adjust formula as needed
      console.log(scrollY, newHeight);
      setHeight(newHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
        <h1 className="text-3xl z-1 fixed top-[20vh] px-12">Taking in the View...</h1>
        <div className="top-[230vh] absolute w-full flex flex-col items-center">

          <div className="relative hover:mb-40 mb-[-4rem] h-40 w-full z-1 transition-all ease-in-out justify-center" style={{ filter: 'drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.4))' }}>
            <img src={m1} alt="M1" className=' mb-[-5px]'/>
            <div className="absolute px-2  w-full mx-auto mt-[-3rem]">
              <div className="flex w-full max-w-screen-lg flex-col mx-auto justify-center">
                <h2 className='text-xl'>Rationality</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin, urna vitae euismod pellentesque, sapien lectus porta risus, placerat vulputate elit ante eget ipsum. Aenean ac elementum tellus.  </p>
                <Link to="/rationality" className="underline mt-2">Follow this path...</Link>
              </div>
              </div>
            <div className="bg-base h-120"></div>
          </div>

          <div className=" hover:mb-40 mb-[-4rem] h-40 w-full drop-shadow-lg z-1 transition-all ease-in-out">
            <img src={m2} alt="M2" className=' mb-[-5px]'/>
            <div className="absolute px-2  w-full mx-auto mt-[-3rem]">
              <div className="flex w-full max-w-screen-lg flex-col mx-auto justify-center">
                <h2 className='text-xl'>Creativity</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin, urna vitae euismod pellentesque, sapien lectus porta risus, placerat vulputate elit ante eget ipsum. Aenean ac elementum tellus.  </p>
               <Link to="/creativity" className="underline mt-2">Follow this path...</Link>
              </div>
              </div>
            <div className="bg-mid h-120"></div>
          </div>

          <div className=" hover:mb-40 mb-[-4rem] h-40 w-full drop-shadow-lg z-1 text-white transition-all ease-in-out">
            <img src={m3} alt="M3" className=' mb-[-5px]'/>
            <div className="absolute px-2  w-full mx-auto mt-[-3rem] ">
              <div className="flex w-full max-w-screen-lg flex-col mx-auto justify-center">
                <h2 className='text-xl'>Nature</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin, urna vitae euismod pellentesque, sapien lectus porta risus, placerat vulputate elit ante eget ipsum. Aenean ac elementum tellus.  </p>
               <Link to="/nature" className="underline mt-2">Follow this path...</Link>
              </div>
              </div>
            <div className="bg-full h-120"></div>
          </div>
        </div>
       
        <div style={{ minHeight: '100vh' }}>
  {/* Your content */}
</div>
       <div className="">
         { Array.from({ length: 100 }).map((_, i )=>
         <div key={i} className="fixed top-0 border-l border-mid z-0"
          style={{ height: `${percentage-i}vh`, left: `${(i+1)*20}px` , opacity:`${percentage/300}`}}>
         
          </div>
               
               )}
         { Array.from({ length: 100 }).map((_, i )=>
         <div  key={i} className="fixed  left-0  border-t border-mid  z-0"
          style={{ width: `${percentage-i}vw`, top: `${(i+1)*20}px`, opacity:`${percentage/300}` }}>
         
          </div>
               
               )}
       </div>
    </>
  )
}

export default App

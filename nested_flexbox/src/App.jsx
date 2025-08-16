import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col min-h-screen border'> 
        <h1 className='text-2xl p-4 text-center font-bold bg-pink-300'>HEADER</h1>
        

        <div className='flex flex-1'>
          <h2 className=' w-1/4 p-4 bg-purple-300'>ASIDE</h2>
        

        <div className='flex flex-col flex-1'>
          <h2 className='p-4 bg-blue-200'>NAV</h2>
      
          <h2 className='p-4 flex-1 bg-green-200'>ARTICLE</h2>
        

      
          <h2 className='p-4 text-center font-bold bg-orange-200'>FOOTER</h2>

          </div>


        </div>



      </div>
    </>
  )
}

export default App

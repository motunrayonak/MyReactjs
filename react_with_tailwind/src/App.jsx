import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="flex justify-center items-center h-screen bg-gray-200">

        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-lg item-center m-4 border-4 border-blue-500 flex flex-col">

          <h1 className="text-3xl font-bold text-purple-700">
            RAODAT MOTUNRAYO ONAKOMAYA
            </h1>

          <h2 className="text-xl font-semibold text-orange-600 mt-2">
            SOFTWARE DEVELOPER
            </h2>

          <p className="text-base font-light font-serif text-base text-pink-500 mt-4">
            Passionate about creating beautiful,responsive,and user-friendly websites.
            I enjoy turning complex ideas into simple,elegant digital experiences that make an impact.
          </p>

        </div>
      </div>
    
  )
}

export default App

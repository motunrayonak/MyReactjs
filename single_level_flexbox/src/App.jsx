import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-black min-h-screen flex flex-col items-center p-8">
        <h1 className="text-orange-400 text-5xl font-extrabold mb-2">Products</h1>
        <p className="text-white mb-8">Affordable quality, every time</p>

        <div className="flex gap-6">
          <div className="border border-white p-6 w-64 text-center">
          <div className="w-20 h-20 bg-pink-500 rounded-full mx-auto mb-4"></div>
          <h2 className="text-white font-bold">Matte</h2>
          <div className="h-1 w-6 bg-white mx-auto my-2"></div>
          <p className="text-white text-sm mb-4">a subtle but elegant finish for low touch and delicate surfaces</p>
          <a href="#" className="text-blue-600 font-bold">Explore</a>
        </div>

        <div className="border border-white p-6 w-64 text-center">
          <div className="w-20 h-20 bg-pink-500 rounded-full mx-auto mb-4"></div>
          <h2 className="text-white font-bold">SEMI-GLOSS</h2>
          <div className="h-1 w-6 bg-white mx-auto my-2"></div>
          <p className="text-white text-sm mb-4">our signature finish for high-wear parts, details and surfaces</p>
          <a href ="#" className="text-blue-600 font-bold">Explore</a>
        </div>

        <div className="border border-white p-6 w-64 text-center">
          <div className="w-20 h-20 bg-pink-500 rounded-full mx-auto mb-4"></div>
          <h2 className="text-white font-bold">HIGH-GLOSS</h2>
          <div className="h-1 w-6 bg-white mx-auto my-2"></div>
          <p className="text-white text-sm mb-4">an eye-stopping shine best for metal and other smooth surfaces</p>
          <a href="#" className="text-blue-600 font-bold">Explore</a>
        </div>

        </div>

      </div>
    </>
  )
}

export default App

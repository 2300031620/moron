import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // list of image paths (from the public folder)
  const photos = [
    'b1.jpg',
    'b2.jpg',
    '/m1.jpg',
    '/m2.jpg',
    '/m3.jpg',
    '/m4.jpg'
  ]

  return (
    <>
      {/* Header logos */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      {/* Single custom image */}
      <div>
        <h2>Lord Harsha</h2>
        <img src="/harsha.jpg" alt="Harsha" width="300" />
      </div>

      {/* Photo gallery grid */}
      <h2>My Photo Gallery</h2>
      <div className="gallery">
        {photos.map((src, index) => (
          <img key={index} src={src} alt={`Photo ${index + 1}`} />
        ))}
      </div>

      {/* Counter Section */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

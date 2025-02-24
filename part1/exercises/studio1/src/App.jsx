/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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

export default App */

import { useState } from 'react'
import './App.css'
import RecipeIngredients from 'C:/Users/kaise/OneDrive/Desktop/LaunchCode/react-exercises-and-studios/part1/exercises/studio1/components/Description.jsx'
import RecipeDescription from 'C:/Users/kaise/OneDrive/Desktop/LaunchCode/react-exercises-and-studios/part1/exercises/studio1/components/Ingredients.jsx'
import RecipePhoto from 'C:/Users/kaise/OneDrive/Desktop/LaunchCode/react-exercises-and-studios/part1/exercises/studio1/components/Photos.jsx'

function App() {
  return (
    <div className="App">
    <div className="recipePhotoBlock">
    <RecipePhoto />
    
    <div className="recipePhotoBlock" >
       <RecipeDescription />
       <RecipeIngredients />
    </div>
 </div>
 </div>
  )
}

export default App
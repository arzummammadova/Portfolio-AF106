// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
//jsx nedir javascript xml file hem js hem html code qatrarair 
//gfragment yer saxlamir id class name vermek olmur 
// class ------className
//return icinde bir div yada bir fragment olmali
// function App() {
//   const [count, setCount] = useState(0)
// //html code
//   return (
//     <h1>salam</h1>
//     // <>
//     // {/* //fargment */}
//     //   <div>
//     //     <a href="https://vite.dev" target="_blank">
//     //       <img src={viteLogo} className="logo" alt="Vite logo" />
//     //     </a>
//     //     <a href="https://react.dev" target="_blank">
//     //       <img src={reactLogo} className="logo react" alt="React logo" />
//     //     </a>
//     //   </div>
//     //   <h1>Vite + React</h1>
//     //   <div className="card">
//     //     <button onClick={() => setCount((count) => count + 1)}>
//     //       count is {count}
//     //     </button>
//     //     <p>
//     //       Edit <code>src/App.jsx</code> and save to test HMR
//     //     </p>
//     //   </div>
//     //   <p className="read-the-docs">
//     //     Click on the Vite and React logos to learn more
//     //   </p>
//     // </>
//   )
// }


function App() {
  let age = 20;
  let name = "arzu";
  let user = {
    name: "Arzu", age: 20,
    name: "Amin", age: 18,
  }


  return (
    <>
      {/* <ul>

        {
          user.map((user, index) => {
            return <li key={index}>{user.name}</li>

          })
        }
      </ul> */}


      <h1>Welcome {name} {age}</h1>
      <p style={{ color: "red" }}>salam</p>
      {/* {
    age>18? <h1>Welcome</h1> : <h1>Access Denied</h1>
    
   } */}
      {
        <p>age</p>

      }
      {
        <h1>helloo</h1>
      }
      <p>age:{age}</p>

      <p style={{ color: "green" }}>name:{name}</p>


    </>
  )


}





export default App

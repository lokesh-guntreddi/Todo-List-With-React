import React from 'react'
import { Todo } from './components/Todo'
import { Quotes } from './components/Quotes'
import { Customhook } from './components/Customhook'
const Loki =()=>{
 return(
  <>
  <h1>loki</h1>
  </>
 )
}
function App() {
  return (
    <div>
      <Todo />
      {/* <Quotes />
       */}
       <Customhook />
    </div>
  )
}

export default App

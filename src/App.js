import React, { useEffect, useState } from "react"
import List from "./todo/list.js"
import Contexto from "./context.js"
import AddTodo from "./todo/add.js"
import Loader from "./loader.js"

const style = {
  h :{color: "pink"}
}



function App() {

  const [array, setArray] = React.useState([])

  const[loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=50')
      .then(response => response.json())
      .then(array => {
        setTimeout(() => {
        setArray(array)
        setLoading(false)
      },2000)
      })
  },[])

  function onChangeDo (id) {
    setArray(
      array.map(element => {
        if (id === element.id) {
          element.completed = !element.completed
        }
        return element
      })
    )
  }

  function remuveTodo(id) {
    setArray(array.filter((element) => element.id !== id))
    console.log("remuveTodo " + id)
  }

  function addTodo (value) {
      console.log(value)
      setArray(array.concat([{
        title: value,
        id: Date.now(),
        completed: false
      }]))
  }
  
  return (
    <Contexto.Provider value={{valueValue : remuveTodo}}>
    <div className="wrapper" >
      <h1 style={style.h}>Список дел</h1>
      <AddTodo onCreate={addTodo}/>
      {loading && <Loader/> }
      {array.length ? (
        <List array={array} onChange={onChangeDo} />
        ) : loading? null : (<p>not todos</p>
      )}
      
    </div></Contexto.Provider>
  )
}

export default App;

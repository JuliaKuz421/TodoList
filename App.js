import React from "react"
import List from "./todo/list.js"
import Contexto from "./context.js"
import AddTodo from "./todo/add.js"


const style = {
  h :{color: "pink"}
}



function App() {

  const [array, setArray] = React.useState([
    {number:1, name: "sport", complited :false},
    {number:2, name: "учёба",complited :false},
    {number:3, name: "встречи с друзьями",complited :false}
  ])

  function onChangeDo (id) {
    setArray(
      array.map(element => {
        if (id === element.number) {
          element.complited = !element.complited
        }
        return element
      })
    )
  }

  function remuveTodo(id) {
    setArray(array.filter((element) => element.number !== id))
    console.log("remuveTodo " + id)
  }

  function addTodo (value) {
      console.log(value)
      setArray(array.concat([{
        name: value,
        number: Date.now(),
        complited: false
      }]))
  }
  
  return (
    <Contexto.Provider value={{valueValue : remuveTodo}}>
    <div className="wrapper" >
      <h1 style={style.h}>Список дел</h1>
      <AddTodo onCreate={addTodo}/>
      {array.length ? (
        <List array={array} onChange={onChangeDo} />
        ) : (
        <p>not todos</p>
        )}
      
    </div></Contexto.Provider>
  )
}

export default App;

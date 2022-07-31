import React,{useState} from "react"
import PropTypes from "prop-types"

function AddTodo ({onCreate}) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()
        console.log(value)
        if(value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input value={value} placeholder={'покормить кота'} onChange={event => setValue(event.target.value)}/>
            <button type="submit">AddTodo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo
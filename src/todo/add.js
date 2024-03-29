import React,{useState} from "react"
import PropTypes from "prop-types"

function useInputValue(defaultvalue= '') {
    const [value, setValue] = useState(defaultvalue)

    return {
        bind: {
        value,
        onChange: event => setValue(event.target.value)
        },

        clear: () => setValue(''),

        value: () => value
    }
}


function AddTodo ({onCreate}) {
    const input = useInputValue('')
    

    function submitHandler(event) {
        event.preventDefault()

        if(input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input {...input.bind} placeholder={'покормить кота'}/>
            <button type="submit">AddTodo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo
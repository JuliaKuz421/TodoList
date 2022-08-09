import React from "react";
import PropTypes from 'prop-types'
import Context from "../context"

 
const style = {
    li: {
       display: 'flex',
       justifyContent: 'space-between',
       alignItems: 'center',
       padding: '.5rem 1rem',
       border: '1px solid #ccc',
       borderRadius: '8px',
       marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function Plan ({object, index, onChange}) {
    
    const {valueValue} = React.useContext(Context); 
   
    const classes =[]

    if (object.completed) {
        classes.push('done')
        console.log(object.id);
    }

    return (
        <li classtitle="list" style={style.li}>
            <span className={classes.join(" ")}>
            <input 
            style={style.input} 
            type="checkbox" 
            onChange={() => onChange(object.id) }/>

            <strong>{index + 1}</strong> &nbsp; {object.title}
            </span>
           
            <button className="rm" onClick={() => valueValue(object.id)}>&times;</button>
            
        </li>
    )
}


Plan.propTypes = {
    object: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Plan
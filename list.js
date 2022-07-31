import React from "react"
import PropTypes from 'prop-types'
import Plan from "./plan.js"

function list (props) {
  return ( 
    props.array.map(function (object, index) {
        return (<Plan object={object} key={object.number} index={index} onChange={props.onChange}/>)
    })
  )
}

list.propTypes = {
  array : PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired
}

export default list
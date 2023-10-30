import React from 'react'

const Input = ({label,input,onChange, value}) => {
  return (
    <>
    <label>{label}</label>
    <input onChange={onChange} value = {value} {...input} />
    </>
  )
}

export default Input
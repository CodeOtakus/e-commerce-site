import React from 'react'

export default function Button({name, onClick, type, customClass}) {
  return (
    <button className={`  ${customClass} button`} type={type} onClick={onClick}>
        {name}
    </button>
  )
}

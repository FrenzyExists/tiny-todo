import React, { useState } from 'react'

export default function Tag({removeTagFunction, color, text, id}) {

  const r = () => {
    console.log("REWEER")
    removeTagFunction(id)
  }
  return (
    <div className={`${color} tag`} key={id} >
        <span className="text-tag">{text}</span>
        <span onClick={r} className="close-tag">&times;</span>
    </div>
  )
}

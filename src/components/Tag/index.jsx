import React, { useState } from 'react'
import {v4} from 'uuid';

export default function Tag({removeTagFunction, color, text, id}) {
    const [tag, setTag] = useState({
        id: null,
        tagName: '',
        color: ''
    });

    /**
     * 
     * @param {React.MouseEvent<HTMLSpanElement, MouseEvent>} e 
     */
    const removeTag = (e) => {
        // if (e.) {
            removeTagFunction(id)
        
        
    }

  return (
    <div className={`${color} tag`} key={v4()} >
        <span className="text-tag">{text}</span>
        <span onClick={(e) => removeTag(e)} className="close-tag">&times;</span>
    </div>
  )
}

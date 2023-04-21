import React from 'react'

function Aside({title, img, links}) {
  return (
   <aside>
        <h3>{title}</h3>
        <hr></hr>
        <img scr={img} alt=""/>
        <ul>{links}</ul>
   </aside>
  )
}

export default Aside
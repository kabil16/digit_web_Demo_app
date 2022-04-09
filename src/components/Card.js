import React from 'react'
import './card.css'

const Card = ({image,did,disku}) => {
  // const Card = ({datat}) => {
  return (
    <>
    <div>
        <table>
          <thead>        
            <tr>
              <th>img</th>
              <th>id</th>
              <th>name</th>
            </tr>
           </thead>
           <tbody>
              <tr>
                <td><img src={image} alt="this is imag" className="img" /></td>
                <td>{did}</td>
                <td>{disku}</td>                
              </tr>
            </tbody>
          
        </table>
    </div>
    </>
  )
}

export default Card
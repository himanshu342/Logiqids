import React from 'react'
import {Link} from 'react-router-dom'
import Cast from './Cast'
import '../css/cast.css'
const CastFeed=(props)=>{
  const {casts}=props
return(
    <div>
    <div className='heading'>
        <span className='firstspan'/>
       <h1 className='head'><span className='secondspan'>Cast & Crew</span></h1>
       <span className='thirdspan'/>
 </div>
    <div className='container'>
      
    <div className='row'>
        <div> <Link to='/' className='btn btn-secondary' style={{marginTop:'10px'}}>Go Back</Link></div>
   
      {
            casts.map((castitem,i)=>(
                <Cast key={i} cast={castitem} />
            ))
      }
      
    </div>
    
</div>
</div>
)
}
export default CastFeed
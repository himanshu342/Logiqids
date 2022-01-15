import react from 'react'

import {Link} from 'react-router-dom'
const Movie=(props)=>{
    const {cast}=props
    //console.log(cast)
    const {character,person}=cast
    let url
    if(character.image)
    url=character.image.medium
    else 
    url=person.image.medium
   console.log(url)
   
   
    return (
     
      <div className='col-sm-4 col-md-3 col-lg-2 mt-4'>
         
     <div className="card" >
  <img className="card-img-top" src={url} />
  <div className="card-body">
    <h5 className="card-title">{person.name}</h5>
    <span className="card-text">{character.name}</span><br/>
   

  </div>
  </div>

  </div>
     
    )

}
export default Movie
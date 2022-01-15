import react from 'react'

import {Link} from 'react-router-dom'
const Movie=(props)=>{
    const {movie}=props
    //console.log(movie)
   let url=movie.image.medium
   //console.log(url)
   const id=movie.id
   
    return (
     
      <div className='col-md-3 mt-4'>
         <Link to='/castCrew' style={{ textDecoration: 'none',color:'black' }}
           state={{ id }}
         >
     <div className="card" >
  <img className="card-img-top" src={url} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{movie.name}</h5>
    <span className="card-text">{movie.genres.join()}</span><br/>
    <span>Rating : {movie.rating.average}</span>

  </div>
  </div>
  </Link>
  </div>
     
    )

}
export default Movie
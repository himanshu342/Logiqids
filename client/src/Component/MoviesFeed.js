import react from 'react'
import Movie from './Movie'
import {useNavigate} from 'react-router-dom'
const MoviesFeed=(props)=>{
    const {movies}=props
    // console.log(movies)
    // movies.map(movie =>{
    //     console.log(movie.title)
    // })
    
   
      return (
                <div className='container'>
                    <div className='row'>
                      {
                            movies.map((movieitem,i)=>(
                                <Movie key={i} movie={movieitem} />
                            ))
                      }
                      
                    </div>
                    
                </div>
         
                      
                  
      )
         
       
    
}

export default MoviesFeed
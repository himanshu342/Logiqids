import react,{ useEffect ,useState} from "react"
import axios from "axios"
import MoviesFeed from './MoviesFeed'
import Spinner from "./Spinner"

const Movies=(props)=>{

        
        const [movies,setmovies]=useState([])
    useEffect(()=>{
         let url='https://api.tvmaze.com/shows'

          axios.get(url).then(res=>{
                  console.log(res.data[0])
          
                     setmovies(res.data)
                  
                })
          .catch(err=>{
              console.log(err)
          })
    },[])
    let moviecontent
    if(movies.length>0){
       moviecontent=<MoviesFeed movies={movies} />
    }
    else{
        moviecontent=<Spinner />
    }
    
     

    return(
      <div>
         
      {moviecontent}

      </div>
    
        
    )
}
export default Movies


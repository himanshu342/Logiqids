import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import axios  from 'axios'
import Spinner from "./Spinner"
import CastFeed from './CastFeed'
const CastCrew=(props)=>{
   const location=useLocation()
   const {id} =location.state
    console.log(id)
    const [casts,setCast]=useState([])
 
    useEffect(()=>{
        let url=`https://api.tvmaze.com/shows/${id}/cast`

         axios.get(url).then(res=>{
                 console.log(res.data)
         
                    setCast(res.data)
                 
               })
         .catch(err=>{
             console.log(err)
         })
   },[])
    
   let castcontent
   if(casts.length>0){
      castcontent=<CastFeed casts={casts} />
   }
   else{
       castcontent=<Spinner />
   }
   

    return(

        <div>
         
      {castcontent}

      </div>
    )

}

export default CastCrew


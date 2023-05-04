import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { ordered, restocked } from './resourcesSlice'

const Resources = () => {

 const numOfResources = useSelector(state => state.resource.numOfResources)
 const dispatch = useDispatch()

  return (
    <div>
        <h2>Number of Resources - {numOfResources}</h2>
        <button onClick={()=> dispatch(ordered())}>Order Resource</button>
        <button onClick = {() => dispatch(restocked(2))}>Restock Resource</button>
    </div>
  )
}

export default Resources
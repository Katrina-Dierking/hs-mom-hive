import React, {useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { 
  ordered, 
  restocked, 
  reset, 
  incrementByAmount
} from './resourcesSlice'
import './resources.scss'



const Resources = () => {

 const numOfResources = useSelector(state => state.resource.numOfResources)
 const dispatch = useDispatch()

 const [incrementAmount, setIncrementAmount] = useState(0);
 const addValue = Number(incrementAmount) || 0;

 const resetAll = () => {
  setIncrementAmount(0)
  dispatch(reset());
 }

  return (
    <section className='resources'>
      <h2>Number of Resources - {numOfResources}</h2>
      <div>
        <button onClick={() => dispatch(ordered())}>Order Resource</button>
        <button onClick={() => dispatch(restocked(2))}>Restock Resource</button>
      </div>
      
      <div>
      <input
        type="text"
        placeholder='Add amount'
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add amount
        </button>
        <button onClick={resetAll}> Reset</button>
      </div>
    </section>
  );
}

export default Resources

import './App.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { Increment, Decrement, Loggedin } from './redux/actions/Actionperform';

function App() {
  const counter = useSelector(state=>state.counter)
  const loggedin = useSelector(state=>state.loggedin);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Redux Increment Decrement Counter </h1>
      <button className='button' onClick={()=>dispatch(Increment(5))}>Increment</button>
      <h1>{counter}</h1>
      <button className='button' onClick={()=>dispatch(Decrement())}>Decrement</button>
      <br />
      <h1 onClick={()=>dispatch(Loggedin())}>LOG IN</h1>
      {loggedin ?  "only show when logged in " : ""}
    </div>
  );
}

export default App;

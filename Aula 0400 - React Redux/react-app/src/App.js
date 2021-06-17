import { useDispatch, useSelector } from "react-redux";

function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Total: { state }</h1>
      <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>
        Incrementar
      </button>
    </div>
  );
}

export default App;

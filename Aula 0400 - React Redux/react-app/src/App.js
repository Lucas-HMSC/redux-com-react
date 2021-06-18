import { connect } from "react-redux";

const incrementar = () => ({ type: 'INCREMENTAR' });

function App({ contador, incrementar }) {
  return (
    <div>
      <h1>Total: { contador }</h1>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contador: state
  }
}

const mapDispatchToProps = {
  incrementar
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

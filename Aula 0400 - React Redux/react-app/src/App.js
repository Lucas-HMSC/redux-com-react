import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { somar } from './store/contador';
import { autoLogin, login } from './store/login';

function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  const { data } = useSelector(state => state.login.user);

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);


  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({username, password}));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block' }} htmlFor="username">
          Usuário
        </label>
        <input 
          id="username" 
          type="text" 
          value={username} 
          onChange={({ target }) => setUsername(target.value)}
        />
        <label style={{ display: 'block' }} htmlFor="password">
          Senha
        </label>
        <input 
          id="password" 
          type="password"  
          value={password} 
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Enviar</button>
      </form>
      <p>
        { data?.email }
      </p>
      <button onClick={() => dispatch(somar(5))}> 
        Somar
      </button>
    </div>
  );
}

export default App;
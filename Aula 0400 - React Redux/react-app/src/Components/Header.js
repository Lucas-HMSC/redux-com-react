import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../store/login';

import styles from './Header.module.css';

const Header = () => {
  const { user, token } = useSelector(state => state.login);
  const loading = token.loading || user.loading;
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Mini Dogs</h1>
      <button 
        className={`
          ${styles.login}
          ${loading && styles.loading}
          ${user.data && styles.loaded}
        `}
        onClick={() => dispatch(userLogout())}
        aria-label='Logout'
      ></button>
    </header>
  )
}

export default Header;

import React from 'react'
import { useSelector } from 'react-redux';
import Login from './Login';
import Photos from './Photos';
import Loading from './Helper/Loading';

const Content = () => {
  const { user, token } = useSelector(state => state.login);

  if (user.loading || token.loading)
    return <Loading /> 
  if (user.data)  
    return <Photos />
  else
    return <Login />
}

export default Content

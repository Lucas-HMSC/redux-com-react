import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from './store/photos';

const Photos = () => {
  const { data } = useSelector(state => state.photos);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  if (!data) return null; 
  return (
    <div>
      {
        data.map(photo => <li key={ photo.id }>{ photo.title }</li>)
      }
    </div>
  )
}

export default Photos

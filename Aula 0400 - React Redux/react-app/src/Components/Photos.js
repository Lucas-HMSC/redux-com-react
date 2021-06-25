import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../store/photos';
import PhotosContent from './PhotosContent';

const Photos = () => {
  const { data } = useSelector(state => state.photos);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhotos(1));
  }, [dispatch]);

  return (
    <section>
      { data && <PhotosContent />}
    </section>
  )
}

export default Photos;

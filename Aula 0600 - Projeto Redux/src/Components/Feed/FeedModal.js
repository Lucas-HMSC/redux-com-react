import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './FeedModal.module.css';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import { PHOTO_GET } from '../../Api';
import PhotoContent from '../Photo/PhotoContent';
import { fetchPhoto } from '../../store/photo';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { loading, error, data } = useSelector(state => state.photo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhoto(photo.id));
  }, [dispatch, photo.id]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
};

export default FeedModal;

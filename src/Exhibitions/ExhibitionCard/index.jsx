import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { storage } from '../../db';

export const ExhibitionCard = ({
  image,
  author,
  dateTo,
  dateFrom,
  place,
  id,
}) => {
  const [photoURL, setPhotoURL] = useState(undefined);

  useEffect(() => {
    storage
      .ref(image)
      .getDownloadURL()
      .then((url) => setPhotoURL(url));
  }, []);

  return (
    <div className="exhibitions__card">
      <img className="exhibitions__img" src={photoURL} alt="picture of artist"/>
      <Link className="exhibitions__artist" to={'exhibitions/' + id}>{author}</Link>
      <p className="exhibitions__date">{dateFrom.toLocaleDateString()} - {dateTo.toLocaleDateString()}</p>
      <p className="exhibitions__place">{place}</p>
    </div>
  );
};

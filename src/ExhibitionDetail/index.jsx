import React, { useEffect, useState } from 'react';
import { db } from '../db';
import { storage } from '../db';
import { Form } from '../Exhibitions/Form';
import './style.css';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

export const ExhibitionDetail = () => {
  const [reviews, setReview] = useState([]);
  const [exhibition, setExhibition] = useState(null);
  const [photos, setPhotos] = useState([]);

  let { idExhibition } = useParams();

  useEffect(() => {
    db.collection('exhibitions')
      .doc(idExhibition)
      .onSnapshot((snapshot) => {
        const exhibition = snapshot.data();
        setExhibition(exhibition);
        const promises = exhibition?.photos.map((photo) => {
          return storage.ref(photo).getDownloadURL();
        });
        Promise.all(promises).then((values) => {
          setPhotos(values);
        });
      });
  }, []);

  const images = photos?.map((photo) => {
    return {
      original: photo,
    };
  });

  useEffect(() => {
    db.collection('exhibitions')
      .doc(idExhibition)
      .collection('reviews')
      .orderBy('date')
      .onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => {});
        setReview(
          snapshot.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;
            return data;
          }),
        );
      });
  }, []);

  return exhibition ? (
    <section className="exhibition">
      <div className="exhibition__content">
        <div className="exhibition__item">
          <h2 className="exhibition__artist">{exhibition.author}</h2>
          <p className="exhibition__date">
            {exhibition.dateFrom.toDate().toLocaleDateString()} -{' '}
            {exhibition.dateTo.toDate().toLocaleDateString()}
          </p>
          <p className="exhibition__desc">{exhibition.text}</p>
          <p className="exhibition__desc">{exhibition.text1}</p>
        </div>
        <div className="exhibition__gallery">
          <ImageGallery
            items={images}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
          />
        </div>
      </div>
      <h3 className="exhibition__title">RECENZE</h3>
      <hr className="exhibition__divider" />
      <div className="exhibition__review">
        <div className="exhibition__review-card">
          {reviews.map((item) => (
            <div className="exhibition__messeage" key={item.id}>
              <p className="exhibition__text">{item.text}</p>
              <p className="exhibition__name">{item.name}</p>
              <p className="exhibition__dates">
                {item.date?.toDate().toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
        <div className="exhibition__review-form">
          <Form exhibitionId={idExhibition} />
        </div>
      </div>
    </section>
  ) : (
    ''
  );
};

import React, {useState, useEffect} from 'react';
import './style.css';
import { ExhibitionCard } from './ExhibitionCard';
import {db} from '../db';


export const Exhibitions = () => {
  const [exhibitions, setExhibitions] = useState([]);

  useEffect(() => {
    db.collection('exhibitions').onSnapshot((snapshot) => {
      setExhibitions(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        }),
      );
    });
  }, []);

  return (
    <section className="exhibitions">
      <h1>Výstavy</h1>
      <div className="exhibitions__content">
        {exhibitions.map((exhibition) => (
          <ExhibitionCard
            image={exhibition.photos[0]}
            author={exhibition.author}
            dateTo={exhibition.dateTo.toDate()}
            dateFrom={exhibition.dateFrom.toDate()}
            place={exhibition.place}
            id={exhibition.id}
            key={exhibition.id}
          />
        ))}
      </div>
    </section>
  );
};
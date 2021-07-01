import React, { useState } from 'react';
import { db } from '../../db';
import './style.css';

export const Form = ({ exhibitionId }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection('exhibitions').doc(exhibitionId).collection('reviews').add({
      name: name,
      text: text,
      date: new Date(),
    });
    setText('');
    setName('');
    setSent('');
  };

  return (
    <div className="comment">
      <h3 className="comment__title">Napiš recenzi:</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          type="text"
          rows="5"
          placeholder="Zadej recenzi"
        />
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="name"
          placeholder="Zadej jméno a příjmení"
        />
        <button className="comment__button">Přidat recenzi</button>
        <div
          style={{
            display: sent === false ? 'none' : 'block',
            fontSize: '18px',
            marginTop: '5px',
          }}
        >
          Děkujeme za recenzi.
        </div>
      </form>
    </div>
  );
};

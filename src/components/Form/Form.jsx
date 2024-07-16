import React from 'react';
import { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './index.css';
export const Form = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [subject, setSubject] = useState('physical');

  const { tg } = useTelegram();

  const callback = useCallback(() => {
    const data = {
      country,
      city,
      subject,
    };
    tg.sendData(data);
  });

  useEffect(() => {
    tg.WebApp.onEvent('mainButtonClicked', callback);
    return () => {
      tg.WebApp.offEvent('mainButtonClicked', callback);
    };
  }, []);
  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Send Data',
    });
  }, []);

  useEffect(() => {
    if (!city || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, city]);

  const onChangeCountry = e => {
    console.log(country);
    setCountry(e.target.value);
  };
  const onChangeCity = e => {
    console.log(city);
    setCity(e.target.value);
  };
  const onChangeSubject = e => {
    setSubject(e.target.value);
  };
  return (
    <div className='form'>
      <h3>Please Get the Form</h3>
      <input
        type='text'
        className='input'
        placeholder='Country'
        value={country}
        onChange={onChangeCountry}
      />
      <input
        type='text'
        className='input'
        placeholder='CIty'
        value={city}
        onChange={onChangeCity}
      />
      <select className='select' value={subject} onChange={onChangeSubject}>
        <option value='physical'>Physical</option>
        <option value='legal'>Legal</option>
      </select>
    </div>
  );
};

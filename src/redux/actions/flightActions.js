import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { options } from '../../constants';

// todo pending - fulfilled durumlarında slice'ı güncelle
export const getFlights = createAsyncThunk('flights/getFlights', async () => {
  // 1) API isteği at
  const res = await axios.request(options);

  // 2) Gelen veriyi formatla dizi içerisndeki dizileri nesnenlere çeviricez
  const fomatted = res.data.aircraft.map((item) => ({
    id: item[0],
    code: item[1],
    lat: item[2],
    lng: item[3],
  }));

  //3) aksiyonun payload'ı olarak formatlanna veriyi ekle
  return fomatted;
});

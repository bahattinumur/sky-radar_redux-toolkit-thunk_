import moment from 'moment/moment';

// Unix formatındaki veriyi normal formata çeviren fonksiyon
const formatDate = (unix_time) => {
  // Unix fomatındaki saniye verisini date ile kullanibilmek için 1000 ile çarpıp milisaniyeye çevirdik
  const date = new Date(unix_time * 1000);

  // Tarihi moment ile formatlıyoruz
  return moment(date).calendar();
};

export default formatDate;

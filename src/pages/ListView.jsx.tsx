import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

const ListView = ({ setDetailId }) => {
  const flightState = useSelector((store) => store.flightReducer);

  // Gösterilcek ilk elemanın state'i
  const [itemOffset, setItemOffset] = useState(0);

  // Sayfa başına gösterlicek eleman sayısı
  const itemsPerPage = 10;

  // Son gösterilecek elemanı belirler
  const endOffset = itemOffset + itemsPerPage;

  // Belirlenen aralıktaki elemanları alır
  const currentItems = flightState.flights.slice(itemOffset, endOffset);

  // Maximum sayfa sayısını belirle
  const pageCount = Math.ceil(flightState.flights.length / itemsPerPage);

  // Her yeni sayfa seçildiğinde çalışır
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % flightState.flights.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="p-4">
      <table className="table table-dark table-striped table-hover table-responsive mt-5">
        <thead>
          <tr>
            <th>id</th>
            <th>Tail Code</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.slice(0, 10).map((i) => (
            <tr>
              <td>{i.id}</td>
              <td>{i.code}</td>
              <td>{i.lat}</td>
              <td>{i.lng}</td>
              <td>
                <button onClick={() => setDetailId(i.id)}>Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        className="pagination"
        previousLabel="< Next"
        nextLabel="Previous >"
      />
    </div>
  );
};

export default ListView;

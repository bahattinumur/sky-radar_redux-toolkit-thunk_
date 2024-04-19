import { useSelector } from "react-redux";

const Header = () => {
  const flightState = useSelector((store) => store.flightReducer);

  return (
    <header>
      <div>
        <img src="/plane-logo.png" />
        <h3>Sky Radar</h3>
      </div>

      <p>
        {flightState.isLoading
          ? "Flights Searching..."
          : flightState.isError
          ? "Sorry, an error occurred "
          : flightState.flights.length + " Flight Found          "}
      </p>
    </header>
  );
};

export default Header;

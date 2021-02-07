export const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div p={3}>{children}</div>}
    </div>
  );
};

export const FlightDetail = ({
  className,
  callsign,
  icao24,
  firstSeen,
  lastSeen,
  estDepartureAirport,
  estArrivalAirport,
}) => {
  return (
    <div className={className}>
      <span>Callsign: {callsign}</span>
      <br />
      <span>Address of the transponder (icao24): {icao24}</span>
      <br />
      <span>
        Est. time of arrival:{" "}
        {new Date(lastSeen * 1000).toLocaleString("en-GB", {
          dateStyle: "full",
          timeStyle: "long",
        })}
      </span>
      <br />
      <span>
        Est. time of departure:{" "}
        {new Date(firstSeen * 1000).toLocaleString("en-GB", {
          dateStyle: "full",
          timeStyle: "long",
        })}
      </span>
      <br />
      <span>Arrival airport: {estArrivalAirport}</span>
      <br />
      <span>Departure airport: {estDepartureAirport}</span>
    </div>
  );
};

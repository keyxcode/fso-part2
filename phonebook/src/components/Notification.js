const Notification = ({ msg, notiIsError }) => {
  const notiStyle = {
    color: "green",
    backgroundColor: "lightGrey",
    border: "5px solid green",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  };

  const errorStyle = {
    color: "red",
    backgroundColor: "lightGrey",
    border: "5px solid red",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  };

  if (msg === null) return null;

  return <div style={notiIsError ? errorStyle : notiStyle}>{msg}</div>;
};

export default Notification;

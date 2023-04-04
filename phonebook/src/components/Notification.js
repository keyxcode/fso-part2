const Notification = ({ msg }) => {
  const notiStyle = {
    color: "green",
    backgroundColor: "lightGrey",
    border: "5px solid green",
    borderRadius: 5,
    padding: 10,
  };

  if (msg === null) return null;

  return <div style={notiStyle}>{msg}</div>;
};

export default Notification;

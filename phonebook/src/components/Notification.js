const Notification = ({ msg }) => {
  if (msg === null) return null;

  return <div>{msg}</div>;
};

export default Notification;

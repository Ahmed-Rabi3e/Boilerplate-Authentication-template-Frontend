const Card = ({ className, style, children }) => {
  return (
    <div
      className={`m-0 shadow-md rounded-lg p-4 overflow-hidden bg-white ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;

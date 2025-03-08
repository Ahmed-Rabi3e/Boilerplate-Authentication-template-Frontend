const Avatar = ({ className, style, image, alt, width }) => {
  return (
    <div
      className={`flex justify-center items-center ${className}`}
      style={style}
    >
      <img
        src={image}
        alt={alt}
        className="rounded-full object-cover"
        style={{ width, height: width }}
      />
    </div>
  );
};

export default Avatar;

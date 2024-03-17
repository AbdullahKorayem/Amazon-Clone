function Available({ availability, size }) {
  return (
    <div>
      {availability ? (
        <span className={`text-green-600 text-${size}`}>In Stock</span>
      ) : (
        <span className={`text-red-600 text-${size}`}>Out of Stock</span>
      )}
    </div>
  );
}

export default Available;

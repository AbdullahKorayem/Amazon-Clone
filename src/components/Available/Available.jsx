function Available({ availability }) {
  return (
    <div>
      <p className="my-3 font-bold">
        {availability ? (
          <span className="text-green-600 text-xl">In Stock </span>
        ) : (
          <span className="text-red-600 text-xl">Out of Stock</span>
        )}
      </p>
    </div>
  );
}

export default Available;

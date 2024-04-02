function HandleQuantity({ quantity, setQuantity }) {
  function handlePlus() {
    if (quantity < 5) setQuantity(quantity => quantity + 1);
  }
  function handleMins() {
    if (quantity > 1) setQuantity(quantity => quantity - 1);
  }
  const plusMinuceButton =
    'flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500';
  return (
    <div className="mt-6">
      <p className="pb-2 text-xs text-gray-500">Quantity</p>
      <div className="flex">
        <button onClick={handleMins} className={`${plusMinuceButton}`}>
          −
        </button>
        <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
          {quantity}
        </div>
        <button onClick={handlePlus} className={`${plusMinuceButton}`}>
          {' '}
          +
        </button>
      </div>
    </div>
  );
}
export default HandleQuantity;

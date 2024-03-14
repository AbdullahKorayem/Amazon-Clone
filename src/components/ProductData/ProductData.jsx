function ProductData({ name, description }) {
  return (
    <p className="font-bold">
      {name}: <span className="font-normal">{description}</span>
    </p>
  );
}
export default ProductData;

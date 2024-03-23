import { useContext } from 'react';
import ProductCard from '../../components/Cards/ProductCard';
import { langContext } from '../../contexts/lang';
function ProductsList({ title, products }) {
  const { lang } = useContext(langContext);
  return (
    <div className=" container  mt-3">
      <h1 className=" text-3xl font-bold">{title}</h1>
      <div className="grid sm:grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 min-[1150px]:grid-cols-3 md:grid-cols-2 lg:gap-6 min-[650px]:grid-cols-1 md:mx-auto sm:gap-0 ">
        {products.map(product => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product[lang].title}
              image={product.thumbnail}
              description={product[lang].description}
              price={product.price}
              rate={product.rating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductsList;

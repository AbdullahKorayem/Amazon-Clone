import { useContext } from 'react';
import ProductCard from '../../components/Cards/ProductCard';
import { langContext } from '../../contexts/lang';
import { useTranslation } from 'react-i18next';
function ProductsList({ title, products }) {
  const { i18n, t } = useTranslation();
  const activeLocale = i18n.resolvedLanguage;
  const { lang } = useContext(langContext);
  return (
    <div className=" container mt-3 flex flex-col  ">
      <h1 className=" my-3 text-3xl font-bold ms-16">{t(title)}</h1>
      <div className="grid sm:grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 min-[1150px]:grid-cols-3 md:grid-cols-2  lg:gap-6 min-[650px]:grid-cols-1 md:mx-auto sm:gap-0  ">
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

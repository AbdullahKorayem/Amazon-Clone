import ProductsList from '../../components/ProductsList/ProductsList';
import { useContext } from 'react';
import { allProductsContext } from '../../contexts/allProducts';
import { useSearchParams } from 'react-router-dom';
import NoResult from './NoResult';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const product = searchParams.get('pro');
  const categoryId = searchParams.get('cat');
  const { allProducts } = useContext(allProductsContext);
  const filteredProducts = allProducts.filter(productObj => {
    const categoryMatch = categoryId
      ? productObj.categoryId === categoryId
      : true;

    const productMatch = product
      ? productObj &&
        productObj.en &&
        Object.values(productObj.en).some(value =>
          value.toLowerCase().includes(product.toLowerCase())
        )
      : true;
    return categoryMatch && productMatch;
  });
  if (filteredProducts.length === 0) return <NoResult result={product} />;
  else return <ProductsList products={filteredProducts} title="Results" />;
}

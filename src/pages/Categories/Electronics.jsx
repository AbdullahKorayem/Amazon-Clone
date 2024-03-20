import { useLoaderData } from 'react-router-dom';
import {
  getCategoryByName,
  getProductsByCategoryId,
} from '../../firestore/firestore';

import ProductsList from '../../components/ProductsList/ProductsList';

function Electronics() {
  const products = useLoaderData();
  return <ProductsList products={products} title="Electronics" />;
}

export default Electronics;

export async function loader() {
  const category = await getCategoryByName('Electronics');
  const products = await getProductsByCategoryId(category.id);
  return products;
}

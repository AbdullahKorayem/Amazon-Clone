import { useLoaderData } from 'react-router-dom';
import {
  getCategoryByName,
  getProductsByCategoryId,
} from '../../firestore/firestore';
import ProductsList from '../../components/ProductsList/ProductsList';

function Coffee() {
  const products = useLoaderData();
  return <ProductsList products={products} title="Coffee" />;
}

export default Coffee;

export async function loader() {
  const category = await getCategoryByName('Coffee');
  const products = await getProductsByCategoryId(category.id);
  return products;
}

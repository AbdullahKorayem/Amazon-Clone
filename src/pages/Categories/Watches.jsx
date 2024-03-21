import { useLoaderData } from 'react-router-dom';
import {
  getCategoryByName,
  getProductsByCategoryId,
} from '../../firestore/firestore';
import ProductsList from '../../components/ProductsList/ProductsList';
function Watches() {
  const products = useLoaderData();
  return <ProductsList products={products} title="Watches" />;
}

export default Watches;

export async function loader() {
  const category = await getCategoryByName('Watches');
  const products = await getProductsByCategoryId(category.id);
  return products;
}

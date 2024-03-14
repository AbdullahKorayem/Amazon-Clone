import { useLoaderData } from 'react-router-dom';
import {
  getCategoryByName,
  getProductsByCategoryId,
} from '../../firestore/firestore';
import ProductsList from '../../components/ProductsList/ProductsList';
function Kindle() {
  const products = useLoaderData();
  console.log(products);
  return <ProductsList products={products} title="Kindle" />;
}

export default Kindle;

export async function loader() {
  const category = await getCategoryByName('Kindle');
  const products = await getProductsByCategoryId(category.id);
  return products;
}

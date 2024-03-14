import { useLoaderData } from 'react-router-dom';
import {
  getCategoryByName,
  getProductsByCategoryId,
} from '../../firestore/firestore';
import ProductsList from '../../components/ProductsList/ProductsList';
function PersonalCare() {
  const products = useLoaderData();
  console.log(products);

  return <ProductsList products={products} title="Health & Personal Care" />;
}

export default PersonalCare;

export async function loader() {
  const category = await getCategoryByName('Health & Personal Care');
  const products = await getProductsByCategoryId(category.id);
  return products;
}

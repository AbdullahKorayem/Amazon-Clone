import { useLoaderData } from 'react-router-dom';
import {
  getCategoryByName,
  getProductsByCategoryId,
} from '../../firestore/firestore';
import ProductsList from '../../components/ProductsList/ProductsList';
function OfficeSupplies() {
  const products = useLoaderData();
  return <ProductsList products={products} title="Office Supplies" />;
}

export default OfficeSupplies;

export async function loader() {
  const category = await getCategoryByName('Office Supplies');
  const products = await getProductsByCategoryId(category.id);
  return products;
}

import { useLoaderData } from 'react-router-dom';
import { getProductsByCategoryId } from '../../firestore/firestore';
import ProductsList from '../../components/ProductsList/ProductsList';
import ServiceUnavailable from '../Service-Unavailable/ServiceUnavailable';
import { useLayoutEffect, useState } from 'react';
import { FilterSidebar } from './FilterSidebar';

const categories = [{ view: 'office_supplies', value: 'all' }];
const brands = [
  { view: 'all', value: 'all' },
  { view: 'JODO', value: 'UIXJODO' },
  { view: 'Amanple', value: 'Amanple' },
];
const priceRanges = [
  { view: 'all', value: 'all' },
  { view: 'Up to 100 USD', value: [0, 100] },
  { view: '101 to 200 USD', value: [100, 200] },
  { view: '200 USD & above', value: [200, 100000] },
];

function OfficeSupplies() {
  const products = useLoaderData();
  document.title = 'Amazon : Office Supplies';
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [filters, setFilters] = useState({
    category: 'all',
    brand: 'all',
    price: 'all',
    rating: 'all',
  });

  let filterCategory = [];
  let filterBrand = [];
  let filterPrice = [];
  let filterRating = [];
  let filteredProducts = products;
  filterCategory = products.filter(pro => {
    if (filters.category == 'all') return true;
    else return pro.subCategoryId === filters.category;
  });

  filterBrand = filterCategory.filter(pro => {
    if (filters.brand == 'all') return true;
    else return pro.en.brand === filters.brand;
  });
  filterPrice = filterBrand.filter(pro => {
    if (filters.price == 'all') return true;
    else return pro.price >= filters.price[0] && pro.price <= filters.price[1];
  });
  filterRating = filterPrice.filter(pro => {
    if (filters.rating == 'all') return true;
    else return pro.rating === filters.rating;
  });

  filteredProducts = filterRating;
  if (products.length === 0) return <ServiceUnavailable />;
  else
    return (
      <div className="flex">
        <div className="w-[20%] min-w-44">
          <FilterSidebar
            priceRanges={priceRanges}
            brands={brands}
            categories={categories}
            setFilters={setFilters}
            filters={filters}
          />
        </div>
        <div className="w-[80%]">
          <ProductsList products={filteredProducts} title="office-supplies" />
        </div>
      </div>
    );
}

export default OfficeSupplies;

export async function loader() {
  const products = await getProductsByCategoryId('6562f3891cf9fca552f8c5ac');
  return products;
}

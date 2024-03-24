import { useLoaderData } from 'react-router-dom';
import { getProductsByCategoryId } from '../../firestore/firestore';
import ProductsList from '../../components/ProductsList/ProductsList';
import ServiceUnavailable from '../Service-Unavailable/ServiceUnavailable';
import { useState } from 'react';
import { FilterSidebar } from './FilterSidebar';

const categories = [{ view: 'Watches', value: 'all' }];
const brands = [
  { view: 'All', value: 'all' },
  { view: 'Casio', value: 'Casio' },
  { view: 'Swiss', value: 'swiss' },
  { view: 'Alba', value: 'Alba' },
];
const priceRanges = [
  { view: 'All', value: 'all' },
  { view: 'Up to 1000 USD', value: [0, 1000] },
  { view: '1001 to 2000 USD', value: [1000, 2000] },
  { view: '2000 USD & above', value: [2000, 100000] },
];

function Watches() {
  const products = useLoaderData();
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
          <ProductsList products={filteredProducts} title="Watches" />
        </div>
      </div>
    );
}

export default Watches;

export async function loader() {
  const products = await getProductsByCategoryId('65527ac3376a52ea210d9706');
  return products;
}

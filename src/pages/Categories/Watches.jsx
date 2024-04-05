import { useLoaderData } from 'react-router-dom';
import { getProductsByCategoryId } from '../../firestore/firestore';
import ProductsList from '../../components/ProductsList/ProductsList';
import ServiceUnavailable from '../Service-Unavailable/ServiceUnavailable';
import { useLayoutEffect, useState } from 'react';
import { FilterSidebar } from './FilterSidebar';
import FilterResult from './FilterResult';

const categories = [{ view: 'watches', value: 'all' }];
const brands = [
  { view: 'all', value: 'all' },
  { view: 'Casio', value: 'Casio' },
  { view: 'Swiss', value: 'swiss' },
  { view: 'Alba', value: 'Alba' },
];
const priceRanges = [
  { view: 'all', value: 'all' },
  { view: 'Up to 1000 USD', value: [0, 1000] },
  { view: '1000 to 2000 USD', value: [1000, 2000] },
  { view: '2000 USD & above', value: [2000, 100000] },
];

function Watches() {
  const products = useLoaderData();
  document.title = 'Amazon : Watches';
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
          {filteredProducts.length === 0 && <FilterResult />}
          {filteredProducts.length > 0 && (
            <ProductsList products={filteredProducts} title="watches" />
          )}
        </div>
      </div>
    );
}

export default Watches;

export async function loader() {
  const products = await getProductsByCategoryId('65527ac3376a52ea210d9706');
  return products;
}

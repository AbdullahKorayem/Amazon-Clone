import { useLoaderData } from 'react-router-dom';
import { getProductsByCategoryId } from '../../firestore/firestore';
import ProductsList from '../../components/ProductsList/ProductsList';
import { useLayoutEffect, useState } from 'react';
import { FilterSidebar } from './FilterSidebar';
import ServiceUnavailable from '../Service-Unavailable/ServiceUnavailable';

const categories = [{ view: 'Coffee', value: 'all' }];
const brands = [
  { view: 'All', value: 'all' },
  { view: 'Abu Auf', value: 'Abu Auf' },
  { view: 'Farouk Pasha', value: 'Farouk Pasha ' },
];
const priceRanges = [
  { view: 'All', value: 'all' },
  { view: 'Up to 50 USD', value: [0, 50] },
  { view: '51 to 100 USD', value: [50, 100] },
  { view: '101 to 150 USD', value: [100, 150] },
  { view: '151 USD & above', value: [150, 100000] },
];

function Coffee() {
  const products = useLoaderData();
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
      <div className="flex ">
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
          <ProductsList products={filteredProducts} title="Coffee" />
        </div>
      </div>
    );
}

export default Coffee;

export async function loader() {
  const products = await getProductsByCategoryId('65527c22376a52ea210d9708');
  return products;
}

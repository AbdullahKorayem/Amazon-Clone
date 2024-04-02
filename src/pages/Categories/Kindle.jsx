import { useLoaderData } from 'react-router-dom';
import { getProductsByCategoryId } from '../../firestore/firestore';
import ProductsList from '../../components/ProductsList/ProductsList';
import ServiceUnavailable from '../Service-Unavailable/ServiceUnavailable';
import { useLayoutEffect, useState } from 'react';
import { FilterSidebar } from './FilterSidebar';

const categories = [{ view: 'Kindle', value: 'all' }];
const brands = [{ view: 'Amazon', value: 'all' }];
const priceRanges = [
  { view: 'All', value: 'all' },
  { view: 'Up to 2000 USD', value: [0, 2000] },
  { view: '2001 to 3000 USD', value: [2000, 3000] },
  { view: '3000 USD & above', value: [3000, 100000] },
];

function Kindle() {
  const products = useLoaderData();
  document.title = 'Amazon : Kindle';
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
          <ProductsList products={filteredProducts} title="Kindle" />
        </div>
      </div>
    );
}

export default Kindle;

export async function loader() {
  const products = await getProductsByCategoryId('65658ceae686c668a4d191ec');
  return products;
}

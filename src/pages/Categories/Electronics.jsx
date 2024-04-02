import { useLoaderData } from 'react-router-dom';
import { getProductsByCategoryId } from '../../firestore/firestore';

import ProductsList from '../../components/ProductsList/ProductsList';
import ServiceUnavailable from '../Service-Unavailable/ServiceUnavailable';
import { FilterSidebar } from './FilterSidebar';
import { useLayoutEffect, useState } from 'react';

const categories = [
  { view: 'All', value: 'all' },
  { view: 'Laptops', value: '65527fafa8299445e5fe5e85' },
  { view: 'Mobiles', value: '656e34938ab097079167133d' },
  { view: 'Head Phones', value: '65527fdca8299445e5fe5e87' },
];
const brands = [
  { view: 'All', value: 'all' },
  { view: 'Dell Laptops', value: 'dell' },
  { view: 'Samsung Phones', value: 'Samsung' },
  { view: 'Apple Phones', value: 'Apple' },
  { view: 'Mokata', value: 'Mokata' },
  { view: 'Crucial', value: 'Crucial' },
  { view: 'Logitech', value: 'Logitech' },
  { view: 'Sony', value: 'sony' },
];
const priceRanges = [
  { view: 'All', value: 'all' },
  { view: 'Up to 1000 USD', value: [0, 1000] },
  { view: 'Up to 5000 USD', value: [1000, 5000] },
  { view: 'Up to 10000 USD', value: [5000, 10000] },
  { view: 'Up to 30000 USD', value: [10000, 30000] },
  { view: '30000 USD & above', value: [30000, 1000000] },
];

function Electronics() {
  const products = useLoaderData();
  document.title = 'Amazon : Electronics';
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
          <ProductsList products={filteredProducts} title="Electronics" />
        </div>
      </div>
    );
}

export default Electronics;

export async function loader() {
  const products = await getProductsByCategoryId('65527a31376a52ea210d9703');
  return products;
}

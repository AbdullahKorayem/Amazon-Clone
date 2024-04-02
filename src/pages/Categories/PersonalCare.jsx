import { useLoaderData } from 'react-router-dom';
import { getProductsByCategoryId } from '../../firestore/firestore';
import ProductsList from '../../components/ProductsList/ProductsList';
import ServiceUnavailable from '../Service-Unavailable/ServiceUnavailable';
import { useLayoutEffect, useState } from 'react';
import { FilterSidebar } from './FilterSidebar';

const categories = [
  { view: 'All', value: 'all' },
  { view: 'Skin Care', value: '65663e6987a7139093a18198' },
  { view: 'Makeup', value: '65657840e686c668a4d18920' },
];
const brands = [{ view: "L'Oréal Paris", value: 'all' }];
const priceRanges = [
  { view: 'All', value: 'all' },
  { view: 'Up to 200 USD', value: [0, 200] },
  { view: '201 to 500 USD', value: [200, 500] },
  { view: '201 to 500 USD', value: [500, 100000] },
];

function PersonalCare() {
  const products = useLoaderData();
  document.title = 'Amazon : Health & Personal Care';
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
          <ProductsList
            products={filteredProducts}
            title="Health & Personal Care"
          />
        </div>
      </div>
    );
}

export default PersonalCare;

export async function loader() {
  const products = await getProductsByCategoryId('65527c8c376a52ea210d970a');
  return products;
}

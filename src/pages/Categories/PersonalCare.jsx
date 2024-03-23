import { useLoaderData } from 'react-router-dom';
import { getProductsByCategoryId } from '../../firestore/firestore';
import ProductsList from '../../components/ProductsList/ProductsList';
import ServiceUnavailable from '../Service-Unavailable/ServiceUnavailable';
import { useState } from 'react';
import { FilterSidebar } from './FilterSidebar';

const categories = [
  { view: 'Skin Care', value: '65663e6987a7139093a18198' },
  { view: 'Skin Care', value: '65657840e686c668a4d18920' },
];
const brands = [{ view: "L'Oréal Paris", value: "L'Oréal Paris" }];
const priceRanges = [
  { view: 'Up to 200 USD', value: 0 },
  { view: '201 to 500 USD', value: 200 },
  { view: '201 to 500 USD', value: 500 },
];

function PersonalCare() {
  const products = useLoaderData();
  const [filters, setFilters] = useState({
    category: '',
    price: { min: 0, max: Infinity },
    rating: 0,
    brand: '',
  });

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => {
      const newFilters = { ...prevFilters };
      if (filterName.startsWith('price')) {
        const key = filterName === 'priceMin' ? 'min' : 'max';
        newFilters.price[key] = value || (key === 'max' ? Infinity : 0);
      } else {
        newFilters[filterName] = value;
      }
      return newFilters;
    });
  };

  const filteredProducts = products.filter(product => {
    return (
      (filters.category ? product.category === filters.category : true) &&
      product.price >= filters.price.min &&
      product.price <= filters.price.max &&
      product.rating >= filters.rating &&
      (filters.brand ? product.brand === filters.brand : true)
    );
  });
  if (products.length === 0) return <ServiceUnavailable />;
  else
    return (
      <div className="flex">
        <div className="w-[20%] min-w-44">
          <FilterSidebar
            onFilterChange={handleFilterChange}
            priceRanges={priceRanges}
            brands={brands}
            categories={categories}
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

import { useLoaderData } from 'react-router-dom';
import { getProductsByCategoryId } from '../../firestore/firestore';

import ProductsList from '../../components/ProductsList/ProductsList';
import ServiceUnavailable from '../Service-Unavailable/ServiceUnavailable';
import { FilterSidebar } from './FilterSidebar';
import { useState } from 'react';

const categories = [
  { view: 'Laptops', value: '65527fafa8299445e5fe5e85' },
  { view: 'Mobiles', value: '656e34938ab097079167133d' },
  { view: 'Head Phones', value: '65527fdca8299445e5fe5e87 ' },
];
const brands = [
  { view: 'Dell Laptops', value: 'dell' },
  { view: 'Samsung Phones', value: 'Samsung' },
  { view: 'Apple Phones', value: 'Apple' },
  { view: 'Crucial', value: 'Crucial' },
  { view: 'Logitech', value: 'Logitech' },
  { view: 'Sony', value: 'sony' },
  { view: 'sony', value: 'sony' },
  { view: 'Mokata', value: 'Mokata' },
];
const priceRanges = [
  { view: 'Up to 1000 USD', value: 0 },
  { view: '1001 to 5000 USD', value: 1000 },
  { view: '5001 to 10000 USD', value: 5000 },
  { view: '10000 to 30000 USD', value: 10000 },
  { view: '10000 to 30000 USD', value: 30000 },
];

function Electronics() {
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
      <div className="flex ">
        <div className="w-[20%] min-w-44">
          <FilterSidebar
            onFilterChange={handleFilterChange}
            priceRanges={priceRanges}
            brands={brands}
            categories={categories}
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

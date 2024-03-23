import { useLoaderData } from 'react-router-dom';
import { getProductsByCategoryId } from '../../firestore/firestore';
import ProductsList from '../../components/ProductsList/ProductsList';
import ServiceUnavailable from '../Service-Unavailable/ServiceUnavailable';
import { useState } from 'react';
import { FilterSidebar } from './FilterSidebar';

const categories = [
  { view: 'Office Supplies', value: '6562f4ad1cf9fca552f8c5b0' },
];
const brands = [
  { view: 'JODO', value: 'UIXJODO' },
  { view: 'Amanple', value: 'Amanple' },
];
const priceRanges = [
  { view: 'Up to 100 USD', value: 0 },
  { view: '101 to 200 USD', value: 100 },
  { view: '200 USD & above', value: 200 },
];

function OfficeSupplies() {
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
          <ProductsList products={filteredProducts} title="Office Supplies" />
        </div>
      </div>
    );
}

export default OfficeSupplies;

export async function loader() {
  const products = await getProductsByCategoryId('6562f3891cf9fca552f8c5ac');
  return products;
}

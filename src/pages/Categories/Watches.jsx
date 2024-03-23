import { useLoaderData } from 'react-router-dom';
import { getProductsByCategoryId } from '../../firestore/firestore';
import ProductsList from '../../components/ProductsList/ProductsList';
import ServiceUnavailable from '../Service-Unavailable/ServiceUnavailable';
import { useState } from 'react';
import { FilterSidebar } from './FilterSidebar';

const categories = [{ view: 'Watches', value: '655bb731c29668369f9748f7' }];
const brands = [
  { view: 'Casio', value: 'Casio' },
  { view: 'Swiss', value: 'swiss' },
  { view: 'Alba', value: 'Alba' },
];
const priceRanges = [
  { view: 'Up to 1000 USD', value: 0 },
  { view: '1001 to 2000 USD', value: 1000 },
  { view: '2000 USD & above', value: 2000 },
];

function Watches() {
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

import { useLoaderData } from 'react-router-dom';
import { getProductsByCategoryId } from '../../firestore/firestore';
import ProductsList from '../../components/ProductsList/ProductsList';
import ServiceUnavailable from '../Service-Unavailable/ServiceUnavailable';
import { useState } from 'react';
import { FilterSidebar } from './FilterSidebar';

const categories = [{ view: 'Kindle', value: '65694e7b244db28213810d49' }];
const brands = [{ view: 'Amazon', value: 'kindle' }];
const priceRanges = [
  { view: 'Up to 2000 USD', value: 0 },
  { view: '2001 to 3000 USD', value: 2000 },
  { view: '3000 USD & above', value: 3000 },
];

function Kindle() {
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

import { useLoaderData } from 'react-router-dom';
import { getProductsByCategoryId } from '../../firestore/firestore';
import ProductsList from '../../components/ProductsList/ProductsList';
import { useState } from 'react';
import { FilterSidebar } from './FilterSidebar';
import ServiceUnavailable from '../Service-Unavailable/ServiceUnavailable';

function Coffee() {
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
          <FilterSidebar onFilterChange={handleFilterChange} />
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

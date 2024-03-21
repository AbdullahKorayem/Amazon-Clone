import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductsList from '../../components/ProductsList/ProductsList';
import { getAllProducts } from '../../firestore/firestore';
import { CustomSpinner } from '../../components/Spinners/spinner';

export default function SearchResults() {
  let [searchParams] = useSearchParams();
  const product = searchParams.get('pro');
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const products = await getAllProducts();
      setResults(products);
    }
    getProducts();
  }, []);
  console.log(results);

  if (results.length === 0) return <CustomSpinner />;
  else return <ProductsList products={results} title="Results" />;
}

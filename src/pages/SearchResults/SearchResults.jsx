import { useSearchParams } from 'react-router-dom';
// import { searchForProduct } from '../../firestore/firestore';
import { useEffect, useState } from 'react';
import ProductsList from '../../components/ProductsList/ProductsList';

export default function SearchResults() {
  let [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function fetch() {
      const data = await searchForProduct(
        searchParams.get('pro'),
        searchParams.get('cat')
      );
      setResults(data);
    }
    fetch();
  }, [searchParams]);
  console.log(results);
  if (results.length === 0) return <div>loading...</div>;
  else return <ProductsList products={results} title="Results" />;
}

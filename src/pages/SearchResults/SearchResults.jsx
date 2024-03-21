import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductsList from '../../components/ProductsList/ProductsList';
import { getAllProducts } from '../../firestore/firestore';
import { CustomSpinner } from '../../components/Spinners/spinner';

export default function SearchResults() {
  let [searchParams] = useSearchParams();
  const product = searchParams.get('pro');
  const [results, setResults] = useState([]);

  if (results.length === 0) return <CustomSpinner />;
  else return <ProductsList products={results} title="Results" />;
}

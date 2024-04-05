import React from 'react';
import { Rating } from 'flowbite-react';
import { useTranslation } from 'react-i18next';
export function FilterSidebar({
  categories,
  brands,
  priceRanges,
  setFilters,
  filters,
}) {
  const { i18n, t } = useTranslation();
  const activeLocale = i18n.resolvedLanguage;
  const ratings = [
    { view: 'all', value: 'all' },
    { view: FiveStar(), value: 5 },
    { view: FourStar(), value: 4 },
    { view: ThirdStar(), value: 3 },
    { view: TwoStar(), value: 2 },
    { view: OneStar(), value: 1 },
    { view: ZeroStar(), value: 0 },
  ];

  const handleFilterClick = (type, value) => {
    if (type === 'category') {
      setFilters(filters => {
        return {
          ...filters,
          category: value,
        };
      });
    } else if (type === 'brand') {
      setFilters(filters => {
        return {
          ...filters,
          brand: value,
        };
      });
    } else if (type === 'price') {
      setFilters(filters => {
        return {
          ...filters,
          price: value,
        };
      });
    } else if (type === 'rating') {
      setFilters(filters => {
        return {
          ...filters,
          rating: value,
        };
      });
    }
  };

  const renderFilterList = (filterType, items) => (
    <ul className="list-none">
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            handleFilterClick(filterType, item.value);
          }}
          className={`cursor-pointer p-2 text-gray-700 hover:bg-gray-300 ${
            filters[filterType] === item.value ? 'bg-gray-200' : ''
          }`}
        >
          {t(item.view)}
        </li>
      ))}
    </ul>
  );
  const renderStar = (filterType, items) => (
    <ul className="list-none">
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            handleFilterClick(filterType, item.value);
          }}
          className={`cursor-pointer p-2 text-gray-700 hover:bg-gray-300 ${
            filters[filterType] === item.value ? 'bg-gray-200' : ''
          }`}
        >
          {item.view === 'all' && t(item.view)}
          {item.view !== 'all' && item.view}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="p-4 w-64 bg-white shadow-md">
      <h4 className="font-bold text-lg mb-4">{t('filter_by')}</h4>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {t('category')}
        </label>
        {renderFilterList('category', categories)}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {t('brand')}
        </label>
        {renderFilterList('brand', brands)}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {t('price_range')}
        </label>
        {renderFilterList('price', priceRanges)}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {t('rating')}
        </label>
        {renderStar('rating', ratings)}
      </div>
    </div>
  );
}

function FiveStar() {
  return (
    <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
    </Rating>
  );
}
function FourStar() {
  return (
    <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
    </Rating>
  );
}
function ThirdStar() {
  return (
    <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
    </Rating>
  );
}
function TwoStar() {
  return (
    <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
    </Rating>
  );
}
function OneStar() {
  return (
    <Rating>
      <Rating.Star />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
    </Rating>
  );
}
function ZeroStar() {
  return (
    <Rating>
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
    </Rating>
  );
}

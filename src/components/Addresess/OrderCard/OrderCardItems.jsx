import React from 'react';
import { useTranslation } from 'react-i18next';

export default function OrderCardItems({ items }) {
  const { t } = useTranslation();

  return (
    <>
      {items.map((item, index) => (
        <section
          key={index}
          className="flex justify-between p-2 mb-4 rounded-md w-2/2"
        >
          <li>{t(item.label)} :</li>

          <li>
            {item.value !== '' && item.value !== 'Free' && item.value}
            {item.value !== '' && item.value === 'Free' && t(item.value)}
            {item.value === '' && '--'}
          </li>
        </section>
      ))}
    </>
  );
}

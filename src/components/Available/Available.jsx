import { useTranslation } from 'react-i18next';
function Available({ availability, size }) {
  const { i18n, t } = useTranslation();
  return (
    <div>
      {availability ? (
        <span className={`text-green-600 text-${size}`}>{t('in_stock')}</span>
      ) : (
        <span className={`text-red-600 text-${size}`}>{t('out_of_stock')}</span>
      )}
    </div>
  );
}

export default Available;

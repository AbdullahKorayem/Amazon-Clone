import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';

const Slider = ({ children, title }) => {
  const { i18n, t } = useTranslation();
  const activeLocale = i18n.resolvedLanguage;
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">{t(title)}</div>
      {children}
    </div>
  );
};

export default Slider;

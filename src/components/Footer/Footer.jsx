import React from 'react';
import { useTranslation } from 'react-i18next';
function Footer() {
  const { i18n, t } = useTranslation();
  const activeLocale = i18n.resolvedLanguage;
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="bg-gray-800 text-white">
        <button
          className="w-full py-4 font-bold text-xl border-gray-500"
          onClick={handleBackToTop}
        >
          {t('back_to_top')}
        </button>
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">{t('know_us')}</h4>
              <ul className="list-none m-0 p-0">
                <li className="mb-2">{t('about_amazon')}</li>
                <li className="mb-2">{t('careers')}</li>
                <li className="mb-2">{t('amazon_science')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">{t('shop_with_us')}</h4>
              <ul>
                <li className="mb-2">{t('your_account')}</li>
                <li className="mb-2">{t('your_order')}</li>
                <li className="mb-2">{t('your_addresses')}</li>
                <li className="mb-2">{t('your_list')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">{t('money_with_us')}</h4>
              <ul>
                <li className="mb-2">{t('sell_on_amazon')}</li>
                <li className="mb-2">{t('ad_your_product')}</li>
                <li className="mb-2">{t('fulfillment_by_amazon')}</li>
                <li className="mb-2">{t('build_your_brand')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">{t('let_us_help_you')}</h4>
              <ul>
                <li className="mb-2">{t('help')}</li>
                <li className="mb-2">{t('shipping_delivery')}</li>
                <li className="mb-2">{t('returns_replacements')}</li>
                <li className="mb-2">{t('amazon_app_download')}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-10 pt-10 text-center">
            <div className="flex justify-center mb-4">
              <img
                className="w-15 h-12"
                src="https://logodownload.org/wp-content/uploads/2014/04/amazon-logo.png"
                alt="Amazon Logo"
              />
            </div>
            <p className="text-sm text-gray-400">© 2023 Amazon Clone, Inc.</p>
            <div className="flex justify-center space-x-4 mt-4">
              {/* Example social media icons */}
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

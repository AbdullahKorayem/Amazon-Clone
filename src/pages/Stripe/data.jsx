// src/App.tsx

// React hook that ensures components are
// re-rendered when locale changes.
import { useTranslation } from 'react-i18next';

function Local() {
  // The `t()` function gives us
  // access to the active locale's
  // translations.
  const { t } = useTranslation();

  return (
    <div className="...">
      {/* We pass the key we provided under
          `resources.translation` in 
          src/i18n/config.ts */}
      <h2>{t('hello_world')}</h2>
    </div>
  );
}

export default Local;

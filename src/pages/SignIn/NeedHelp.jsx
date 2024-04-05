import React from 'react';
import { useTranslation } from 'react-i18next';

function NeedHelp() {
  const { t } = useTranslation();

  return (
    <div>
      <p className="NeedHelpLinks">{t('need_help')}</p>
    </div>
  );
}

export default NeedHelp;

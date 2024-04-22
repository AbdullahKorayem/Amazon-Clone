import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  EmailIcon,
  EmailShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  FacebookShareButton,
  FacebookIcon,
} from 'react-share';

export default function ShareButton({ shareUrl }) {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        className="border-none text-sm text-sky-800  cursor-pointer"
        onClick={() => setOpenModal(true)}
      >
        {t('share')}
      </button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header className="bg-gray-100 border-b-2" />
        <Modal.Body>
          <h1 className="mt-4 text-lg font-semibold text-start">
            {t('Share this product with friends')}
          </h1>
          <div className="text-center my-10">
            <h3 className=" flex justify-center gap-3 mx-auto mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={42} round={true} />
              </FacebookShareButton>
              <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={42} round={true} />
              </WhatsappShareButton>
              <EmailShareButton url={shareUrl}>
                <EmailIcon size={42} round={true} />
              </EmailShareButton>
              <TwitterShareButton url={shareUrl}>
                <TwitterIcon size={42} round={true} />
              </TwitterShareButton>
              <TelegramShareButton url={shareUrl}>
                <TelegramIcon size={42} round={true} />
              </TelegramShareButton>
            </h3>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

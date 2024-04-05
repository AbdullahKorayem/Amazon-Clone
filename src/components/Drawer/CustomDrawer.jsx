import React, { useContext, useEffect, useState } from 'react';
import { Drawer, Button, Accordion, ButtonToolbar } from 'rsuite';
import { FaBars } from 'react-icons/fa';
import { fetchUser } from '../../redux/slices/User';
import 'rsuite/Drawer/styles/index.css';
import 'rsuite/Button/styles/index.css';
import 'rsuite/Accordion/styles/index.css';
import { useTranslation } from 'react-i18next';
import 'rsuite/Animation/styles/index.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dirContext } from '../../contexts/direction';

export default function CustomDrawer({ lang, onSetLang }) {
  const UserName = useSelector(state => state.User.user?.UserName);
  const { dir, setDir } = useContext(dirContext);
  const drawerDir = dir == 'rtl' ? 'right' : 'left';
  const dispatch = useDispatch();
  const User = localStorage.getItem('UserUid');
  const [size, setSize] = useState();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState(drawerDir);
  const [seeAll, setSeeAll] = useState(false);
  const { i18n, t } = useTranslation();
  const handleOpen = value => {
    setSize(value);
    setOpen(true);
  };
  useEffect(() => {
    setPlacement(drawerDir);
  }, [dir]);

  const handleClose = () => {
    setOpen(false);
  };

  const sections = [
    {
      title: `${t('digital_title')}`,
      links: [
        { text: `${t('amazon_kindle')}`, to: '/kindle' },
        { text: `${t('mobiles_laptops')}`, to: '/electronics' },
      ],
    },
    {
      title: `${t('category_title')}`,
      links: [
        { text: `${t('mobiles_tablets')}`, to: '/electronics' },
        { text: `${t('amazon_products')}`, to: '/kindle' },
        { text: `${t('personal_care')}`, to: '/personal-care' },
        { text: `${t('men_fashion')}`, to: '/watches' },
        { text: `${t('office_supplies')}`, to: '/office-supplies' },
        { text: `${t('hot_drinks')}`, to: '/coffee' },
      ],
    },
  ];

  const accordSection = [
    {
      links: [
        { text: `${t('mobiles_tablets')}`, to: '/electronics' },
        { text: `${t('amazon_products')}`, to: '/kindle' },
        { text: `${t('personal_care')}`, to: '/personal-care' },
        { text: `${t('men_fashion')}`, to: '/watches' },
        { text: `${t('office_supplies')}`, to: '/office-supplies' },
        { text: `${t('hot_drinks')}`, to: '/coffee' },
      ],
    },
  ];
  return (
    <>
      <ButtonToolbar>
        <Button
          className=" text-white p-1 text-base bg-transparent border-none outline-none focus:outline-none focus:bg-transparent hover:bg-transparent"
          size="xs"
          onClick={() => {
            handleOpen('xs');
          }}
        >
          <FaBars className="mr-2 font-bold" />
          {t('all')}
        </Button>
      </ButtonToolbar>

      <Drawer
        size={size}
        placement={placement}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header className="bg-[#232f3e]">
          <Drawer.Title className="text-white">
            {t('hello')} {UserName}
          </Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          {sections.map((section, index) => (
            <div key={index}>
              <h1 className="text-xl font-semibold">{section.title}</h1>
              {section.links.map((link, linkIndex) => (
                <div
                  key={linkIndex}
                  className="w-full p-1 rounded-md hover:bg-[#eaeded] my-3"
                >
                  <h3 className="font-semibold">
                    <Link
                      to={link.to}
                      className="block w-full ml-2 text-[#5a5b5b] no-underline hover:no-underline"
                      onClick={handleClose}
                    >
                      {link.text}
                    </Link>
                  </h3>
                </div>
              ))}
              {index < sections.length - 1 && <hr className="my-3" />}
            </div>
          ))}
          <hr className="my-3" />

          <Accordion>
            <Accordion.Panel
              header={seeAll ? `${t('see_less')}` : `${t('see_all')}`}
              onClick={() => setSeeAll(!seeAll)}
            >
              {accordSection[0].links.map((link, linkIndex) => (
                <div
                  key={linkIndex}
                  className="w-full p-1 rounded-md hover:bg-[#eaeded]"
                >
                  <h3 className="font-semibold ">
                    <Link
                      to={link.to}
                      className="block w-full ml-2 text-blue-500 no-underline hover:no-underline"
                      onClick={handleClose}
                    >
                      {link.text}
                    </Link>
                  </h3>
                </div>
              ))}
            </Accordion.Panel>
          </Accordion>

          <Accordion>
            <Accordion.Panel header={t('help_settings')}>
              <div className="w-full p-1 rounded-md hover:bg-[#eaeded]">
                <h3 className="font-semibold">
                  <Link
                    to="/profile"
                    className="block w-full ml-2 text-blue-500 no-underline hover:no-underline"
                    onClick={handleClose}
                  >
                    {t('your_account')}
                  </Link>
                </h3>
              </div>
              <div className=" lg:flex items-center p-1 border border-transparent hover:border-white">
                <img
                  src={
                    lang === 'en'
                      ? 'amazon-icon/us_flag.png'
                      : 'amazon-icon/eg_flag.png'
                  }
                  srcSet={
                    lang === 'en'
                      ? '../amazon-icon/us_flag.png'
                      : '../amazon-icon/eg_flag.png'
                  }
                  className="w-5 h-5"
                  alt="US Flag"
                />
                <select
                  value={lang}
                  className="text-base font-bold bg-transparent border-none"
                  onChange={e => {
                    onSetLang(e.target.value);
                    i18n.changeLanguage(e.target.value);
                  }}
                >
                  <option className=" bg-white" value="en">
                    EN
                  </option>
                  <option className=" bg-white" value="ar">
                    AR
                  </option>
                </select>
              </div>

              <div className="w-full p-1 rounded-md hover:bg-[#eaeded]">
                <h3 className="font-semibold">
                  {User ? (
                    <Link
                      className="block w-full ml-2 text-blue-500 no-underline hover:no-underline"
                      onClick={() => {
                        handleClose;
                        window.localStorage.removeItem('UserUid');
                        dispatch(fetchUser(User));
                      }}
                    >
                      {t('sign_out')}
                    </Link>
                  ) : (
                    <Link
                      className="block w-full ml-2 text-blue-500 no-underline hover:no-underline"
                      to="/login"
                    >
                      {t('sign_in')}
                    </Link>
                  )}
                </h3>
              </div>
            </Accordion.Panel>
          </Accordion>
        </Drawer.Body>
      </Drawer>
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-25"
          onClick={handleClose}
        ></div>
      )}
    </>
  );
}

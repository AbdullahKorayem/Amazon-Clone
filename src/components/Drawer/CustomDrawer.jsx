import React, { useState } from 'react';
import { Drawer, Button, Accordion, ButtonToolbar } from 'rsuite';
import { FaBars } from 'react-icons/fa';
import { fetchUser } from '../../redux/slices/User';
import 'rsuite/Drawer/styles/index.css';
import 'rsuite/Button/styles/index.css';
import 'rsuite/Accordion/styles/index.css';

import 'rsuite/Animation/styles/index.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function CustomDrawer({ lang, onSetLang }) {
  const UserName = useSelector(state => state.User.user?.UserName);
  const dispatch = useDispatch();
  const User = localStorage.getItem('UserUid');
  const [size, setSize] = useState();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const [seeAll, setSeeAll] = useState(false);

  const handleOpen = value => {
    setSize(value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sections = [
    {
      title: 'Digital content and devices',
      links: [
        { text: 'Amazon Kindle E-readers', to: '/kindle' },
        { text: 'Mobiles & Labtops', to: '/electronics' },
      ],
    },
    {
      title: 'Shop by Category',
      links: [
        { text: 'Mobiles, Tablets & Accessories', to: '/electronics' },
        { text: 'Amazon Products', to: '/kindle' },
        { text: 'Health & Personal Care', to: '/personal-care' },
        { text: "Men's Fashion", to: '/watches' },
        { text: 'Office Supplies', to: '/office-supplies' },
        { text: 'Hot Drinks', to: '/coffee' },
      ],
    },
  ];

  const accordSection = [
    {
      links: [
        { text: 'Mobiles, Tablets & Accessories', to: '/electronics' },
        { text: 'Amazon Products', to: '/kindle' },
        { text: 'Health & Personal Care', to: '/personal-care' },
        { text: "Men's Fashion", to: '/watches' },
        { text: 'Office Supplies', to: '/office-supplies' },
        { text: 'Hot Drinks', to: '/coffee' },
      ],
    },
  ];
  return (
    <>
      <ButtonToolbar>
        <Button
          className=" text-white p-1 text-base bg-transparent border-none outline-none focus:outline-none focus:bg-transparent hover:bg-transparent"
          size="xs"
          onClick={() => handleOpen('xs')}
        >
          <FaBars className="mr-2 font-bold" />
          All
        </Button>
      </ButtonToolbar>

      <Drawer
        size={size}
        placement={placement}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header className="bg-[#232f3e]">
          <Drawer.Title className="text-white">Hello {UserName}</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          {sections.map((section, index) => (
            <div key={index}>
              <h1 className="text-xl font-semibold">{section.title}</h1>
              {section.links.map((link, linkIndex) => (
                <div
                  key={linkIndex}
                  className="w-full p-1 rounded-md hover:bg-[#eaeded]"
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
              {index < sections.length - 1 && <hr />}
            </div>
          ))}
          <hr />

          <Accordion>
            <Accordion.Panel
              header={seeAll ? 'See Less' : 'See All'}
              onClick={() => setSeeAll(!seeAll)}
            >
              {accordSection[0].links.map((link, linkIndex) => (
                <div
                  key={linkIndex}
                  className="w-full p-1 rounded-md hover:bg-[#eaeded]"
                >
                  <h3 className="font-semibold">
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
            <Accordion.Panel header="Help & Settings">
              <div className="w-full p-1 rounded-md hover:bg-[#eaeded]">
                <h3 className="font-semibold">
                  <Link
                    to="/profile"
                    className="block w-full ml-2 text-blue-500 no-underline hover:no-underline"
                    onClick={handleClose}
                  >
                    Your Account
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
                  className="text-base font-bold bg-transparent border-none"
                  onChange={e => onSetLang(e.target.value)}
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
                      Sigh Out
                    </Link>
                  ) : (
                    <Link
                      className="block w-full ml-2 text-blue-500 no-underline hover:no-underline"
                      to="/login"
                    >
                      Sign In
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

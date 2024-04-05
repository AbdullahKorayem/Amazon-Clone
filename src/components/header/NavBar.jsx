import React, { useContext, useEffect, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { BiCart } from 'react-icons/bi';
import { langContext } from './../../contexts/lang';
import { Badge } from '@material-tailwind/react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import CustomDrawer from './../Drawer/CustomDrawer';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/slices/User';
import DropDownNav from '../DropDownNav/DropDownNav';
import { cartItemsCountContext } from '../../contexts/cartItemsCount';
import { getCartItems } from '../../firestore/firestore';
import { useTranslation } from 'react-i18next';
import { dirContext } from '../../contexts/direction';

const NavBar = () => {
  const navigate = useNavigate();
  const { lang, setLang } = useContext(langContext);
  const { nums, setNums } = useContext(cartItemsCountContext);
  const { dir, setDir } = useContext(dirContext);
  const User = localStorage.getItem('UserUid');
  const dispatch = useDispatch();
  const stateUser = useSelector(state => state.User?.user?.UserName);
  const [searchValue, setSearchValue] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const { i18n, t } = useTranslation();

  function handleClick(e) {
    e.preventDefault();
    navigate(`/search?pro=${searchValue}&cat=${searchCategory}`);
    setSearchValue('');
    setSearchCategory('');
  }
  useEffect(() => {
    dispatch(fetchUser(User));
    async function fetch() {
      const cart = await getCartItems(User);
      const cartLength = cart.reduce((acc, cur) => {
        return acc + cur.quantity;
      }, 0);
      setNums(cartLength);
    }
    fetch();
  }, []);

  return (
    <>
      <nav className="bg-[#131921]  h-auto justify-evenly flex items-center text-white px-4 ">
        {/* Logo */}
        <div className="border border-transparent hover:border-white">
          <Link to="/">
            <img
              src="public/amazon-icon/AmzonLogo.png"
              srcSet="../amazon-icon/AmzonLogo.png"
              className="w-auto h-8"
              alt="Amazon Logo"
            />
          </Link>
        </div>

        {/* Deliver To */}
        <div className="hidden  px-4 border border-transparent hover:border-white lg:block">
          <p className="text-sm">{t('deliver_to')}</p>
          <div className="flex items-center gap-1">
            <FaLocationDot />
            <p>Egypt</p>
          </div>
        </div>

        <form
          onSubmit={e => {
            handleClick(e);
          }}
          className="text-black px-4 flex h-10 flex-grow"
        >
          <select
            className={`bg-[#E6E6E6] px-2 rounded-lg  w-10 md:w-20 ${
              dir === 'rtl' ? 'rounded-l-none' : 'rounded-r-none'
            }  `}
            value={searchCategory}
            onChange={e => setSearchCategory(e.target.value)}
          >
            <option value="">{t('all')}</option>
            <option value="65527a31376a52ea210d9703">{t('electronics')}</option>
            <option value="65658ceae686c668a4d191ec">{t('kindle')}</option>
            <option value="6562f3891cf9fca552f8c5ac">
              {t('personal_care')}
            </option>
            <option value="65527c8c376a52ea210d970a">
              {t('personal_care')}
            </option>
            <option value="65527c22376a52ea210d9708">{t('coffee')}</option>
            <option value="65527ac3376a52ea210d9706">{t('watches')}</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon"
            className="w-full pl-2 text-base"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
          <button
            className={`bg-orange-300 flex rounded-lg  items-center p-2 cursor-pointer ${
              dir === 'ltr' ? 'rounded-l-none' : 'rounded-r-none'
            }`}
          >
            <FaSearch />
          </button>
        </form>

        {/* Language */}
        <div className="hidden lg:flex items-center p-1 border border-transparent hover:border-white">
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
            className="text-base font-bold bg-transparent border-none w-20"
            onChange={e => {
              setLang(e.target.value);
              i18n.changeLanguage(e.target.value);
              document.dir = e.target.value === 'en' ? 'ltr' : 'rtl';
              setDir(document.dir);
            }}
          >
            <option className="  bg-slate-900" value="en">
              EN
            </option>
            <option className="  bg-slate-900" value="ar">
              AR
            </option>
          </select>
        </div>

        {stateUser != null ? (
          <div className="hidden p-1 mx-2 border border-transparent hover:border-white lg:block">
            <p className="text-sm">
              {t('hello')}, {stateUser}
            </p>
            <div className="py-0 text-base font-bold bg-transparent border-none ">
              <div className="font-bold bg-slate-900  ">
                <DropDownNav />
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden p-1 mx-2 border border-transparent hover:border-white lg:block">
            <p className="text-sm">{t('hello_sign')}</p>
            <div className="py-0 text-base font-bold bg-transparent border-none ">
              <div className=" bg-slate-900">
                <Link to="/login">{t('sign_in')}</Link>
              </div>
            </div>
          </div>
        )}

        {/* Returns & Order */}
        <div className="hidden p-1 border border-transparent hover:border-white lg:block">
          <p className="text-sm font-bold">
            <Link to="/orders">{t('orders')}</Link>
          </p>
        </div>

        <Badge content={nums} className=" text-yellow-400 text-lg ms-5">
          <Link to="/cart">
            <div className="border border-transparent p-1 hover:border-white flex items-center">
              <BiCart className="text-5xl mt-2" />
              <p className="font-bold mt-5">{t('cart')}</p>
            </div>
          </Link>
        </Badge>
      </nav>

      <div className="bg-[#222F3D] flex items-center text-white text-sm pl-4">
        <div className="flex items-center gap-1 p-2 border border-transparent hover:border-white">
          <div className="cursor-pointer " onClick={() => {}}>
            <CustomDrawer lang={lang} onSetLang={setLang} />
          </div>
        </div>

        <ul className="flex items-center md:text-base">
          <li className="gap-1 p-1 border border-transparent cursor-pointer hover:border-white">
            <NavLink to="electronics">{t('electronics')}</NavLink>
          </li>
          <li className="gap-1 p-1 border border-transparent cursor-pointer hover:border-white">
            <NavLink to="kindle">{t('kindle')}</NavLink>
          </li>
          <li className="gap-1 p-1 border border-transparent cursor-pointer hover:border-white">
            <NavLink to="office-supplies">{t('office_supplies')}</NavLink>
          </li>
          <li className="gap-1 p-1 border border-transparent cursor-pointer hover:border-white">
            <NavLink to="personal-care">{t('personal_care')}</NavLink>
          </li>
          <li className="hidden gap-1 p-1 border border-transparent cursor-pointer hover:border-white lg:block">
            <NavLink to="coffee">{t('coffee')}</NavLink>
          </li>
          <li className="hidden gap-1 p-1 border border-transparent cursor-pointer hover:border-white lg:block">
            <NavLink to="watches">{t('watches')}</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;

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

const NavBar = () => {
  const navigate = useNavigate();
  const { lang, setLang } = useContext(langContext);
  const { nums } = useContext(cartItemsCountContext);
  const User = sessionStorage.getItem('UserUid');
  const dispatch = useDispatch();
  const stateUser = useSelector(state => state.User?.user?.UserName);
  const [searchValue, setSearchValue] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  function handleClick(e) {
    e.preventDefault();
    navigate(`/search?pro=${searchValue}&cat=${searchCategory}`);
    setSearchValue('');
    setSearchCategory('');
  }
  useEffect(() => {
    dispatch(fetchUser(User));
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
          <p className="text-sm">Deliver To</p>
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
            className="bg-[#E6E6E6] px-2 rounded-lg rounded-r-none w-10 md:w-fit "
            value={searchCategory}
            onChange={e => setSearchCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="65527a31376a52ea210d9703">Electronics</option>
            <option value="65658ceae686c668a4d191ec">Kindle</option>
            <option value="6562f3891cf9fca552f8c5ac">Office</option>
            <option value="65527c8c376a52ea210d970a">Health</option>
            <option value="65527c22376a52ea210d9708">Coffee</option>
            <option value="65527ac3376a52ea210d9706">Watches</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon"
            className="w-full pl-2 text-base"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
          <button className="bg-orange-300 flex rounded-lg rounded-l-none items-center p-2 cursor-pointer">
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
            className="text-base font-bold bg-transparent border-none"
            onChange={e => setLang(e.target.value)}
          >
            <option className=" bg-slate-900" value="en">
              EN
            </option>
            <option className=" bg-slate-900" value="ar">
              AR
            </option>
          </select>
        </div>

        {stateUser != null ? (
          <div className="hidden p-1 mx-2 border border-transparent hover:border-white lg:block">
            <p className="text-sm">Hello, {stateUser}</p>
            <div className="py-0 text-base font-bold bg-transparent border-none ">
              <div className="font-bold bg-slate-900  ">
                <DropDownNav />
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden p-1 mx-2 border border-transparent hover:border-white lg:block">
            <p className="text-sm">Hello, sign in</p>
            <div className="py-0 text-base font-bold bg-transparent border-none ">
              <div className=" bg-slate-900">
                <Link to="/login">Sign in</Link>
              </div>
            </div>
          </div>
        )}

        {/* Returns & Order */}
        <div className="hidden p-1 border border-transparent hover:border-white lg:block">
          <p className="text-xs">Returns</p>
          <p className="text-sm font-bold">& Order</p>
        </div>

        <Badge content={nums} className=" text-yellow-400 text-lg ms-5">
          <Link to="/cart">
            <div className="border border-transparent p-1 hover:border-white flex items-center">
              <BiCart className="text-5xl mt-2" />
              <p className="font-bold mt-5">Cart</p>
            </div>
          </Link>
        </Badge>
      </nav>

      <div className="bg-[#222F3D]  flex items-center text-white text-sm pl-4">
        <div className="flex items-center gap-1 p-2 border border-transparent hover:border-white">
          <div className="cursor-pointer " onClick={() => {}}>
            <CustomDrawer lang={lang} onSetLang={setLang} />
          </div>
        </div>

        <ul className="flex items-center">
          <li className="gap-1 p-1 border border-transparent cursor-pointer hover:border-white">
            <NavLink to="electronics">Electronics</NavLink>
          </li>
          <li className="gap-1 p-1 border border-transparent cursor-pointer hover:border-white">
            <NavLink to="kindle">Kindle</NavLink>
          </li>
          <li className="gap-1 p-1 border border-transparent cursor-pointer hover:border-white">
            <NavLink to="office-supplies">Office Supplies</NavLink>
          </li>
          <li className="gap-1 p-1 border border-transparent cursor-pointer hover:border-white">
            <NavLink to="personal-care">Health & Personal Care</NavLink>
          </li>
          <li className="hidden gap-1 p-1 border border-transparent cursor-pointer hover:border-white lg:block">
            <NavLink to="coffee">Coffee</NavLink>
          </li>
          <li className="hidden gap-1 p-1 border border-transparent cursor-pointer hover:border-white lg:block">
            <NavLink to="watches">Watches</NavLink>
          </li>
          <li className="hidden gap-1 p-1 border border-transparent cursor-pointer hover:border-white lg:block">
            <NavLink to="checkout">chekcout</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;

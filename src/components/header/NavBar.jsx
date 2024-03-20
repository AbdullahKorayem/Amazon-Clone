import React, { useContext, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { BiCart } from 'react-icons/bi';
import { langContext } from './../../contexts/lang';
import { Badge } from '@material-tailwind/react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import CustomDrawer from './../Drawer/CustomDrawer';
import { cartItemsCountContext } from '../../contexts/cartItemsCount';

const NavBar = () => {
  const navigate = useNavigate();
  const { lang, setLang } = useContext(langContext);
  const { nums } = useContext(cartItemsCountContext);
  const [searchValue, setSearchValue] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  function handleClick() {
    navigate(`/search?pro=${searchValue}&cat=${searchCategory}`);
  }
  return (
    <>
      <nav className="bg-[#131921] min-w-full w-[1000px] h-auto justify-evenly flex items-center text-white px-4 ">
        {/* Logo */}
        <div className="border border-transparent hover:border-white">
          <Link to="/">
            <img
              src="public/amazon-icon/AmzonLogo.png"
              srcSet="../amazon-icon/AmzonLogo.png"
              className="h-8 w-auto"
              alt="Amazon Logo"
            />
          </Link>
        </div>

        <div className="border border-transparent px-4 hover:border-white hidden md:block">
          <p className="text-sm">Deliver To</p>
          <div className="flex items-center gap-1">
            <FaLocationDot />
            <p>Egypt</p>
          </div>
        </div>

        <div className="text-black px-4 flex h-10 flex-grow">
          <select
            className="bg-[#E6E6E6] px-2 rounded-lg rounded-r-none "
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
          <div
            onClick={handleClick}
            className="bg-orange-300 flex rounded-lg rounded-l-none items-center p-2 cursor-pointer"
          >
            <FaSearch />
          </div>
        </div>

        <div className="flex items-center border border-transparent p-1 hover:border-white">
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
            className="bg-transparent font-bold text-base border-none"
            onChange={e => setLang(e.target.value)}
          >
            <option className=" bg-slate-900 " value="en">
              EN
            </option>
            <option className=" bg-slate-900" value="ar">
              AR
            </option>
          </select>
        </div>

        <div className="border border-transparent p-1 hover:border-white mx-2">
          <p className="text-sm">Hello, sign in</p>
          <div className="bg-transparent font-bold text-base py-0 border-none ">
            <div className=" bg-slate-900">
              <Link to="/login">Sign in</Link>
            </div>
          </div>
        </div>

        <div className="border border-transparent p-1 hover:border-white hidden lg:block">
          <p className="text-xs">Returns</p>
          <p className="font-bold text-sm">& Order</p>
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
      {/* Secondary Navigation */}
      <div className="bg-[#222F3D] min-w-full w-[1000px] flex items-center text-white text-sm pl-4">
        <div className="flex items-center gap-1 border border-transparent p-2 hover:border-white">
          <p className=" cursor-pointer" onClick={() => {}}>
            <CustomDrawer />
          </p>
        </div>

        <ul className="flex items-center">
          <li className="cursor-pointer gap-1 border border-transparent p-1 hover:border-white">
            <NavLink to="electronics">Electronics</NavLink>
          </li>
          <li className=" cursor-pointer gap-1 border border-transparent p-1 hover:border-white">
            <NavLink to="kindle">Kindle</NavLink>
          </li>
          <li className=" cursor-pointer gap-1 border border-transparent p-1 hover:border-white">
            <NavLink to="office-supplies">Office Supplies</NavLink>
          </li>
          <li className=" cursor-pointer gap-1 border border-transparent p-1 hover:border-white">
            <NavLink to="personal-care">Health & Personal Care</NavLink>
          </li>
          <li className=" cursor-pointer gap-1 border border-transparent p-1 hover:border-white hidden lg:block">
            <NavLink to="coffee">Coffee</NavLink>
          </li>
          <li className=" cursor-pointer gap-1 border border-transparent p-1 hover:border-white hidden lg:block">
            <NavLink to="watches">Watches</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;

import React, { useContext, useEffect } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { BiCart } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import { langContext } from './../../contexts/lang';
import { Badge } from '@material-tailwind/react';
import { Link, NavLink } from 'react-router-dom';
import CustomDrawer from './../Drawer/CustomDrawer';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/slices/User';
import DropDownNav from '../DropDownNav/DropDownNav';

const NavBar = () => {
	const User = sessionStorage.getItem('UserUid')

	const dispatch = useDispatch()

	const stateUser = useSelector((state) => state.User?.user?.UserName);


	useEffect(() => {
		dispatch(fetchUser(User))

	}, [])
	const { lang, setLang } = useContext(langContext);

	return (
		<>
			<nav className="bg-[#131921] min-w-full w-[1000px] h-auto justify-evenly flex items-center text-white px-4 ">
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
				<div className="hidden px-4 border border-transparent hover:border-white md:block">
					<p className="text-sm">Deliver To</p>
					<div className="flex items-center gap-1">
						<FaLocationDot />
						<p>Egypt</p>
					</div>
				</div>

				{/* Search */}
				<div className="flex flex-grow h-10 px-4 text-black">
					<select className="bg-[#E6E6E6] px-2 rounded-lg rounded-r-none ">
						<option>All</option>
					</select>
					<input
						type="text"
						placeholder="Search Amazon"
						className="w-full pl-2 text-base"
					/>
					<div className="flex items-center p-2 bg-orange-300 rounded-lg rounded-l-none">
						<FaSearch />
					</div>
				</div>

				{/* Language */}
				<div className="flex items-center p-1 border border-transparent hover:border-white">
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

				{/* Sign In */}
				{/* <div className="p-1 border border-transparent hover:border-white">
          <p className="text-sm">Hello, sign in</p>
          <select className="py-0 text-base font-bold bg-transparent border-none ">
            <option className=" bg-slate-900">
              <Link to="/login">Sign in</Link>
            </option>
          </select>
        </div> */}

				{stateUser != null ? (<div className="p-1 mx-2 border border-transparent hover:border-white">
					<p className="text-sm">Hello, {stateUser}</p>
					<div className="py-0 text-base font-bold bg-transparent border-none ">
						<div className="font-bold bg-slate-900 ">
							<DropDownNav />
						</div>
					</div>
				</div>) : (<div className="p-1 mx-2 border border-transparent hover:border-white">
					<p className="text-sm">Hello, sign in</p>
					<div className="py-0 text-base font-bold bg-transparent border-none ">
						<div className=" bg-slate-900">
							<Link to="/login">Sign in</Link>
						</div>
					</div>
				</div>)}

				{/* Returns & Order */}
				<div className="hidden p-1 border border-transparent hover:border-white lg:block">
					<p className="text-xs">Returns</p>
					<p className="text-sm font-bold">& Order</p>
				</div>

				{/* Cart */}
				<Badge content="10" className="text-lg text-yellow-400 ms-5">
					<Link to="/cart">
						<div className="flex items-center p-1 border border-transparent hover:border-white">
							<BiCart className="mt-2 text-5xl" />
							<p className="mt-5 font-bold">Cart</p>
						</div>
					</Link>
				</Badge>
			</nav>

			{/* Secondary Navigation */}
			<div className="bg-[#222F3D] min-w-full w-[1000px] flex items-center text-white text-sm pl-4">
				<div className="flex items-center gap-1 p-2 border border-transparent hover:border-white">
					<p className="cursor-pointer " onClick={() => { }}>
						<CustomDrawer />
					</p>
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
				
				</ul>
			</div>
		</>
	);
};

export default NavBar;

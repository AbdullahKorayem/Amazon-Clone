import 'rsuite/Dropdown/styles/index.css';
import { Dropdown, ButtonToolbar } from 'rsuite';
import { Link } from 'react-router-dom';



const accountHeaders = [
    { title: "Your Orders", path: "/your-orders" },
    { title: "Your Addresses", path: "/your-addresses" },
    { title: "Your Lists", path: "/your-lists" },
    { title: "Keep Shopping For", path: "/keep-shopping-for" },
    { title: "Your Recommendations", path: "/your-recommendations" },
    { title: "Your Prime Membership", path: "/your-prime-membership" },
    { title: "Memberships & Subscriptions", path: "/memberships-subscriptions" },
    { title: "Your Seller Account", path: "/your-seller-account" },
    { title: "Switch Accounts", path: "/switch-accounts" },
    { title: "Sign Out", path: "/sign-out" }
];


const CustomDropdown = ({ ...props }) => (
    
    <Dropdown {...props}>
        {accountHeaders.map((item, index) => (

            <Dropdown.Item key={index}>
                <Link className='text-lg text-black' to={item.path}>{item.title}</Link>
            </Dropdown.Item>
        ))}
    </Dropdown>
   
);

export default function DropDownNav() {

    return <ButtonToolbar>
        <CustomDropdown  title="Account & Lists" trigger="hover" className='z-50 text-lg font-bold text-black focus:outline-none focus:transparent' />
    </ButtonToolbar>
}




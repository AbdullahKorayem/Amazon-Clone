import 'rsuite/Dropdown/styles/index.css';
import { Dropdown, ButtonToolbar } from 'rsuite';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/slices/User';
const accountHeaders = [
  { title: 'Your Orders', path: '/your-orders' },
  { title: 'Your Addresses', path: '/your-addresses' },
  { title: 'Sign Out' },
];

const CustomDropdown = ({ dispatch, ...props }) => (
  <Dropdown {...props}>
    <Dropdown.Item>
      <Link className="text-lg text-black" to="/">
        Your Account
      </Link>
    </Dropdown.Item>
    <Dropdown.Item>
      <Link className="text-lg text-black" to="/">
        Your Order
      </Link>
    </Dropdown.Item>
    <Dropdown.Item>
      <Link className="text-lg text-black" to="/">
        Your Addresses
      </Link>
    </Dropdown.Item>
    <Dropdown.Item>
      <Link
        onClick={e => {
          e.preventDefault();
          window.sessionStorage.removeItem('UserUid');
          dispatch();
        }}
        className="text-lg text-black"
      >
        Sign Out
      </Link>
    </Dropdown.Item>
  </Dropdown>
);

export default function DropDownNav() {
  const dispatch = useDispatch();
  const User = sessionStorage.getItem('UserUid');
  return (
    <ButtonToolbar>
      <CustomDropdown
        dispatch={() => dispatch(fetchUser(User))}
        title="Account & Orders"
        trigger="hover"
        className="z-50 text-lg font-bold text-black focus:outline-none focus:transparent "
      />
    </ButtonToolbar>
  );
}

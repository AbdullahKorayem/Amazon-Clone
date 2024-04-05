import 'rsuite/Dropdown/styles/index.css';
import { Dropdown, ButtonToolbar } from 'rsuite';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/slices/User';
import { useTranslation } from 'react-i18next';

const CustomDropdown = ({ dispatch, ...props }) => {
  const { t } = useTranslation();
  return (
    <>
      <Dropdown {...props}>
        <Dropdown.Item>
          <Link className="text-lg text-black" to="/profile">
            {t('your_account')}
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="text-lg text-black" to="/orders">
            {t('your_order')}
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link
            onClick={e => {
              e.preventDefault();
              window.localStorage.removeItem('UserUid');
              dispatch();
            }}
            className="text-lg text-black"
          >
            {t('sign_out')}
          </Link>
        </Dropdown.Item>
      </Dropdown>
    </>
  );
};

export default function DropDownNav() {
  const dispatch = useDispatch();
  const User = localStorage.getItem('UserUid');
  const { t } = useTranslation();
  return (
    <ButtonToolbar>
      <CustomDropdown
        dispatch={() => dispatch(fetchUser(User))}
        title={t('account_orders')}
        trigger="hover"
        className="z-50 text-lg  font-bold text-black focus:outline-none focus:transparent "
      />
    </ButtonToolbar>
  );
}

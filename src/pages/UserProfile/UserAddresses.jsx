import { useTranslation } from 'react-i18next';
import { BiPlus } from 'react-icons/bi';
import { fetchUser } from '../../redux/slices/User';
import { useSelector, useDispatch } from 'react-redux';
import { useContext, useEffect, useState } from 'react';
import AddNewAddress from './AddNewAddress';
import { deleteAddress } from '../../firestore/firestore';
import EditAddress from './EditAddress';
function UserAddresses() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [change, setChange] = useState(false);
  const UserInfo = useSelector(state => state.User?.user?.UserInformation);
  const uId = useSelector(state => state.User?.user?.uid);
  useEffect(() => {
    dispatch(fetchUser());
  }, [change]);

  async function removeAddress(index) {
    const res = await deleteAddress(uId, index);
    setChange(!change);
  }
  return (
    <div className=" container my-10 xl:px-60 items-center mx-auto">
      <h1 className="text-2xl  mb-5 font-semibold">{t('your_addresses')}</h1>
      <div
        className="grid lg:grid-cols-3
       xl:gap-x-28  md:grid-cols-2 xs:grid-cols-1 justify-center gap-y-10 "
      >
        <div className=" flex justify-center items-center rounded-md w-80 h-60  border-2 border-gray-300  border-dashed ">
          <div>
            <AddNewAddress change={change} setChange={setChange} />
          </div>
        </div>
        {UserInfo[0].address &&
          UserInfo.map((user, index) => (
            <div className="relative rounded-md w-80 h-60 border-2 border-gray-300 p-5 ">
              <div key={user.uid} index={index} className="font-semibold">
                {user.fullName}
              </div>
              <div>{user.address.streetAddress}</div>
              <div>{user.address.state}</div>
              <div>{user.address.city}</div>
              <div>{user.address.country}</div>
              <div>Phone number: {user.phoneNumber}</div>
              <div className=" flex items-center absolute bottom-5">
                <EditAddress
                  change={change}
                  setChange={setChange}
                  index={index}
                />
                <div className="border-r h-4 border-gray-800 "></div>
                <button
                  onClick={() => {
                    removeAddress(index);
                  }}
                  className="text-sm border-none text-sky-800 cursor-pointer px-3"
                >
                  {t('remove')}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default UserAddresses;

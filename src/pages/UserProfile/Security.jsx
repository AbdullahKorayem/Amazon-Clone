import { useTranslation } from 'react-i18next';
import { fetchUser } from '../../redux/slices/User';
import { useSelector, useDispatch } from 'react-redux';
import { useContext, useEffect, useState } from 'react';
import {
  getCurrentUser,
  updateUserEmail,
  updateUserName,
  updateUserPhoneNumber,
} from '../../firestore/firestore';
import { Button, Modal, ModalHeader } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { dirContext } from './../../contexts/direction';

function Security() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const stateUser = useSelector(state => state.User?.user);

  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const { phoneNumber } = stateUser.UserInformation[0];
  const [render, setRender] = useState(true);
  console.log(stateUser);
  useEffect(() => {
    dispatch(fetchUser());
    const res = getCurrentUser();
    setEmail(res?.email);
    setId(res.uid);
  }, [render]);
  return (
    <div className=" container my-10 xl:px-80 items-center mx-auto">
      <h1 className="text-2xl  mb-5 font-semibold">{t('login_Security')}</h1>
      <div className=" px-5  border border-gray-200 rounded-lg shadow-md">
        <SecCard
          title={t('name')}
          value={stateUser.UserName}
          children={
            <UpdateName id={id} render={render} setRender={setRender} />
          }
        />
        <SecCard
          title={t('email')}
          value={email}
          children={
            <UpdateEmail render={render} setRender={setRender} email={email} />
          }
        />
        <SecCard
          title={t('mobile_number')}
          value={phoneNumber}
          children={
            <UpdatePhoneNumber
              id={id}
              phoneNumber={phoneNumber}
              render={render}
              setRender={setRender}
            />
          }
        />
        <SecCard
          title={t('password')}
          value="**********"
          children={<ResetPassword email={email} />}
        />
      </div>
    </div>
  );
}

export default Security;

function SecCard({ title, value, children }) {
  const { t } = useTranslation();

  return (
    <div className="border-b-2 py-5">
      <div className="flex justify-between">
        <span className="font-semibold text-lg">{title}</span>
        {children}
      </div>
      <div>{value ? value : `enter a ${title}`}</div>
    </div>
  );
}

function UpdateName({ id, render, setRender }) {
  const { t } = useTranslation();
  const { dir } = useContext(dirContext);
  const [openModal, setOpenModal] = useState(false);
  const [newName, setNewName] = useState('');
  async function updateName() {
    const res = await updateUserName(id, newName);
    setOpenModal(false);
    setNewName('');
    setRender(!render);
  }
  return (
    <>
      <Button
        color="white"
        size="sm"
        className="px-12 py-0  border-gray-300 shadow-md"
        onClick={() => setOpenModal(true)}
      >
        {t('edit')}
      </Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          <div className={dir === 'rtl' ? 'xl:me-[460px]' : ''}>
            {t('Change your name')}
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-black ">
              {t('new_name_description')}
            </p>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">{t('new_name')}</label>
              <input
                onChange={e => setNewName(e.target.value)}
                className="w-40 rounded-md"
                value={newName}
                type="text"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="warning" onClick={updateName}>
            {t('save_changes')}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function UpdateEmail({ render, setRender, email }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { dir } = useContext(dirContext);
  const [openModal, setOpenModal] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  async function updateEmail() {
    const res = await updateUserEmail(newEmail);
    localStorage.removeItem('UserUid');
    navigate('/login');
    setOpenModal(false);
    setNewEmail('');
    setRender(!render);
  }
  return (
    <>
      <Button
        color="white"
        size="sm"
        className="px-12 py-0  border-gray-300 shadow-md"
        onClick={() => setOpenModal(true)}
      >
        {t('edit')}
      </Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          <div className={dir === 'rtl' ? 'xl:me-[320px]' : ''}>
            {t('Change your email address')}
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-black ">
              <span className=" block mb-2 font-semibold">
                {t('Current email address:')} {email}
              </span>
              {t('new_email_description')}
            </p>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">{t('new_email')}</label>
              <input
                onChange={e => setNewEmail(e.target.value)}
                className="w-96 rounded-md"
                value={newEmail}
                type="email"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="warning" onClick={updateEmail}>
            {t('save_changes')}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function UpdatePhoneNumber({ id, render, setRender, phoneNumber }) {
  const { t } = useTranslation();
  const { dir } = useContext(dirContext);
  console.log(id);
  const [openModal, setOpenModal] = useState(false);
  const [newNumber, setNewNumber] = useState('');
  async function updatePhoneNumber() {
    const res = await updateUserPhoneNumber(id, newNumber);
    setOpenModal(false);
    setNewNumber('');
    setRender(!render);
  }

  return (
    <>
      <Button
        color="white"
        size="sm"
        className="px-12 py-0  border-gray-300 shadow-md"
        onClick={() => setOpenModal(true)}
      >
        {t('edit')}
      </Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          <div className={dir === 'rtl' ? 'xl:me-[410px]' : ''}>
            {t('Change Mobile Phone Number')}
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-black ">
              <span className="block font-semibold">
                {t('Old mobile phone number:')}
              </span>
              <span>
                <span className="font-semibold me-10">EG</span> {phoneNumber}
              </span>
            </p>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">{t('new_number')}</label>
              <input
                onChange={e => setNewNumber(e.target.value)}
                className="w-40 rounded-md"
                value={newNumber}
                type="text"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="warning" onClick={updatePhoneNumber}>
            {t('save_changes')}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function ResetPassword({ email }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <Button
        color="white"
        size="sm"
        className="px-12 py-0  border-gray-300 shadow-md"
        onClick={() => {
          sessionStorage.setItem('email', email);
          navigate(`/reset`);
        }}
      >
        Edit
      </Button>
    </>
  );
}

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import StarRating from '../StarRating/StarRating';
import UserRating from './../../components/UserRating/UserRating';
import { addNewUserRate } from '../../firestore/firestore';
import { useNavigate } from 'react-router-dom';

export default function SetRating({ product, productId, userUid }) {
  const [openModal, setOpenModal] = useState(false);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const totalRating = product.usersRating?.reduce((acc, avg) => {
    return acc + avg.rating;
  }, 0);
  const avgRating = totalRating / product.usersRating?.length;
  async function handleRating() {
    if (!userUid) {
      navigate('/login');
    } else {
      const res = await addNewUserRate(productId, {
        userUid,
        rating,
      });
    }
    setOpenModal(false);
    navigate(`/product/${productId}`);
  }

  return (
    <>
      <div className=" cursor-pointer flex" onClick={() => setOpenModal(true)}>
        {product.usersRating ? (
          <>
            <StarRating rate={avgRating} />
            <span className="mb-3">({product.usersRating.length})</span>
          </>
        ) : (
          <>
            <StarRating rate={product.rating} />
            <span className="mb-3">({product.ratingQuantity})</span>
          </>
        )}
      </div>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              please enter your Rating
            </h3>
            <div className="flex justify-center mb-5">
              <UserRating rating={rating} onSetRating={setRating} />
            </div>
            <div className="flex justify-center gap-4">
              <Button color="warning" onClick={handleRating}>
                finish Rating
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

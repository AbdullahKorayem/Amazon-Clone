import { useState } from 'react';

export default function DataStripe() {
  const itemName = 'FIREIMG';
  const itemPrice = 500;
  const [quantity, setQuantity] = useState(1);
  const [finalAmount, setFinalAmount] = useState(itemPrice);

  const checkout = async () => {
    try {
      const res = await fetch('http://localhost:8000/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          items: [
            {
              id: 1,
              quantity: quantity,
              price: itemPrice,
              name: itemName,
            },
            {
              id: 2,
              quantity: quantity,
              price: itemPrice,
              name: itemName,
            },
          ],
        }),
      });

      const data = await res.json();
      window.location = data.url;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      DataStripe
      <button onClick={checkout}>checkout</button>
    </div>
  );
}

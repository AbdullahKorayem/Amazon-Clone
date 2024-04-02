function Data() {
  const checkout = async () => {
    try {
      const res = await fetch('http://localhost:8000/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          // items: checkoutItem,
          items: [
            {
              id: 1,
              name: 'Item 1',
              price: 100,
              quantity: 1,
              image:
                'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600',
            },
            {
              id: 1,
              name: 'Item 1',
              price: 100,
              quantity: 1,
              image:
                'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600',
            },
          ],
        }),
      });

      const data = await res.json();
      window.location = data.url;
    } catch (error) {}
  };
  return (
    <div>
      <button onClick={() => checkout()}>Checkout</button>
    </div>
  );
}

export default Data;

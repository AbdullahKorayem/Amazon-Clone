import React from 'react';

export default function OrderCardItems({ items }) {
    return (
        <>
            {items.map((item, index) => (
                <section key={index} className='flex justify-between p-2 mb-4 rounded-md w-2/2'>
                    <li>{item.label} :</li>
                   
                    <li>{item.value !== '' ? item.value : '--'}</li>
                </section>
            ))}
        </>
    );
}

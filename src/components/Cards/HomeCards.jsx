'use client';
import { Card } from 'flowbite-react';
export const HomeCardFourImage = ({ children, title, link }) => {
  return (
    <Card className="mt-6 w-96">
      <div>
        <div color="blue-gray" className="mb-2 font-bold">
          <h1>{title}</h1>
        </div>
        <div className=" grid gap-5 grid-cols-2 grid-rows-2">{children}</div>
        <div className=" text-blue-700">{link}</div>
      </div>
    </Card>
  );
};

export function HomeCardOneImage({ children, title, link }) {
  return (
    <>
      <Card className="mt-6 w-96">
        <div className=" pt-6 pb-6">
          <div color="blue-gray" className="mb-2 font-bold">
            <h1 className=" px-8">{title}</h1>
          </div>
          <div>{children}</div>
          <div className="  px-8 text-blue-700">{link}</div>
        </div>
      </Card>
    </>
  );
}

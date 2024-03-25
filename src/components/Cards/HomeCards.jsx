'use client';
import { Card } from 'flowbite-react';
export const HomeCardFourImage = ({ children, title, link }) => {
  return (
    <Card className="mt-6 h-96 mx-auto  ">
      <div>
        <div color="blue-gray" className="mb-2 font-bold">
          <h1>{title}</h1>
        </div>
        <div className=" grid gap-5 grid-cols-2 grid-rows-2 ">{children}</div>
        <div className=" text-blue-700">{link}</div>
      </div>
    </Card>
  );
};

export function HomeCardOneImage({ children, title, link }) {
  return (
    <>
      <Card className="mt-6 h-96">
        <div className=" ">
          <div color="blue-gray" className=" font-bold">
            <h1 className=" ">{title}</h1>
          </div>
          <div>{children}</div>
          <div className="text-blue-700">{link}</div>
        </div>
      </Card>
    </>
  );
}

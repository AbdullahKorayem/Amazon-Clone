'use client';
import { Card } from 'flowbite-react';
export const HomeCardFourImage = ({ children, title, link }) => {
  return (
    <Card className="mt-6 h-96 mx-auto">
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
      <Card className="mt-6 h-96 relative">
        <div className="">
          <div color="blue-gray" className=" font-bold">
            {title && (
              <h1 className=" absolute text-xl top-7 text-gray-800">
                {title} | see more
              </h1>
            )}
          </div>
          <div className="mt-8 flex justify-center">{children}</div>
          <div className="text-blue-700">{link}</div>
        </div>
      </Card>
    </>
  );
}

import { Link } from 'react-router-dom';

function NotFound() {
  return (
    // Use flex, flex-col for vertical stacking, justify-center to center vertically, and items-center to center horizontally
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="mb-4 text-8xl font-semibold text-[#ffa41c]">404</h1>
      <p className="mb-4 text-xl text-gray-600">
        Oops! Looks like you're lost.
      </p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-16 w-16 text-[#ffa41c]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
      <p className="mt-4 text-xl text-gray-600">
        Let's get you back
        <Link href="/" className="text-[#ffa41c] font-bold ms-2">
          home
        </Link>
        .
      </p>
    </div>
  );
}

export default NotFound;

import { Link } from 'react-router-dom';

function ServiceUnavailable() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="mb-4 text-8xl font-semibold text-[#131921]">503</h1>
      <p className="mb-4 text-xl text-gray-600">
        Oops! Service Unavailable, Please Try Again
      </p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-16 w-16 text-[#131921]"
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
        <Link to="/" className="text-[#131921] font-bold ms-2">
          home
        </Link>
        .
      </p>
    </div>
  );
}

export default ServiceUnavailable;

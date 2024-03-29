import { Link } from 'react-router-dom';

function Canceled() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-6 md:mx-auto">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 mx-auto my-6 bg-"
        >
          <circle cx="12" cy="12" r="11" fill="red" />
          <path
            fill="#fff"
            d="M18.364 5.636a1 1 0 0 0-1.414 0L12 10.586 7.05 5.636a1 1 0 1 0-1.414 1.414L10.586 12 5.636 16.95a1 1 0 0 0 1.414 1.414L12 13.414l4.95 4.95a1 1 0 0 0 1.414-1.414L13.414 12l4.95-4.95a1 1 0 0 0 0-1.414z"
          />
        </svg>

        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Canceled
          </h3>
          <p className="text-gray-600 my-2">
            Sorry Your payment has been canceled.
          </p>
          <p>Please try agian later</p>
          <div className="py-10 text-center">
            <Link
              to="/"
              className="px-12 bg-slate-800 hover:bg-[#131921] text-white font-semibold rounded-2xl py-3"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Canceled;

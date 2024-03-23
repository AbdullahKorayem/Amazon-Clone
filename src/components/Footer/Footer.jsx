import React from 'react';

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="bg-gray-800 text-white">
        <button
          className="w-full py-4 font-bold text-xl border-gray-500"
          onClick={handleBackToTop}
        >
          Back to Top
        </button>
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Get to Know Us</h4>
              <ul className="list-none m-0 p-0">
                <li className="mb-2">About Amazon</li>
                <li className="mb-2">Careers</li>
                <li className="mb-2">Amazon Science</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Shop with Us</h4>
              <ul>
                <li className="mb-2">Your Account</li>
                <li className="mb-2">Your Orders</li>
                <li className="mb-2">Your Addresses</li>
                <li className="mb-2">Your Lists</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Make Money with Us</h4>
              <ul>
                <li className="mb-2">Sell on Amazon</li>
                <li className="mb-2">Advertise Your Products</li>
                <li className="mb-2">Fulfillment by Amazon</li>
                <li className="mb-2">Protect and Build Your Brand</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Let Us Help You</h4>
              <ul>
                <li className="mb-2">Help</li>
                <li className="mb-2">Shipping & Delivery</li>
                <li className="mb-2">Returns & Replacements</li>
                <li className="mb-2">Amazon App Download</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-10 pt-10 text-center">
            <div className="flex justify-center mb-4">
              <img
                className="w-15 h-12"
                src="https://logodownload.org/wp-content/uploads/2014/04/amazon-logo.png"
                alt="Amazon Logo"
              />
            </div>
            <p className="text-sm text-gray-400">© 2023 Amazon Clone, Inc.</p>
            <div className="flex justify-center space-x-4 mt-4">
              {/* Example social media icons */}
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

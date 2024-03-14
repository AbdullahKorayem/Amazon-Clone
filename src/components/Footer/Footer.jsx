import './Footer.css';
import React from 'react';

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="footer min-w-full w-[1000px]">
      <>
        <button className="back-to-top-button" onClick={handleBackToTop}>
          Back to Top
        </button>
        <div className="amazon-footer"></div>
        <footer className="amazon-footer">
          <div className="amazon-footer__container">
            <div className="amazon-footer__section">
              <h4>Get to Know Us</h4>
              <ul>
                <li>About Amazon</li>
                <li>Careers</li>
                <li>Amazon Science</li>
              </ul>
            </div>
            <div className="amazon-footer__section">
              <h4>Shop with Us</h4>
              <ul>
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>Your Addresses</li>
                <li>Your Lists</li>
              </ul>
            </div>
            <div className="amazon-footer__section">
              <h4>Make Money with Us</h4>
              <ul>
                <li>Protect and build your brand</li>
                <li>Advertise Your Products</li>
                <li>Sell on Amazon</li>
                <li>Fulfillment by Amazon</li>
              </ul>
            </div>
            <div className="amazon-footer__section">
              <h4>Let Us Help You</h4>
              <ul>
                <li>Help</li>
                <li>Shipping & Delivery</li>
                <li>Returns & Replacements</li>
                <li>Amazon App Download</li>
              </ul>
            </div>
          </div>

          <div className="amazon-footer__divider"></div>
          <div className="w-full flex gap-6 items-center justify-center py-6">
            <div>
              <img
                width={100}
                height={100}
                src="https://logodownload.org/wp-content/uploads/2014/04/amazon-logo.png"
              />
            </div>
            <div className="flex gap-2">
              <p
                className="flex gap-1 items-center justify-center border border-gray-500
                        hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1"
              >
                English
              </p>
            </div>
            <div
              className="flex gap-1 items-center justify-center border border-gray-500
                     hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1"
            >
              <img
                className="w-6"
                src="https://www.bing.com/th?id=OIP.4ve4zACsz1LZOlMcCUHGBAHaE8&w=142&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                alt="flag"
              />
              <p>Egypt</p>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}

export default Footer;

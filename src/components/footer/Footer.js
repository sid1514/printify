import React from "react";
import "../dashboard/home.css";
const Footer = () => {
    const socialMediaStyle="rounded full "
  return (
    <div className="p-10 text-white">
      <div className="md:flex justify-center pb-10">
        <div className="w-8/12">
          <img
            src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
            alt="logo"
            className="w-32"
          />
        </div>
        <div className="flex space-x-4 h-12">
          <a
            href="https://www.facebook.com/Printify/"
            rel="noopener noreferrer"
            target="_blank"
            title="facebook"
          >
            <img
              src="https://printify.com/wp-content/uploads/2019/07/facebook-icon.svg"
              alt="facebook"
              className={socialMediaStyle}
            />
          </a>
          <a
            href="https://www.instagram.com/printify/"
            rel="noopener noreferrer"
            target="_blank"
            title="instagram"
          >
            <img
              src="https://printify.com/wp-content/uploads/2019/01/instagram-icon.svg"
              alt="instagram"
              className={socialMediaStyle}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/printify/"
            rel="noopener noreferrer"
            target="_blank"
            title="linkedin"
          >
            <img
              src="https://printify.com/wp-content/uploads/2019/01/linkedin-icon.svg"
              alt="linkedin"
              className={socialMediaStyle}
            />
          </a>
          <a
            href="https://x.com/printify"
            rel="noopener noreferrer"
            target="_blank"
            title="x"
          >
            <img
              src="https://printify.com/wp-content/uploads/2023/09/X-Logo-Green.svg"
              alt="x"
              className={socialMediaStyle}
            />
          </a>
          <a
            href="https://www.youtube.com/c/printify"
            rel="noopener noreferrer"
            target="_blank"
            title="youtube"
          >
            <img
              src="https://printify.com/wp-content/uploads/2019/07/facebook-icon.svg"
              alt="youtube"
              className={socialMediaStyle}
            />
          </a>
          <a
            href="https://www.tiktok.com/@printifyofficial?lang=en"
            title="Tiktok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="32"
              height="32"
              ngsrc="https://printify.com/wp-content/uploads/2023/02/Tiktok-1.svg"
              alt="Tiktok"
              ng-img="true"
              src="https://printify.com/wp-content/uploads/2023/02/Tiktok-1.svg"
            />
          </a>
          <a
            href="https://www.reddit.com/r/Printify/"
            rel="noopener noreferrer"
            target="_blank"
            title="reddit"
          >
            <img
              src="https://printify.com/wp-content/uploads/2019/01/reddit-icon.svg"
              alt="reddit"
              className={socialMediaStyle}
            />
          </a>
        </div>
      </div>
      <div className="flex justify-evenly footerText ">
        <div className="space-y-2">
          <p className="font-bold">Integration</p>
          <ul className="space-y-2">
            <li>Shopify</li>
            <li> Etsy</li>
            <li>eBay</li>
            <li>Amazon</li> <li>TikTok</li> <li>Shop</li> <li>PrestaShop</li>
            <li>BigCommerce</li> <li>Wix WooCommerce</li> <li>Squarespace</li>
            <li>Printify API</li> <li>Printify Pop-Up Store</li>{" "}
            <li>Shutterstock</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="font-bold">Discover</p>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Guides</li>
            <li>Products</li>
            <li>Etsy print-on-demand</li>
            <li>Shopify print-on-demand</li>
            <li>Woocommerce print-on-demand</li>
            <li>Wix print-on-demand</li>
            <li>Squarespace print-on-demand</li>
            <li>Make Your Own Shirt</li>
            <li>Brands</li>
            <li>Pricing</li>
            <li>Shipping Rates</li>
            <li>Mockup Generator</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="font-bold">Start selling</p>
          <ul className="space-y-2">
            <li>Custom T-shirts</li>
            <li>Custom Hoodies</li>
            <li>Custom Mugs</li>
            <li>Custom Socks</li>
            <li>Custom Backpacks</li>
            <li>Custom Branding</li>
            <li>Sell on Etsy</li>
            <li>Sell on Social Media</li>
            <li>Free T-shirt Designs</li>
            <li>Custom Products</li>
            <li>Custom All-Over-Print Hoodies</li>
            <li>Start a Clothing Line</li>
            <li>Start POD Business</li>
            <li>Bulk Orders</li>
            <li>Transferring To Printify</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="font-bold">Printify</p>
          <ul className="space-y-2">
            <li>Print on Demand</li>
            <li>Print Providers</li>
            <li>Experts Program</li>
            <li>Printify Express Delivery</li>
            <li>Become a Partner</li>
            <li>About</li>
            <li>Printify Quality Promise</li>
            <li>Jobs</li>
            <li>Webinars</li>
            <li>Printing Profits Podcast</li>
            <li>Contact Us</li>
            <li>Affiliate</li>
            <li>Contact Sales</li>
            <li>POD Glossary</li>
            <li>Network Fulfillment Status</li>
            <li>Merchant Protection</li>
            <li>Security</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

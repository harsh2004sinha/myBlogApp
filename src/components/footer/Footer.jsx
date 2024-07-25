import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="overflow-hidden w-full py-10 bg-gray-900 border border-t-2 mt-0 border-t-black">
      <div className="relative z-10 max-w-1xl px-10">
        <div className="-m-10 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-slate-500">
                  &copy; Copyright 2024. All Rights Reserved by MyBlog.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-400">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link className="text-base font-medium text-slate-100 hover:text-gray-400" to="/">
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="text-base font-medium text-slate-100 hover:text-gray-400" to="/">
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="text-base font-medium text-slate-100 hover:text-gray-400" to="/">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-slate-100 hover:text-gray-400" to="/">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-400">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link className="text-base font-medium text-slate-100 hover:text-gray-400" to="/">
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="text-base font-medium text-slate-100 hover:text-gray-400" to="/">
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="text-base font-medium text-slate-100 hover:text-gray-400" to="/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-slate-100 hover:text-gray-400" to="/">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-400">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link className="text-base font-medium text-slate-100 hover:text-gray-400" to="/">
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="text-base font-medium text-slate-100 hover:text-gray-400" to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-slate-100 hover:text-gray-400" to="/">
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

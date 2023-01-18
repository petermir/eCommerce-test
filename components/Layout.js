import React, { useContext, useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { signOut, useSession } from 'next-auth/react';
import { Store } from '../utils/Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Menu } from '@headlessui/react';
import DropdownLink from './DropdownLink';
import { useRouter } from 'next/router';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faInstagram,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';

function Layout({ title, children }) {
  const { status, data: session } = useSession();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };

  const [query, setQuery] = useState('');

  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  return (
    <>
      <Head>
        <title>{title ? title + ' - NanaShop' : 'NanaShop'}</title>
        <meta name="description" content="Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={3}
      />

      <div className="flex min-h-screen flex-col justify-between">
        <header className="static">
          <nav className="flex h-24 items-center justify-between px-5 shadow-lg">
            <Link href="/" className="text-3xl font-bold text-gray-100">
              NanaShop
            </Link>

            <div className="flex">
              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                <Menu as="div" className="relative flex">
                  <Menu.Button className="text-gray-100 pr-2">
                    <ChevronDownIcon className="h-5 w-5 m-auto"></ChevronDownIcon>
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    {session.user.isAdmin && (
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/admin/dashboard"
                        >
                          Admin Dashboard
                        </DropdownLink>
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </DropdownLink>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login" className="p-2 text-gray-100">
                  Login
                </Link>
              )}
              <Link href="/cart" className="p-2">
                {cartItemsCount > 0 && (
                  <div className="ml-3 translate-y-1">
                    <span className="rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  </div>
                )}
                <ShoppingBagIcon className="h-7 w-7 text-gray-100"></ShoppingBagIcon>
              </Link>
            </div>
          </nav>
        </header>

        <main className="m-auto mt-4 px-5">
          <form
            onSubmit={submitHandler}
            className="mx-auto w-64 justify-center md:flex pb-8 text-center"
          >
            <input
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              className="rounded-tr-none rounded-br-none p-1 text-sm   focus:ring-0"
              placeholder="Search products"
            />
            <button
              className="rounded rounded-tl-none rounded-bl-none bg-amber-300 p-1 text-sm dark:text-black"
              type="submit"
              id="button-addon2"
            >
              <MagnifyingGlassIcon className="h-5 w-5"></MagnifyingGlassIcon>
            </button>
          </form>
          {children}
        </main>

        <footer>
          <div className="text-center">
            <h2 className="text-lg p-4 text-gray-100">Get in touch!</h2>

            <p className="text-center p-5 text-gray-100">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis obcaecati, nam molestias voluptatibus voluptatum
              accusantium quasi itaque, nemo assumenda et asperiores voluptate
              repellat repudiandae officia.
            </p>
          </div>
          {/* <div>
            <FontAwesomeIcon
              icon={faFacebook}
              className="p-4"
              style={{ width: '10rem', color: '#3b5998' }}
            />

            <FontAwesomeIcon
              icon={faInstagram}
              className="p-4"
              style={{
                width: '10rem',
                color: '#C13584',
              }}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="p-4"
              style={{ width: '10rem', color: '#00acee' }}
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="p-4"
              style={{ width: '10rem', color: '#FF0000' }}
            />
          </div> */}

          <div>
            <p className="text-gray-200">
              Copyright &copy; 2023 <em>NanaShop</em>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;

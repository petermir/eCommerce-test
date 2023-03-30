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
import { UserIcon } from '@heroicons/react/24/outline';
import Footer from './Footer';

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
        <title>{title ? title + ' - Demo-Shop' : 'Demo-Shop'}</title>
        <meta name="description" content="Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer
        position="top-center"
        autoClose={3000}
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

      <div className="flex min-h-screen m-auto flex-col justify-between">
        <header className="static w-full nav-shadow">
          <nav className="flex h-20 items-center justify-between px-5 bg-col1">
            <Link href="/" className="text-3xl font-bold text-gray-100">
              Demo-Shop
            </Link>

            <div className="flex">
              {status === 'loading' ? (
                <div className="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : session?.user ? (
                <Menu as="div" className="relative flex">
                  <Menu.Button className="text-gray-100 pr-2">
                    <ChevronDownIcon className="h-5 w-5 m-auto"></ChevronDownIcon>
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg z">
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
                  <UserIcon className="h-7 w-7 text-gray-100 translate-x-2"></UserIcon>
                </Link>
              )}
              <Link href="/cart" className="p-2 ml-14 -translate-x-4">
                {cartItemsCount > 0 && (
                  <div className="-translate-x-3 -translate-y-4 absolute">
                    <span className="rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  </div>
                )}
                <ShoppingBagIcon className="h-7 w-7 absolute right-1 text-gray-100"></ShoppingBagIcon>
              </Link>
            </div>
          </nav>
        </header>

        <main className="m-auto min-w-full mt-4 px-5 shadow-md relative">
          <form
            onSubmit={submitHandler}
            className="mx-auto w-64 justify-center flex pb-8 text-center"
          >
            <input
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              className="rounded-tr-none rounded-br-none p-1 text-sm   focus:ring-0"
              placeholder="Search products"
            />
            <button
              className="rounded rounded-tl-none rounded-bl-none bg-gray-700 p-1 text-sm dark:text-black"
              type="submit"
              id="button-addon2"
            >
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-100"></MagnifyingGlassIcon>
            </button>
          </form>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;

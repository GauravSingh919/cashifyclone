import { Fragment, useState, useEffect } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import DashboardModal from "./DashboardModal.jsx";
import { useLocation } from "react-router-dom";
import {
  Bars3CenterLeftIcon,
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  BuildingOfficeIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const parts = location.pathname.split("/");
  const pageRoute = parts[1];

  const navigationData = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: HomeIcon,
      current: true,
    },
    {
      name: "History",
      href: "/admin/history",
      icon: ClockIcon,
      current: false,
    },
    { name: "Balances", href: "#", icon: ScaleIcon, current: false },
    { name: "Cards", href: "#", icon: CreditCardIcon, current: false },
    { name: "Recipients", href: "#", icon: UserGroupIcon, current: false },
    { name: "Reports", href: "#", icon: DocumentChartBarIcon, current: false },
  ];
  const secondaryNavigation = [
    { name: "Settings", href: "#", icon: CogIcon },
    { name: "Help", href: "#", icon: QuestionMarkCircleIcon },
    { name: "Privacy", href: "#", icon: ShieldCheckIcon },
  ];

  const peoples = [
    {
      id: 1,
      name: "Sadil",
      email: "sadil@gmail.com",
      phonenumber: "987654321",
      href: "#",
      amount: "$20,000",
      currency: "USD",
      status: "success",
      date: "July 11, 2020",
      datetime: "2020-07-11",
    },
  ];
  const statusStyles = {
    success: "bg-green-100 text-green-800",
    processing: "bg-yellow-100 text-yellow-800",
    failed: "bg-gray-100 text-gray-800",
  };

  const [navigation, setNavigation] = useState(null);

  useEffect(() => {
    const ndata = navigationData.map((item) => {
      if (item.href === `/${pageRoute}`) {
        item.current = true;
        return item;
      } else {
        item.current = false;
        return item;
      }
    });
    setNavigation(ndata);
  }, [pageRoute]);

  const onClick = (item) => {
    setNavigation((prev) => {
      const data = prev.map((previtem) => {
        if (previtem.name === item.name) {
          previtem.current = true;
        } else {
          previtem.current = false;
        }
        return previtem;
      });
      return data;
    });
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="min-h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-cyan-700 pb-4 pt-5">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute right-0 top-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="relative ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <a href="/admin">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=300"
                        alt="Easywire logo"
                      />
                    </a>
                  </div>
                  <nav
                    className="mt-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto"
                    aria-label="Sidebar"
                  >
                    <div className="space-y-1 px-2">
                      {navigation &&
                        navigation.map((item) => (
                          <div key={item.name} onClick={() => onClick(item)}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-800 text-white "
                                  : "text-gray-400 hover:text-white hover:bg-gray-800 ",
                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold no-underline "
                              )}
                            >
                              <item.icon
                                className={`h-6 w-6 shrink-0 `}
                                aria-hidden="true"
                              />
                              <div>{item.name}</div>
                            </a>
                          </div>
                        ))}
                    </div>
                    <div className="mt-6 pt-6">
                      <div className="space-y-1 px-2">
                        {secondaryNavigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-cyan-100 hover:bg-cyan-600 hover:text-white"
                          >
                            <item.icon
                              className="mr-4 h-6 w-6 text-cyan-200"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-grow flex-col overflow-y-auto bg-cyan-700 pb-4 pt-5">
            <div className="flex flex-shrink-0 items-center px-4">
              <a href="/admin">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=300"
                  alt="Easywire logo"
                />
              </a>
            </div>
            <nav
              className="mt-5 flex flex-1 flex-col divide-y divide-cyan-800 overflow-y-auto"
              aria-label="Sidebar"
            >
              <div className="space-y-1 px-2">
                {navigation &&
                  navigation.map((item) => (
                    <div key={item.name} onClick={() => onClick(item)}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-800 text-white "
                            : "text-gray-400 hover:text-white hover:bg-gray-800 ",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold no-underline "
                        )}
                      >
                        <item.icon
                          className={`h-6 w-6 shrink-0 `}
                          aria-hidden="true"
                        />
                        <div>{item.name}</div>
                      </a>
                    </div>
                  ))}
              </div>
              <div className="mt-6 pt-6">
                <div className="space-y-1 px-2">
                  {secondaryNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-cyan-100 hover:bg-cyan-600 hover:text-white"
                    >
                      <item.icon
                        className="mr-4 h-6 w-6 text-cyan-200"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className={` flex flex-1 flex-col lg:pl-64  `}>
          <div className="flex h-16 flex-shrink-0 border-b border-gray-200 bg-white  lg:border-none">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            {/* Search bar */}
            <div className="flex flex-1 justify-between px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
              <div className="flex flex-1">
                <form className="flex w-full md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div
                      className="pointer-events-none absolute inset-y-0 left-0 flex items-center"
                      aria-hidden="true"
                    >
                      <MagnifyingGlassIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search-field"
                      name="search-field"
                      className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      placeholder="Search forms"
                      type="search"
                    />
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 lg:rounded-md lg:p-2 lg:hover:bg-gray-50">
                      <span className="absolute -inset-1.5 lg:hidden" />
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <span className="ml-3 hidden text-sm font-medium text-gray-700 lg:block">
                        <span className="sr-only">Open user menu for </span>
                        Emilia Birch
                      </span>
                      <ChevronDownIcon
                        className="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item> */}
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/admin"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Logout
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <main className="flex-1 pb-8">
            {/* Page header */}
            <div className="bg-white shadow">
              <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
                <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                  <div className="min-w-0 flex-1">
                    {/* Profile */}
                    <div className="flex items-center">
                      <img
                        className="hidden h-16 w-16 rounded-full sm:block"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                        alt=""
                      />
                      <div>
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 rounded-full sm:hidden"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                            alt=""
                          />
                          <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                            Good morning
                          </h1>
                        </div>
                        <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                          <dt className="sr-only">Company</dt>
                          <dd className="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                            <BuildingOfficeIcon
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            Chor Bazar
                          </dd>
                          <dt className="sr-only">Account status</dt>
                          <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                            <CheckCircleIcon
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                              aria-hidden="true"
                            />
                            Verified account
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
                Recent activity
              </h2>

              <div className="shadow sm:hidden">
                <ul
                  role="list"
                  className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
                >
                  {peoples.map((people) => (
                    <li key={people.id}>
                      <a
                        href={people.href}
                        className="block bg-white px-4 py-4 hover:bg-gray-50"
                      >
                        <span className="flex items-center space-x-4">
                          <span className="flex flex-1 space-x-2 truncate">
                            <DevicePhoneMobileIcon
                              className="h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="flex flex-col truncate text-sm text-gray-500">
                              <span className="truncate">{people.name}</span>
                              <span>
                                <span className="font-medium text-gray-900">
                                  {people.amount}
                                </span>{" "}
                                {people.currency}
                              </span>
                              <time dateTime={people.datetime}>
                                {people.date}
                              </time>
                            </span>
                          </span>
                          <ChevronRightIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <nav
                  className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3"
                  aria-label="Pagination"
                >
                  <div className="flex flex-1 justify-between">
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Previous
                    </a>
                    <a
                      href="#"
                      className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Next
                    </a>
                  </div>
                </nav>
              </div>

              {/* Activity table (small breakpoint and up) */}
              <div className="hidden sm:block">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                  <div className="mt-2 flex flex-col">
                    <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th
                              className="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                              scope="col"
                            >
                              Full Name
                            </th>
                            <th
                              className="bg-gray-50 px-6 py-3 text-center text-sm font-semibold text-gray-900"
                              scope="col"
                            >
                              Email
                            </th>
                            <th
                              className="bg-gray-50 px-6 py-3 text-center text-sm font-semibold text-gray-900 "
                              scope="col"
                            >
                              Phone
                            </th>
                            <th
                              className="bg-gray-50 px-6 py-3 text-center text-sm font-semibold text-gray-900"
                              scope="col"
                            >
                              Amount
                            </th>
                            <th
                              className="hidden bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900 md:block"
                              scope="col"
                            >
                              Status
                            </th>
                            <th
                              className="bg-gray-50 px-6 py-3 text-center text-sm font-semibold text-gray-900"
                              scope="col"
                            >
                              Date
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {peoples.map((people) => (
                            <tr key={people.id} className="bg-white">
                              <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                <div className="flex">
                                  <a
                                    href={people.href}
                                    className="group inline-flex space-x-2 truncate text-sm"
                                  >
                                    <DevicePhoneMobileIcon
                                      className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                    />
                                    <p className="truncate text-gray-500 group-hover:text-gray-900">
                                      {people.name}
                                    </p>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <div className="whitespace-nowrap px-6 py-4 text-right text-sm  font-medium text-gray-900">
                                  {people.email}
                                </div>
                              </td>
                              <td>
                                <div className="whitespace-nowrap px-6 py-4 text-right text-sm  font-medium text-gray-900">
                                  {people.phonenumber}
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                                <span className="font-medium text-gray-900 pr-1">
                                  {people.amount}
                                </span>
                                {people.currency}
                              </td>
                              <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block">
                                <span
                                  className={classNames(
                                    statusStyles[people.status],
                                    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize"
                                  )}
                                >
                                  {people.status}
                                </span>
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                                <time dateTime={people.datetime}>
                                  {people.date}
                                </time>
                              </td>
                              <td
                                className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500 cursor-pointer"
                                onClick={toggleModal}
                              >
                                View
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <DashboardModal
                        isOpen={isModalOpen}
                        onClose={toggleModal}
                      />
                      {/* Pagination */}
                      <nav
                        className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                        aria-label="Pagination"
                      >
                        <div className="hidden sm:block">
                          <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">1</span> to{" "}
                            <span className="font-medium">10</span> of{" "}
                            <span className="font-medium">20</span> results
                          </p>
                        </div>
                        <div className="flex flex-1 justify-between gap-x-3 sm:justify-end">
                          <a
                            href="#"
                            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                          >
                            Previous
                          </a>
                          <a
                            href="#"
                            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                          >
                            Next
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

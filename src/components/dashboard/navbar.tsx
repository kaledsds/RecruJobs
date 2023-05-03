import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { navItem } from "~/config/main-page-config";
import useScroll from "~/hooks/useScroll";
import ThemeToggler from "../theme-toggler";
import Spinner from "./Spinner";

const Navbar: React.FC = () => {
  const scrollPosition = useScroll();
  const { data: session, status } = useSession();

  return (
    <header
      className={
        scrollPosition === 0
          ? "navbar fixed right-0 top-0 z-10 flex w-[80%] items-center justify-between bg-base-200 bg-transparent px-24 py-4"
          : "navbar fixed right-0 top-0 z-10 w-[80%] bg-secondary-content px-24 py-4"
      }
    >
      <div className="form-control w-[40%]">
        <div className="input-group w-full ">
          <input
            type="text"
            placeholder="Search…"
            className="input w-full border-0"
          />
          <button className="fo btn-square btn border-0 bg-transparent ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* <div className="flex-1">
        <Link href="/" className="btn-ghost btn text-xl normal-case">
          RecruJobs
        </Link>
      </div> */}
      <nav className="mx-8 flex-none">
        {status == "loading" && (
          <div>
            <Spinner />
          </div>
        )}

        {status === "authenticated" && (
          <div className="flex items-center justify-center space-x-6">
            <ThemeToggler />

            <button className="btn-ghost btn-circle btn">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-primary badge-xs indicator-item"></span>
              </div>
            </button>

            <span className="hidden text-right lg:block">
              <span className="block text-sm font-medium text-black dark:text-white">
                {session?.user.name}
              </span>
              <span className="block text-xs">UX Designer</span>
            </span>

            <div className="dropdown-end dropdown online avatar">
              <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                <div className="w-10 rounded-full">
                  <Image
                    className="rounded-full"
                    src={session.user.image as string}
                    alt={session.user.name as string}
                    width={50}
                    height={50}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={() => void signOut()}>Sign Out</a>
                </li>
              </ul>
            </div>
          </div>
        )}

        {status === "unauthenticated" && (
          <ul className="menu menu-horizontal px-1">
            {navItem.map((item) => (
              <li key={item.id}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
            <ThemeToggler />
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

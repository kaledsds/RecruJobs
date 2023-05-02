import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { navItem } from "~/config/main-page-config";
import useScroll from "~/hooks/useScroll";
import ThemeToggler from "../theme-toggler";
// import Spinner from "./Spinner";

const Navbar: React.FC = () => {
  const scrollPosition = useScroll();
  const { data: session, status } = useSession();

  return (
    <header
      className={
        scrollPosition === 0
          ? "navbar fixed left-0 top-0 z-10 bg-base-200 bg-transparent px-24 py-4"
          : "navbar fixed left-0 top-0 z-10 bg-secondary-content px-24 py-4"
      }
    >
      <div className="flex-1">
        <Link href="/" className="btn-ghost btn text-xl normal-case">
          RecruJobs
        </Link>
      </div>
      <nav className="mx-8 flex-none">
        {/* {status == "loading" && (
          <div>
            <Spinner />
          </div>
        )} */}

        {status === "authenticated" && (
          <div className="flex items-center justify-center space-x-6">
            <Image
              className="rounded-full"
              src={session.user.image as string}
              alt={session.user.name as string}
              width={50}
              height={50}
            />
            <Link
              className="font-semibold decoration-2 underline-offset-4 hover:underline"
              href={`/profile/${session.user.id}`}
            >
              Profile
            </Link>
            <button
              className="font-semibold decoration-2 underline-offset-4 hover:underline"
              onClick={() => void signOut()}
            >
              Sign Out
            </button>
          </div>
        )}

        {status === "unauthenticated" && (
          <ul className="menu menu-horizontal px-1">
            {navItem.map((item) => (
              <li key={item.id}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
      <ThemeToggler />
    </header>
  );
};

export default Navbar;

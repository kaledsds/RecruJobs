import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <aside className=" fixed left-0 top-0 hidden h-screen w-[20%] flex-col overflow-y-hidden bg-base-200 shadow-lg duration-300 ease-linear lg:static lg:flex lg:translate-x-0 ">
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 px-4 py-4 pt-14 lg:mt-9 lg:px-6">
          <div>
            <h3 className="text-bodydark2 px-4 py-3 text-sm font-semibold">
              MENU
            </h3>
            <ul className="mb-6 flex flex-col gap-4">
              <ul className="menu rounded-box w-full bg-base-100 p-2">
                {/* <li className="menu-title">
                  <span>Navgation</span>
                </li> */}
                <li>
                  <Link href="/dashboard">
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
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Home
                  </Link>
                </li>
              </ul>
              <ul className="menu rounded-box w-full bg-base-100 p-2">
                <li className="menu-title">
                  <span>Posts</span>
                </li>
                <li>
                  <Link href="/myjobs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      className="mercado-match"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M13 4a3 3 0 00-3-3H3v14l5-4.5 5 4.5z"></path>
                    </svg>
                    Job post
                  </Link>
                </li>
                <li>
                  <Link href={"/resume"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
                    </svg>
                    My resume
                  </Link>
                </li>
                <li>
                  <Link href={"/crew-list"}>Crew List</Link>
                </li>
                <li>
                  <Link href={"/join-crew-list"}>Join Crew List</Link>
                </li>
                <li className="menu-title">
                  <span>Requests</span>
                </li>
                <li>
                  <Link href="/requests">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M22.84 10.22L21 6h-3.95V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2l2.22 5.18A3 3 0 007 13h14a2 2 0 001.84-2.78zM15.05 6h-6V5a1 1 0 011-1h4a1 1 0 011 1zM7 14h15v3a3 3 0 01-3 3H5a3 3 0 01-3-3V8.54l1.3 3A4 4 0 007 14z"></path>
                    </svg>
                    Job Requests
                  </Link>
                </li>
                <li>
                  <Link href="/replys">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M12 6.5a4.5 4.5 0 114.5 4.5A4.49 4.49 0 0112 6.5zm6 6.5h-3a3 3 0 00-3 3v6h9v-6a3 3 0 00-3-3zM6.5 6A3.5 3.5 0 1010 9.5 3.5 3.5 0 006.5 6zm1 9h-2A2.5 2.5 0 003 17.5V22h7v-4.5A2.5 2.5 0 007.5 15z"></path>
                    </svg>
                    replys
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

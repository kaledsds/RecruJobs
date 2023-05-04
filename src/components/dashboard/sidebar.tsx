import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <aside className="dark:bg-boxdark fixed  left-0 top-0 z-50 flex h-screen w-[20%] flex-col overflow-y-hidden bg-black duration-300 ease-linear lg:static lg:translate-x-0 ">
      <div className="py-5.5 lg:py-6.5 flex items-center justify-between gap-2 px-6">
        <Link href="/" className="btn-ghost btn text-xl normal-case">
          RecruJobs
        </Link>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          <div>
            <h3 className="text-bodydark2 mb-4 ml-4 text-sm font-semibold">
              MENU
            </h3>
            <ul className="mb-6 flex flex-col gap-1.5"></ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

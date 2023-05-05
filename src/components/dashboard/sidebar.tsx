const Sidebar: React.FC = () => {
  return (
    <aside className="dark:bg-boxdark fixed left-0 top-0 flex h-screen w-[20%] flex-col overflow-y-hidden bg-base-300 shadow-lg duration-300 ease-linear lg:static lg:translate-x-0 ">
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 px-4 py-4 pt-14 lg:mt-9 lg:px-6">
          <div>
            <h3 className="text-bodydark2 mb-4 ml-4 text-sm font-semibold">
              MENU
            </h3>
            <ul className="mb-6 flex flex-col gap-1.5">
              <ul className="menu rounded-box w-full bg-base-100 p-2">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
              <ul className="menu rounded-box w-full bg-base-100 p-2">
                <li className="menu-title">
                  <span>Category</span>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li className="menu-title">
                  <span>Category</span>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
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

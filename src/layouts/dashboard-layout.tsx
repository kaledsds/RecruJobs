import Navbar from "~/components/dashboard/navbar";
import Sidebar from "~/components/dashboard/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <Navbar />
        <div className="flex h-full">
          <Sidebar />
          <main className="mt-16 w-full overflow-y-auto p-4 md:p-6 2xl:p-10">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;

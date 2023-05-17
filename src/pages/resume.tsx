import type { NextPage } from "next";
import AddResume from "~/components/dashboard/jobs/add-resume";

import DashboardLayout from "~/layouts/dashboard-layout";
import { api } from "~/utils/api";

const Resume: NextPage = () => {
  const { data: resume } = api.resume.getResume.useQuery();

  return (
    <>
      <DashboardLayout>
        <main className="rounded-box flex flex-col items-center justify-center gap-6 bg-base-100 py-6">
          {resume ? (
            <div className="rounded-box flex flex-col gap-8 bg-base-300 py-6">
              <div className="px-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="200"
                  height="200"
                  focusable="false"
                >
                  <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
                </svg>
              </div>
              <div className="flex justify-between px-20">
                <a
                  href={resume?.url}
                  target="_blank"
                  className="btn-primary btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-arrow-up-right"
                  >
                    <line x1="7" x2="17" y1="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
                {/* <button>edit</button> */}
                <button className="btn-primary btn border-red-500 bg-red-500 hover:border-red-600 hover:bg-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-trash-2"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line>
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <AddResume />
          )}
        </main>
      </DashboardLayout>
    </>
  );
};

export default Resume;

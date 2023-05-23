import { ArrowUpRight, Trash2 } from "lucide-react";
import type { NextPage } from "next";
import AddResume from "~/components/dashboard/jobs/add-resume";

import DashboardLayout from "~/layouts/dashboard-layout";
import { api } from "~/utils/api";

const Resume: NextPage = () => {
  const { data: resume, isLoading } = api.resume.getResume.useQuery();
  if (isLoading) {
    return null;
  }

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
                  <ArrowUpRight />
                </a>
                {/* <button>edit</button> */}
                <button className="btn-primary btn border-red-500 bg-red-500 hover:border-red-600 hover:bg-red-600">
                  <Trash2 />
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

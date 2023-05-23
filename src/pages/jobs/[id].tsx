import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import DashboardLayout from "~/layouts/dashboard-layout";
import { api } from "~/utils/api";
import Link from "next/link";
import Recommended from "~/components/dashboard/jobs/recommended";
import { useSession } from "next-auth/react";
import JobApply from "~/components/dashboard/requests/job-apply";

const Jobs: NextPage = () => {
  const { query } = useRouter();
  const { data: session } = useSession();

  const { data: job } = api.jobs.getJobById.useQuery({
    id: query.id as string,
  });

  return (
    <>
      <Head>
        <title>RecruJobs</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <main>
          <div className="rounded-box flex w-full gap-3 bg-base-300 p-4 shadow-lg">
            <div>
              <Recommended />
            </div>
            <div className="rounded-box flex-grow bg-base-100 p-4">
              <div className="flex justify-between">
                <h1 className="card-title font-bold text-primary-focus">
                  {job?.title}
                </h1>
                <p className="mr-1 flex items-center justify-end text-slate-500">
                  {job?.createdAt.toLocaleString()}
                </p>
                <Link
                  href="/dashboard"
                  className="btn-circle btn border-0 bg-transparent text-slate-500 hover:bg-base-300"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </Link>
              </div>

              <p>{job?.lastdate}</p>
              <h2 className="card-title">
                {job?.jobposition} at {job?.companyname}
              </h2>
              <p>{job?.type}</p>
              <p>{job?.hoursofwork}</p>
              <p>{job?.location}</p>
              <p>{job?.salary}</p>

              <h1 className="card-title"> About the job </h1>
              <p>not yet</p>
              <div className="card-actions justify-end">
                {job?.userId !== session?.user.id && job?.id && (
                  <JobApply jobId={job.id} />
                )}
              </div>
            </div>
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

export default Jobs;

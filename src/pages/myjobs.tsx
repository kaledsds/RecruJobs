import React from "react";
import Recruite from "~/components/dashboard/jobs/create-job";
import DashboardLayout from "~/layouts/dashboard-layout";
import type { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import { api } from "~/utils/api";
import MyjobPost from "~/components/dashboard/jobs/my-job-post";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  return { props: {} };
};

const MyJobs: NextPage = () => {
  const { data: userJobs } = api.jobs.getUserJobs.useQuery();

  return (
    <>
      <DashboardLayout>
        <div className="flex gap-3"></div>
        <Recruite />
        {userJobs?.jobs.map((job) => (
          <MyjobPost key={job.id} job={job} />
        ))}
      </DashboardLayout>
    </>
  );
};

export default MyJobs;

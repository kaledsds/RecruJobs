import React from "react";
import Recruite from "~/components/dashboard/jobs/create-job";
import DashboardLayout from "~/layouts/dashboard-layout";
import type { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";

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
  return (
    <>
      <DashboardLayout>
        <Recruite />
      </DashboardLayout>
    </>
  );
};

export default MyJobs;

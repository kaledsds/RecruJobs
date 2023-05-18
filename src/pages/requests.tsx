import type { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import React from "react";
import JobRequests from "~/components/dashboard/requests/job-requests";
import DashboardLayout from "~/layouts/dashboard-layout";
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

const Requests: NextPage = () => {
  return (
    <>
      <DashboardLayout>
        <JobRequests />
      </DashboardLayout>
    </>
  );
};

export default Requests;

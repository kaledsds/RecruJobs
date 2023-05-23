import type { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import React from "react";
import RequestsReply from "~/components/dashboard/requests/requests-reply";
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

const Replys: NextPage = () => {
  return (
    <>
      <DashboardLayout>
        <RequestsReply />
      </DashboardLayout>
    </>
  );
};

export default Replys;

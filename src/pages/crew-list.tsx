import { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import React from "react";
import DashboardLayout from "~/layouts/dashboard-layout";
import { authOptions } from "~/server/auth";
import Crew from "~/components/dashboard/crewlist/crew";

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

const CrewList: NextPage = () => {
  return (
    <>
      <DashboardLayout>
        <div className="flex flex-col gap-2">
          <div className="rounded-box flex w-full items-center justify-between bg-base-200 p-5">
            <h1 className="text-2xl font-semibold">Join Crew List</h1>
            <button className="btn-primary btn">join</button>
          </div>
          <Crew />
        </div>
      </DashboardLayout>
    </>
  );
};

export default CrewList;

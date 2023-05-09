import type { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import Head from "next/head";
import Recommended from "~/components/dashboard/jobs/recommended";
import SideCard from "~/components/dashboard/side-card";
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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RecruJobs</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <DashboardLayout>
          <main className="flex">
            <div className="card rounded-box mr-4 grid h-full flex-grow bg-base-300 px-4 py-4">
              <Recommended />
            </div>
            <SideCard />
          </main>
        </DashboardLayout>
      </>
    </>
  );
};

export default Home;

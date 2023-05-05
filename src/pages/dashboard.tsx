import type { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import Head from "next/head";
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
          {
            <main>
              <div className="flex h-screen flex-col">
                <div className="card rounded-box grid h-auto place-items-center bg-base-300 px-4 py-4">
                  <div className="card rounded-box grid h-20 place-items-center bg-base-100 px-4 py-4">
                    content
                  </div>
                  <div className="card rounded-box grid h-20 place-items-center bg-base-100 px-4 py-4">
                    content
                  </div>
                  <div className="card rounded-box grid h-20 place-items-center bg-base-100 px-4 py-4">
                    content
                  </div>
                  <div className="card rounded-box grid h-20 place-items-center bg-base-100 px-4 py-4">
                    content
                  </div>
                </div>
                {/* <div className="divider"></div> */}
              </div>
            </main>
          }
        </DashboardLayout>
      </>
    </>
  );
};

export default Home;

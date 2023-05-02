import type { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { authOptions } from "~/server/auth";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log(session);

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
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>RecruJobs</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>User: {session?.user.name}</p>
        <button className="btn-primary btn" onClick={() => void signOut()}>
          SignOut
        </button>
      </main>
    </>
  );
};

export default Home;

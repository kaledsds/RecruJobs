import type { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import Head from "next/head";
import AboutSection from "~/components/main-page/about-section";
import ContactSection from "~/components/main-page/contact-section";
import HeroSection from "~/components/main-page/hero-section";
import HIWSection from "~/components/main-page/hiw-section";
import Navbar from "~/components/main-page/navbar";
import ServiceSection from "~/components/main-page/service-section";
import { authOptions } from "~/server/auth";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
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
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <HIWSection />
        <ContactSection />
      </>
    </>
  );
};

export default Home;

import { type NextPage } from "next";
import Head from "next/head";
import HeroSection from "~/components/main-page/hero-section";
import Navbar from "~/components/main-page/navbar";

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
      </>
    </>
  );
};

export default Home;

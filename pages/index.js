import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter Clone V4</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen max-w-7xl mx-auto">
        {/** sidebar */}
        <Sidebar />
        {/**feed */}

        {/**widgets */}

        {/** Model */}
      </main>
    </>
  );
}

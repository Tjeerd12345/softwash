import Head from "next/head";
import RekenModule from "@/components/RekenModule";

export default function Home() {
  return (
    <>
      <Head>
        <title>Softwash Rekenmodule</title>
      </Head>
      <main className="min-h-screen bg-gray-100 py-10 px-4">
        <RekenModule />
      </main>
    </>
  );
}

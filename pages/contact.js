import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>hugo | Contact</title>
      </Head>
      <div>
        <h1 className="text-3xl font-bold mb-2">Contact</h1>
        <p>
          The best way to contact me, is to send me an email at {""}
          <a href="mailto:wheredidhugo@proton.me">
            <span className="underline">wheredidhugo@proton.me</span>
          </a>
        </p>
      </div>
    </>
  );
}

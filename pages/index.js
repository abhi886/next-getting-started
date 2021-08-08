import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Alert from "../components/alert";

export default function Home() {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hi. I'm Abhishekh Maharjan.</p>
          <p>
            (This is a sample website I built on{" "}
            <a href='https://nextjs.org/learn'>our Next.js</a>.)
          </p>
        </section>
      </Layout>
      <Alert type='error'>
        <p>This is alert Example</p>
      </Alert>
    </>
  );
}

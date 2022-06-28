import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>File Metadata Microservice</title>
        <meta
          name="description"
          content="Microservice API to get file information such us name, type and size"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>File Metadata Microservice</h1>

      <main className={styles.main}>
        <p className={styles.description}>Usage</p>
        <span className={styles.span}>
          Choose a file then click the upload button
        </span>
        <form
          className={styles.form}
          action="/api/fileanalyse"
          method="post"
          encType="multipart/form-data"
        >
          <input className={styles.input} name="upfile" type="file" />
          <br />
          <button className={styles.btn} type="submit">
            Upload
          </button>
        </form>
      </main>
    </div>
  );
}

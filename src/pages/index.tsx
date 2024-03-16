import Head from "next/head";
import getConfig from 'next/config'
import classNames from 'classnames';
import styles from '@/styles/Home.module.scss';
import TrendChart from "@/components/TrendChart";

const { publicRuntimeConfig } = getConfig()

export default function Home() {
  return (
    <>
      <div className={classNames(styles.content)}>
        <Head>
          <title>{publicRuntimeConfig.PAGE_TITLE}</title>
        </Head>
        <TrendChart />
      </div>
    </>
  );
}

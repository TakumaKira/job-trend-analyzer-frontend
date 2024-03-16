import Head from "next/head";
import getConfig from 'next/config'
import classNames from 'classnames';
import styles from '@/styles/Home.module.scss';

const { publicRuntimeConfig } = getConfig()

export default function Home() {
  return (
    <>
      <div className={classNames(styles.content)}>
        <Head>
          <title>{publicRuntimeConfig.PAGE_TITLE}</title>
        </Head>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem expedita, ducimus, repellat obcaecati similique tempore dolores inventore asperiores cumque temporibus praesentium maxime ipsum cum ut rem sint at doloribus ad.</p>
      </div>
    </>
  );
}

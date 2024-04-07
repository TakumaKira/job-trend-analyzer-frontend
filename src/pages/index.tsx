import Head from "next/head";
import getConfig from 'next/config'
import classNames from 'classnames';
import styles from '@/styles/Home.module.scss';
import { JobTrendChart, Result } from "@takumakira-individual/tk-ui-react-v2.ui.job-trend-chart";

const { publicRuntimeConfig } = getConfig()

type JobTrendData = { job_title: string, job_location: string, count: number }
const jobTrendDataValidator = (data: any): JobTrendData => {
  if (typeof data?.job_title !== 'string') throw new Error('job_title must be a string')
  if (typeof data?.job_location !== 'string') throw new Error('job_location must be a string')
  if (typeof data?.count !== 'number') throw new Error('count must be a number')
  return { job_title: data.job_title, job_location: data.job_location, count: data?.count }
}
const labelGetter = (data: Result<JobTrendData>) => `${data.job_title}/${data.job_location}`
const countGetter = (data: Result<JobTrendData>) => data.count

export default function Home() {
  return (
    <div className={classNames(styles.content)}>
      <Head>
        <title>{publicRuntimeConfig.PAGE_TITLE}</title>
      </Head>
      <JobTrendChart
        jobTrendDataApiEndpoint={process.env.NEXT_PUBLIC_API_ENDPOINT!}
        jobTrendDataValidator={jobTrendDataValidator}
        labelGetter={labelGetter}
        countGetter={countGetter}
      />
    </div>
  );
}

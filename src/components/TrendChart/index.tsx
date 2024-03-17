import { useCallback, useEffect, useState } from 'react';
import { LineChart, LineChartProps } from '@takumakira-individual/tk-ui-react-v2.ui.line-chart';
import { useApi } from '@takumakira-individual/tk-ui-react-v2.hooks.use-api';

const getTrendData = () => fetch(process.env.NEXT_PUBLIC_API_ENDPOINT as string).then(res => res.json())

const colors = [
  'rgb(75, 192, 192)',
  'rgb(192, 75, 192)',
  'rgb(192, 192, 75)',
  'rgb(75, 75, 192)',
  'rgb(75, 192, 75)',
  'rgb(192, 75, 75)',
  'rgb(75, 75, 75)',
  'rgb(192, 192, 192)',
  'rgb(75, 134, 192)',
  'rgb(134, 75, 192)',
  'rgb(192, 134, 75)',
]

export default function TrendChart() {
  const { isLoading, error, data: rawData } = useApi('trendData', getTrendData)
  const [trendData, setTrendData] = useState<LineChartProps['data']>()

  const convertToChartData = useCallback(() => {
    if (isLoading || !rawData) return
    const scrapeDates = rawData.flatMap(({ results }: { results: { job_title: string, job_location: string, scrape_date: string, count: number }[] }) => results.map(({ scrape_date }) => scrape_date.split(' ')[0]))
    const uniqueScrapeDates = Array.from<string>(new Set(scrapeDates)).sort()
    const datasets = rawData.map(({ url, results }: { url: string, results: { job_title: string, job_location: string, scrape_date: string, count: number }[] }, i: number) => ({
      label: `${results[0].job_title} / ${results[0].job_location}`,
      data: results.map(({ count }) => count),
      fill: false,
      borderColor: colors[i] || 'rgb(75, 192, 192)',
      tension: 0.1,
      pointStyle: false,
    }))
    setTrendData({
      labels: uniqueScrapeDates,
      datasets
    })
  }, [isLoading, rawData])
  useEffect(convertToChartData, [convertToChartData])

  if (!trendData) return <span>Loading...</span>
  if (error) return <span>{'An error has occurred: ' + error.message}</span>
  return (
    <LineChart data={trendData} />
  )
}

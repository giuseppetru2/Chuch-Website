import Head from 'next/head'

import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'
import PostBlock from '../components/post-block'
import useSWR from 'swr';
import { CMS_NAME } from '../lib/constants'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Blog() {
  const { data, error } = useSWR(`/api/events`, fetcher)

  return (
    <>
      <Layout>
        <Head>
          <title>Blog | {CMS_NAME}</title>
        </Head>
        <Jumbotron 
          title="Events"
          subtitle=""
          imageUrl="/img/blog-index.jpg"
        />
        <div className="mw9 center">
          <ul className="flex-ns flex-wrap mhn1-ns pa5-m justify-center">
          {data && data.data &&
            data.data.map(item => (
              <div key={item[1]} className="flex w-30-l w-50-m ph2-ns pv2-ns ">
                <PostBlock 
                  title={item[1]}
                  description={item[2]}
                  date={item[0]}
                />
              </div>
            ))
          }
          </ul>
        </div>
      </Layout>
    </>
  )
}
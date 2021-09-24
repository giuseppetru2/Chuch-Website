import Head from 'next/head'
import useSWR from 'swr';

import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'
import ShortText from '../components/short-text'
import TextAndImage from '../components/text-and-image'

import { getHomePageData } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Index({ homeData }) {
  const { data, error } = useSWR(`/api/verse`, fetcher)

  return (
    <>
      <Layout>
        <Head>
          <title>Home | {CMS_NAME}</title>
        </Head>
        <Jumbotron 
          title={homeData.title}
          subtitle={homeData.subtitle}
          imageUrl={homeData.image}
        />
        {data && data.data && data.data[0] &&
          <ShortText 
          heading={data.data[0][0]}
          text={data.data[0][1]}
          />
        }
        <TextAndImage 
          heading={homeData.values.heading}
          text={homeData.values.text}
          buttonText={homeData.values.buttonText}
          buttonLink={homeData.values.buttonLink}
          image={homeData.values.image}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const homeData = getHomePageData()
  return {
    props: { homeData },
  }
}

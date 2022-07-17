import Head from 'next/head'
import {useEffect, useState} from 'react';
import CrownList from '../components/CrownList';
import LoadingIndicator from '../components/LoadingIndicator';
import RankList from '../components/RankList';
import Image from 'next/image';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [allRank, setAllRank] = useState([]);
  const [allCrowns, setAllCrowns] = useState([]);

  async function getAllRank() {
    const data = await fetch('/api/rank');
    const json = await data.json();
    setAllRank(json.scores);
  }

  async function getAllCrowns() {
    const data = await fetch('/api/crowns');
    const json = await data.json();
    setAllCrowns(json.scores);
  }

  useEffect(() => {
    if (!isLoading) return 

    getAllRank();
    getAllCrowns();
  }, [isLoading])

  useEffect(() => {
    if (allRank.length > 0 && allCrowns.length > 0) {
      setIsLoading(false);
    }
  }
    , [allRank, allCrowns])

  return (
    <div>
      <Head>
        <title>Stumble Guys Ranking - Rahmat Agung Julians</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='container items-center d-flex flex-column text-center'>
        <div className='pt-5 mx-auto'>
          <Image src='/logo.png' alt='Stumble Guys Logo' layout='fixed' width={250} height={150} />
        </div>
        <h1 className='mx-auto'>Rankings</h1>
        <p className='mb-5'>by Rahmat Agung Julians</p>

        <LoadingIndicator isLoading={isLoading} />

        <div className='row mb-5'>
          <div className='col mb-5 mb-md-0'>
            { !isLoading && <RankList allRank={allRank} /> }
          </div>
          <div className='col'>
            { !isLoading && <CrownList allCrowns={allCrowns} /> }
          </div>
        </div>
      </main>
    </div>
  )
}

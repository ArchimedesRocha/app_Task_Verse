import ContentIndex from '../components/ContentIndex'
import Head from "next/head"

import bgHero from "../../public/assets/bg-hero.png"

export default function Home() {
  return (
    <>
      <Head>
        <title>Task Verse | Organize o seu universo de tasks.</title>
      </Head>
      <ContentIndex />
    </>
  );
}

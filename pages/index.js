import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>AirBnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*  Header  */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* main section */}
      <main className="max-w-7xl  mx-auto px-8 md:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
            {exploreData.map((item) => (
              <SmallCard
                image={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-6 text">Live Anywhere</h2>
          <div className="flex space-x-4 overflow-scroll scrollbar-hide">
            {cardsData?.map((item) => (
              <MediumCard image={item.img} title={item.title} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}

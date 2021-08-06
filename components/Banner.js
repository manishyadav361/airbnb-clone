import Image from "next/image";
function Banner() {
  return (
    <div className="relative h-[300px] sm:[400px] lg:[500px] xl:[600px] 2xl:[700px] ">
      <Image src="/images/airbnb-banner.png" layout="fill" objectFit="cover" />
      <div
        className="absolute top-1/2  w-full text-center
       "
      >
        <p className="text-sm sm:text-lg">Not sure where to go?</p>
        <button className="text-purple-500 bg-white px-8 py-3 shadow-md rounded-full font-bold my-3 hover:shadow-2xl active:scale-90 transition duration-150">
          i am flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;

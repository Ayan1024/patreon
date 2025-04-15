import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 text-white">
        <div className="font-bold text-4xl mt-4 flex justify-center items-center">
          Buy Me a Chai
          <span>
            <Image
              src="/tea.gif"
              alt="Animated background"
              width={62}
              height={60}
              className="object-cover z-[-10]"
              priority
              unoptimized // <-- important for GIFs
            />
          </span>
        </div>
        <p>
          A crowd-funding platform for your favorite creators. Support them by
          buying them a chai. You can also create your own chai and get funded
          by your fans.
        </p>
        <div>
          <button
            type="button"
            className="text-white cursor-pointer bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
          >
            Start Now
          </button>
          <button
            type="button"
            className="text-white cursor-pointer bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto py-20">
        <h1 className="text-xl font-bold text-center ">
          Your Fans can buy you a Chai
        </h1>
        <div className="flex gap-5 justify-around ">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img
              width={88}
              className="bg-zinc-500 rounded-full p-2 text-black"
              src="/man.gif"
              alt=""
            />
            <p className="font-bold">fans want to help </p>
            <p className="">Your fans are available for you to help you.</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img
              width={88}
              className="bg-zinc-500 rounded-full p-2 text-black"
              src="/coin.gif"
              alt=""
            />
            <p className="font-bold">fans want to help </p>
            <p className="">Your fans are available for you to help you.</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img
              width={88}
              className="bg-zinc-500 rounded-full p-2 text-black"
              src="/group.gif"
              alt=""
            />
            <p className="font-bold">fans want to help </p>
            <p className="">Your fans are available for you to help you.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10 "></div>


      <div className="text-white container mx-auto py-20">
        <h1 className="text-xl font-bold text-center ">
          Learn More About Us
        </h1>
        <div className="flex gap-5 justify-around ">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img
              width={88}
              className="bg-zinc-500 rounded-full p-2 text-black"
              src="/man.gif"
              alt=""
            />
            <p className="font-bold">fans want to help </p>
            <p className="">Your fans are available for you to help you.</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img
              width={88}
              className="bg-zinc-500 rounded-full p-2 text-black"
              src="/coin.gif"
              alt=""
            />
            <p className="font-bold">fans want to help </p>
            <p className="">Your fans are available for you to help you.</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img
              width={88}
              className="bg-zinc-500 rounded-full p-2 text-black"
              src="/group.gif"
              alt=""
            />
            <p className="font-bold">fans want to help </p>
            <p className="">Your fans are available for you to help you.</p>
          </div>
        </div>
      </div>
    </>
  );
}

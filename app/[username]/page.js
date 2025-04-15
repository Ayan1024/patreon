import React from "react";

const Username = ({ params }) => {
  return (
    <>
      <div className="cover w-full relative" style={{ height: "45vh" }}>
        <img
          src="/cover1.jpg"
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="profile absolute -bottom-10 right-[46%] rounded-full border-white border-4">
          <img
            className="rounded-full"
            width={100}
            height={100}
            src="/profile.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="info flex justify-center items-center my-10  gap-2 flex-col">
        <div className="font-bold text-2xl">@{params.username}</div>
        <div className="text-xl text-slate-500">A fuckedUp Engineering</div>
      </div>
      <div className="payment flex gap-3 mx-auto w-[80%] ">
        <div className="support bg-red-500 w-1/2">
          {/* Show list of all the supporters as a leaderboard */}
<h2 className="text-lg">Supporters</h2>


          <ul>
            <li>subham donet 30 with a message </li>
          </ul>
        </div>
        <div className="makePayment w-1/2 bg-green-500"></div>
      </div>
    </>
  );
};

export default Username;

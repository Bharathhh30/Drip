import React from "react";
import { SpotlightPreview } from "../components/SpotLightUsage";

function Gradient() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" flex justify-center items-center min-h-screen ">
        <div className="absolute inset-0 -z-10 h-full w-full">
          {/* Gradient background */}
          <div className="[background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#ff69b4_100%)] h-full w-full absolute z-[-20]" />

          {/* Dotted overlay */}
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] z-[-10]" />
        </div>
        Gradient
      </div>
      <div>
        <h1>hello</h1>
      </div>
      <div>
        <SpotlightPreview />
      </div>

      <div>
        <div className="flex flex-col justify-center items-center h-100 w-80 mt-2 mb-10  bg-amber-300">
          <div className="flex flex-col justify-center items-center bg-white rotate-0 hover:rotate-0 h-80 w-60 hover:h-[28rem] hover:w-[20rem] hover:transition-all duration-300 border-2">
            hi
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gradient;


// https://cdn.prod.website-files.com/67607a4da94c236117377bec/6764819726da5b0ff20bf33d_arrow-pink.webp
// zig zag print
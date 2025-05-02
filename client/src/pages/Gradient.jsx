import React from "react";
import { SpotlightPreview } from "../components/SpotLightUsage";

function Gradient() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" flex justify-center items-center min-h-screen ">
      <div class="absolute rounded-b-4xl     inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#f7dc6f_100%)]"></div>
        Gradient
      </div>
      <div>
        <h1>hello</h1>
      </div>
      <div>
        <SpotlightPreview/>
      </div>
    </div>
  );
}

export default Gradient;

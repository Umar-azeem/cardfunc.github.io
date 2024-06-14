import React from "react";
import { Class } from "./commponets/Class";
import { Bar } from "./nav/Bar";

function MyComponent() {
 return(
    <>
    <section className="bg-black">
    <div className="fixed w-full bg-black h-20 overflow-hidden border-spacing-x-16"> 
     <Bar />
    </div>
      <div>
        <Class />
      </div>      
      </section>
    </>
  );
}

export default MyComponent;

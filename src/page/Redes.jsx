import React from "react";

const Redes = () => {
  return (
    <div className=" max-w-7xl  shadow-2xl shadow-black  mx-auto bg-orange-200/70  py-10 mb-10">
      <div className="h-[450px] sm:h-[700px]  w-full max-w-3xl mx-auto  mt-16">
        <iframe
          width="100%"
          height="100%"
          src="https://www.instagram.com/laterrazadelacasa/embed"
          frameborder="0"
          style={{ borderRadius: "30px" }}
          allowFullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Redes;

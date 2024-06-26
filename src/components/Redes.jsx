import React from "react";

const Redes = () => {
  return (
    <div className="p-3 mx-auto mt-4 max-w-5xl">
      <p className="dark:text-white font-black mb-3">Síguenos en instagram</p>
      <div className="h-[450px] sm:h-[650px] ">
        <iframe
          title="myFrame"
          width="100%"
          height="100%"
          src="https://www.instagram.com/laterrazadelacasa/embed"
          frameBorder="0"
          style={{ borderRadius: "8px" }}
          // allowFullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="scrollbar-hidden"
        ></iframe>
      </div>
    </div>
  );
};

export default Redes;
